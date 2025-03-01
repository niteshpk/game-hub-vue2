<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  methods: {
    async fetchGames() {
      await this.$store.dispatch('gameQuery/nextPageData');
    }
  },
  created() {
    this.fetchGames(); // Load games when the app starts
  },
}
</script>