import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import games from "./games";
import genres from "./genres";
import platforms from "./platforms";
import gameQuery from "./gameQuery";

export default new Vuex.Store({
  modules: {
    gameQuery,
    games,
    genres,
    platforms,
  },
  getters: {
    getSelectedGenresName: (state) => {
      const selectedGenres = state.gameQuery.gameQuery.genres;
      const genres = state.genres.genres;

      if (!selectedGenres || !genres.length) return "All Games";

      const name = genres.find((genre) => genre.id === selectedGenres)?.name;

      return `${name} Games`;
    },
  },
});
