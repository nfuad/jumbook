<template>
  <header>
    <github-corner />
    <nav>
      <nuxt-link exact to="/"><h1>Jumbook</h1></nuxt-link>
      <ul>
        <li>
          <nuxt-link to="/all">All</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/fiction">Fiction</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/nonfiction">Non Fiction</nuxt-link>
        </li>
        <li>
          <div v-if="cartCount > 0" class="cart-total">{{ cartCount }}</div>
          <nuxt-link to="/cart">Cart</nuxt-link>
        </li>
        <li>
          <nuxt-link exact to="/about">About</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import GithubCorner from './GithubCorner'

export default {
  components: { GithubCorner },
  computed: {
    ...mapGetters(['cartCount'])
  }
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 100%;
  background: white;
  z-index: 1;
  top: 0;
}

h1 {
  font-size: 25px;
  font-weight: 100;
}

nav {
  display: flex;
  width: 80vw;
  justify-content: space-between;
  align-items: center;
  box-shadow: 8px 5px 20px 0px aliceblue;
  border-bottom-right-radius: 5px;
  padding: 12px 0;

  ul {
    padding-left: 0;
    li {
      display: inline;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: 13px;
      padding: 0 20px;
      border-left: 1px solid #ddd;
      border-right: 1px solid #ddd;
      position: relative;

      &:last-child {
        border-right: none;
      }

      a {
        color: black;
        &:hover {
          color: #c14103;
        }
      }
    }
  }
}

.cart-total {
  position: absolute;
  border-radius: 1000px;
  background: black;
  color: white;
  font-size: 10px;
  padding: 3px;
  top: -18px;
  right: -5px;
  width: 25px;
  text-align: center;
  height: 25px;
  font-size: 10px;
  padding: 6px 10px;
  font-weight: bold;
}

@media screen and (max-width: 850px) {
  h1 {
    margin: 0;
  }
  nav ul li {
    padding: 0 5px !important;
    border-left: none !important;
    border-right: none !important;
  }
}

@media screen and (max-width: 600px) {
  h1 {
    font-size: 15px;
  }

  nav {
    flex-direction: column;

    ul li {
      font-size: 10px;
    }
  }
}
</style>
