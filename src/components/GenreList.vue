<template>
  <div>
    <h3 class="py-2">Genres</h3>
    <v-list>
      <v-list-item-group v-model="selectedGenre">
        <v-list-item v-for="genre in genres" :key="genre.id" router link>
          <v-list-item-avatar rounded>
            <v-img :src="getCroppedImageUrl(genre.image_background)"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ genre.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

  </div>
</template>

<script>
import Genres from '../data/Genres'

export default {
  name: 'GenreList',
  data() {
    return {
      genres: Genres.results,
      selectedGenre: null,
    }
  },
  methods: {
    getCroppedImageUrl: (url) => {
      if (!url) return '';

      const target = 'media/';
      const index = url.indexOf(target) + target.length;
      return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
    }

  }
}
</script>

<style scoped></style>
