<template>
  <app-store-grid :data="fiction" />
</template>

<script>
import { mapGetters } from 'vuex'
import AppStoreGrid from '~/components/AppStoreGrid.vue'

export default {
  components: {
    AppStoreGrid
  },
  computed: {
    ...mapGetters(['fiction'])
  }
}
</script>
