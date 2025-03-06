<template>
  <v-container fluid>
    <v-row class="my-5 flex-wrap overflow-y-auto" id="scroll-target" :style="containerStyle">

      <!-- Skeleton loaders while loading -->
      <template v-if="initialGamesLoading">
        <v-col v-for="n in 6" :key="n" cols="12" sm="6" md="4">
          <app-game-card-skeleton />
        </v-col>
      </template>

      <!-- Game Cards -->
      <app-game-card-container v-for="game in games" :key="game.id" :game="game" v-scroll:#scroll-target="onScroll" />

      <template v-if="!initialGamesLoading && !moreGamesLoading && !games.length && error">
        <v-col cols="12 mt-5">
          <app-error-card :errorMessage="'No games found!'" :handler="refresh" :buttonText="'Refresh'" />
        </v-col>

      </template>
      <!-- More games loading -->
      <template v-if="moreGamesLoading">
        <v-col v-for="n in 3" :key="n" cols="12" sm="6" md="4">
          <app-game-card-skeleton />
        </v-col>
      </template>

      <!-- Error Handling -->
      <!-- <v-col cols="12" v-if="error && !games.length">
        <app-error-card :errorMessage="error.message" :redirectUrl="'/'" />
      </v-col> -->

    </v-row>
  </v-container>
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
    ...mapActions("gameQuery", ["setPage", "nextPageData", "resetGameQuery"]),
    ...mapActions("error", ["clearError"]),

    onScroll(e) {
      this.offsetTop = e.target.scrollTop;

      // Detect if scroll reached the bottom
      if (e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight - 10) {
        this.nextPageData();
      }
    },

    refresh() {
      this.clearError();
      this.resetGameQuery();
      this.nextPageData();
    },
  },
  computed: {
    ...mapGetters("games", ['games', 'initialGamesLoading', 'moreGamesLoading']),
    ...mapGetters("error", ["error"]),

    containerStyle() {
      return this.games.length ? "max-height: 1150px" : "";
    },
  }
}
</script>

<style scoped>
/* Ensure grid responsiveness */
#scroll-target {
  max-height: 1150px;
  overflow-y: auto;
}

/* Adjust max height for smaller screens */
@media (max-width: 768px) {
  #scroll-target {
    max-height: 800px;
  }
}
</style>
