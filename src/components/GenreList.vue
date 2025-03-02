<template>
  <div>
    <h3 class="py-2">Genres</h3>
    <v-list>
      <v-list-item-group v-model="getGameQuery.genres">
        <v-list-item v-for="genre in getGenres" :key="genre.id" link @click="setGenres(genre.id)" :value="genre.id">
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
import getCroppedImageUrl from '@/services/image-url'
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'GenreList',
  data() {
    return {
      selectedGenre: null
    }
  },
  methods: {
    getCroppedImageUrl: (url) => {
      return getCroppedImageUrl(url);
    },

    ...mapActions("gameQuery", ["setGenres"]),
  },
  computed: {
    ...mapGetters("genres", ['getGenres']),
    ...mapGetters("gameQuery", ['getGameQuery']),
  }
}
</script>

<style scoped></style>
