<template>
  <v-row class="my-5 flex-wrap overflow-y-auto" id="scroll-target" style="max-height: 1150px">

    <template v-if="initialGamesLoading">
      <v-col class="col-4" v-for="n in 6" :key="n">
        <app-game-card-skeleton />
      </v-col>
    </template>

    <app-game-card-container v-for="game in games" :key="game.id" :game="game" v-scroll:#scroll-target="onScroll" />

    <template v-if="moreGamesLoading">
      <v-col class="col-4" v-for="n in 3" :key="n">
        <app-game-card-skeleton />
      </v-col>
    </template>

    <!-- <v-col class="col-12" v-if="error && !games.length">
      <app-error-card :errorMessage="error.message" :redirectUrl="'/'" />
    </v-col> -->
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

    // ...mapActions("error", ["clearError"]),

    onScroll(e) {
      this.offsetTop = e.target.scrollTop

      // Detect if scroll reached the bottom
      if (e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight - 10) {
        this.nextPageData();
      }
    },
  },
  computed: {
    ...mapGetters("games", ['games', 'initialGamesLoading', 'moreGamesLoading']),
    // ...mapGetters("error", ["error"]),
  }
}
</script>

<style scoped></style>
