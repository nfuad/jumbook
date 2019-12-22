<template>
  <div>
    <app-cart-steps />
    <hr />
    <h1 class="center">Your Cart</h1>

    <section v-if="cartUIStatus === 'idle'">
      <app-cart-display />
    </section>

    <section v-else-if="cartUIStatus === 'loading'" class="loader">
      <app-loader />
    </section>

    <section
      v-else-if="cartUIStatus === 'success' || 'failure'"
      class="success"
    >
      <p>
        Thank you for your purchase. You'll be receiving your items in 4
        business days (if your payment was sucessful.)
      </p>
      <p>Forgot something?</p>
      <button class="pay-with-stripe">
        <nuxt-link exact to="/">Back to Home</nuxt-link>
      </button>
    </section>

    <app-sales-info />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppLoader from '~/components/AppLoader.vue'
import AppCartSteps from '~/components/AppCartSteps.vue'
import AppSalesInfo from '~/components/AppSalesInfo.vue'
import AppCartDisplay from '~/components/AppCartDisplay.vue'

export default {
  components: {
    AppCartDisplay,
    AppSalesInfo,
    AppCartSteps,
    AppLoader
  },
  computed: {
    ...mapState(['cartUIStatus'])
  }
}
</script>

<style lang="scss" scoped>
.loader {
  display: flex;
  justify-content: center;
}

.success {
  text-align: center;
}
</style>
