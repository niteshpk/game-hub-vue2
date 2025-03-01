<template>
  <v-row class="my-5 flex-wrap">
    <app-game-card-container v-for="game in games" :key="game.id" :game="game" />
  </v-row>
</template>

<script>
import Games from '@/data/Games';

export default {
  name: 'GameGrid',
  data() {
    return {
      games: Games.results,
    }
  }
}
</script>

<style scoped></style>
