import axios from 'axios'
import uuidv1 from 'uuid/v1'
import data from '~/static/data.json'

export const state = () => ({
  cartUIStatus: 'idle',
  data,
  cart: []
})

export const getters = {
  featuredProducts: (state) => state.data.slice(0, 6),
  fiction: (state) => state.data.filter((el) => el.genre === 'Fiction'),
  nonfiction: (state) => state.data.filter((el) => el.genre === 'NonFiction'),
  cartCount: (state) => {
    if (!state.cart.length) return 0
    return state.cart.reduce((ac, next) => ac + next.quantity, 0)
  },
  cartTotal: (state) => {
    if (!state.cart.length) return 0
    return state.cart.reduce((ac, next) => ac + next.quantity * next.price, 0)
  }
}

export const mutations = {
  updateCartUI: (state, payload) => (state.cartUIStatus = payload),
  clearCart: (state) => {
    state.cart = []
    state.cartUIStatus = 'idle'
  },
  addToCart: (state, payload) => {
    const itemfound = state.cart.find((el) => el.id === payload.id)
    itemfound
      ? (itemfound.quantity += payload.quantity)
      : state.cart.push(payload)
  }
}

export const actions = {
  async postStripeFunction({ getters, commit }, payload) {
    commit('updateCartUI', 'loading')

    try {
      await axios
        .post(
          'https://ecommerce-netlify.netlify.com/.netlify/functions/index',
          {
            stripeEmail: payload.stripeEmail,
            stripeAmt: Math.floor(getters.cartTotal * 100), // it expects the price in cents, as an integer
            stripeToken: 'tok_visa', // testing token, later we would use payload.data.token
            stripeIdempotency: uuidv1() // we use this library to create a unique id
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        .then((res) => {
          if (res.status === 200) {
            commit('updateCartUI', 'success')
            setTimeout(() => commit('clearCart'), 5000)
          } else {
            commit('updateCartUI', 'failure')
            // allow them to try again
            setTimeout(() => commit('updateCartUI', 'idle'), 5000)
          }
        })
    } catch (err) {
      commit('updateCartUI', 'failure')
    }
  }
}