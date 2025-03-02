<template>
  <div class="mt-5">
    <v-btn icon @click="$router.push('/')" class="ml-3">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>

    <div class="home ma-5">
      <v-row v-if="isLoading">
        <v-col class="col-6">
          <v-skeleton-loader type="article"></v-skeleton-loader>

          <v-row class="mt-5">
            <v-col class="col-6">
              <v-skeleton-loader type="heading" class="mb-2"></v-skeleton-loader>
              <v-skeleton-loader type="text"></v-skeleton-loader>
            </v-col>
            <v-col class="col-6">
              <v-skeleton-loader type="heading" class="mb-2"></v-skeleton-loader>
              <v-skeleton-loader type="text"></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>

        <v-col class="col-6">
          <v-skeleton-loader type="image"></v-skeleton-loader>
        </v-col>
      </v-row>

      <v-row v-if="!isLoading && game">
        <v-col class="col-6">
          <app-game-heading :text="game.name" />
          <app-expandable-text :text="game.description" />
          <app-game-attributes :game="game" class="mt-5" />
        </v-col>

        <v-col class="col-6">
          <app-game-trailer :gameId="game.id" />
          <app-game-screenshots :gameId="game.id" class="mt-1" />
        </v-col>
      </v-row>
    </div>

  </div>
</template>
<script>
import { mapGetters } from 'vuex';


export default {
  name: 'GameDetailPage',
  methods: {
    goBack() {
      this.$router.push('/');
      this.$store.dispatch('game/resetGame');
    },
  },
  computed: {
    ...mapGetters('game', ['game', 'isLoading']),
  },
  mounted() {
    this.$store.dispatch('game/fetchGame', this.$route.params.slug);
  },
}
</script>