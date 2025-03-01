<template>
  <v-row class="my-5 flex-wrap overflow-y-auto" id="scroll-target" style="max-height: 1150px">
    <app-game-card-container v-for="game in getGames" :key="game.id" :game="game" v-scroll:#scroll-target="onScroll" />
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'GameGrid',
  data() {
    return {
      offsetTop: 0,
    };
  },
  methods: {
    ...mapActions("gameQuery", ["setPage", "nextPageData"]),

    onScroll(e) {
      this.offsetTop = e.target.scrollTop

      // Detect if scroll reached the bottom
      if (e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight - 10) {
        this.nextPageData();
      }
    },
  },
  computed: {
    ...mapGetters("games", ['getGames']),
  }
}
</script>

<style scoped></style>
