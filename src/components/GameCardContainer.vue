<template>
  <v-col cols="12" sm="6" md="4">
    <app-game-card :game="game" />
  </v-col>
</template>

<script>
export default {
  name: "GameCardContainer",
  props: {
    game: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
