import Genres from "@/data/Genres";

export default {
  namespaced: true,
  state: {
    genres: [...Genres.results],
  },
  getters: {
    getGenres: (state) => state.genres,
  },
};
