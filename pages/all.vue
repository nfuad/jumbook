<template>
  <app-store-grid :data="data" />
</template>

<script>
import { mapState } from 'vuex'
import AppStoreGrid from '~/components/AppStoreGrid.vue'

export default {
  components: {
    AppStoreGrid
  },
  computed: {
    ...mapState(['data'])
  }
}
</script>
