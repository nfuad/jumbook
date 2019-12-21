import Vue from 'vue'

// get proper currency format
// can be extended for other currencies with proper logic
Vue.filter('dollar', (value) => `$${parseFloat(value).toFixed(2)}`)
