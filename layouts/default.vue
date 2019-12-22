<template>
  <div>
    <app-nav />
    <main>
      <nuxt class="app-body" />
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppFooter from '~/components/AppFooter.vue'
import AppNav from '~/components/AppNav.vue'

export default {
  components: {
    AppFooter,
    AppNav
  }
}
</script>

<style scoped>
body {
  border: 10px solid #ccc;
  min-height: 100vh;
  font-size: 16px;
  line-height: 1.4;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

main {
  padding: 0;
  width: 95vw;
  margin-left: 2vw;
}

.app-body {
  margin: 0 auto;
  margin-top: 100px;
}

@media screen and (min-width: 1000px) {
  main {
    padding: 40px;
    width: 80vw;
    margin: 0 auto;
  }
}
</style>
