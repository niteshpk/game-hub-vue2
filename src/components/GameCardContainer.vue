<template>
  <v-col class="col-4">
    <app-game-card :game="game" />
  </v-col>
</template>

<script>
export default {
  name: 'GameCardContainer',
  props: {
    game: {
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped></style>
