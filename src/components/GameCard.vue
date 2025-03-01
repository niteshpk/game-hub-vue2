<template>
  <v-card hover rounded outlined @click="handleGameClick()">
    <v-img height="250" :src="getCroppedImageUrl(game.background_image)"></v-img>

    <v-card-text>
      <v-row class="mx-0" align="center">
        <div class="my-4 text-subtitle-1 flex gap-2">

          <app-platform-icon-list />
        </div>

        <v-spacer></v-spacer>
        <div class="ms-4">
          <app-critic-score />
        </div>
      </v-row>

      <v-card-title class="px-0 pb-1">
        {{ game.name }}
        <v-icon class="mx-2">{{ icon }}</v-icon>
      </v-card-title>
    </v-card-text>

  </v-card>
</template>

<script>
import getCroppedImageUrl from '@/services/image-url'
export default {
  name: 'GameCard',
  props: {
    game: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      icon: 'mdi-thumb-up',
    }
  },
  methods: {
    handleGameClick: function () {
      this.$router.push({ name: 'game-detail', params: { slug: this.slug } })
    },
    getCroppedImageUrl: function (url) {
      return getCroppedImageUrl(url);
    }
  }
}
</script>

<style scoped></style>
