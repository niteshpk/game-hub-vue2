<template>
  <div class="genre-list">
    <h3 class="py-2 genre-title">Genres</h3>
    <v-list dense>
      <v-list-item-group v-model="getGameQuery.genres">
        <v-list-item v-for="genre in getGenres" :key="genre.id" link @click="setGenres(genre.id)" :value="genre.id">
          <v-list-item-avatar rounded class="genre-avatar">
            <v-img :src="getCroppedImageUrl(genre.image_background)"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="genre-name">
              {{ genre.name }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import getCroppedImageUrl from "@/services/image-url";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "GenreList",
  data() {
    return {
      selectedGenre: null,
    };
  },
  methods: {
    getCroppedImageUrl: (url) => getCroppedImageUrl(url),
    ...mapActions("gameQuery", ["setGenres"]),
  },
  computed: {
    ...mapGetters("genres", ["getGenres"]),
    ...mapGetters("gameQuery", ["getGameQuery"]),
  },
};
</script>

<style scoped>
.genre-list {
  padding: 10px;
}

.genre-title {
  font-size: 24px;
  font-weight: bold;
}

/* Adjust spacing and font sizes */
.genre-name {
  font-size: 1rem;
}

/* Hide avatars on small screens */
@media (max-width: 600px) {
  .genre-avatar {
    display: none;
  }

  .genre-name {
    font-size: 0.9rem;
  }
}

/* Tablet adjustments */
@media (max-width: 960px) {
  .genre-name {
    font-size: 1rem;
  }
}
</style>
