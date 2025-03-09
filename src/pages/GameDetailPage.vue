<template>
  <div :class="{ 'mt-5': $vuetify.breakpoint.mdAndUp }">


    <v-container class="home">
      <v-row>
        <!-- Left Column: Game Details -->
        <v-col cols="12" md="6">
          <template v-if="isGameLoading">
            <v-skeleton-loader type="article"></v-skeleton-loader>
            <v-row class="mt-5">
              <v-col cols="6">
                <v-skeleton-loader type="heading" class="mb-2"></v-skeleton-loader>
                <v-skeleton-loader type="text"></v-skeleton-loader>
              </v-col>
              <v-col cols="6">
                <v-skeleton-loader type="heading" class="mb-2"></v-skeleton-loader>
                <v-skeleton-loader type="text"></v-skeleton-loader>
              </v-col>
            </v-row>
          </template>

          <template v-else-if="game">
            <div class="d-flex align-center flex-direction-column">

              <!-- Back Button -->
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon @click="goBack" v-bind="attrs" v-on="on">
                    <v-icon>mdi-arrow-left</v-icon>
                  </v-btn>
                </template>
                <span>Go back</span>
              </v-tooltip>

              <app-game-heading :text="game.name" />

              <v-spacer></v-spacer>

            </div>

            <app-expandable-text :text="game.description" />
            <app-game-attributes :game="game" class="mt-5" />
          </template>
        </v-col>

        <!-- Right Column: Trailer & Screenshots -->
        <v-col cols="12" md="6">
          <v-skeleton-loader v-if="isGameLoading || isMovieLoading || isScreenshotsLoading"
            type="image"></v-skeleton-loader>

          <template v-if="game">
            <app-game-trailer :gameId="game.id" />
            <app-game-screenshots :gameId="game.id" class="mt-1" />
          </template>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'GameDetailPage',
  computed: {
    ...mapGetters('game', [
      'game',
      'isGameLoading',
      'isMovieLoading',
      'isScreenshotsLoading'
    ]),
  },
  methods: {
    ...mapActions('game', ['fetchGame', 'resetGame']),
    goBack() {
      this.resetGame();
      this.$router.push('/');
    },
  },
  mounted() {
    this.fetchGame(this.$route.params.slug);
  },
  beforeUnmount() {
    this.resetGame();
  }
}
</script>

<style scoped>
.home {
  margin-top: 20px;
}

.v-container {
  max-width: 1200px;
}

.game-heading {
  padding-left: 0px !important;
}
</style>
