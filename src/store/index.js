import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import games from "./games";
import genres from "./genres";
import platforms from "./platforms";
import gameQuery from "./gameQuery";
import game from "./game";
import error from "./error";

export default new Vuex.Store({
  modules: {
    gameQuery,
    games,
    genres,
    platforms,
    game,
    error,
  },
  getters: {
    getSelectedGenresName: (state) => {
      const selectedGenres = state.gameQuery.gameQuery.genres?.[0];
      const genres = state.genres.genres;

      if (!selectedGenres || !genres.length) return "All Games";

      return genres.find((genre) => genre.id === selectedGenres)?.name;
    },
  },
});
