<template>
  <v-card hover rounded outlined @click="handleGameClick">
    <v-img height="250" :src="croppedImage"></v-img>

    <v-card-text>
      <v-row class="mx-0" align="center">
        <div class="my-4 text-subtitle-1 d-flex gap-2">
          <app-platform-icon-list :platforms="game.parent_platforms" />
        </div>

        <v-spacer></v-spacer>

        <div v-if="game.metacritic">
          <app-critic-score :score="game.metacritic" />
        </div>
      </v-row>

      <v-card-title class="px-0 pb-1 d-flex align-center">
        {{ game.name }}
        <v-icon class="mx-2" color="blue">{{ icon }}</v-icon>
      </v-card-title>
    </v-card-text>
  </v-card>
</template>

<script>
import getCroppedImageUrl from '@/services/image-url'; // ✅ Still Importing

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
      icon: 'mdi-thumb-up'
    };
  },
  methods: {
    handleGameClick() {
      this.$router.push({ name: 'game-detail', params: { slug: this.game.slug } });
    }
  },
  computed: {
    croppedImage() {
      return getCroppedImageUrl(this.game.background_image);
    }
  }
};
</script>
