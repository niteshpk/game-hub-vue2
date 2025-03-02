import APIClient from "@/services/api-client";
import getCroppedImageUrl from "@/services/image-url";

export default {
  namespaced: true,
  state: {
    game: null,
    isLoading: false,
    movie: null,
    screenshots: [],
  },
  getters: {
    game: (state) => state.game,
    isLoading: (state) => state.isLoading,
    movie: (state) => state.movie,
    screenshots: (state) => state.screenshots,
  },
  mutations: {
    setGame(state, game) {
      state.game = game;
    },
    setIsLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    setMovie(state, movie) {
      state.movie = movie;
    },
    setScreenshots(state, screenshots) {
      state.screenshots = screenshots;
    },
  },
  actions: {
    async fetchGame({ commit }, slug) {
      if (!slug) {
        return;
      }

      if (this.state.isLoading) {
        return;
      }

      commit("setGame", null);
      commit("setIsLoading", true);

      const gameClient = new APIClient("/games");
      try {
        const game = await gameClient.get(slug);
        commit("setGame", game);
      } catch (error) {
        console.error("Error fetching game:", error);
      } finally {
        commit("setIsLoading", false);
      }
    },

    async getMovie({ commit }, id) {
      commit("setMovie", null);

      const gameClient = new APIClient("/games");
      try {
        const {
          results: [movie],
        } = await gameClient.get(`${id}/movies`);

        if (!movie) {
          return;
        }

        const newMovie = {
          preview: getCroppedImageUrl(movie.preview),
          src: movie.data[480],
        };
        commit("setMovie", newMovie);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    },

    async getScreenshots({ commit }, id) {
      commit("setScreenshots", []);
      const gameClient = new APIClient("/games");
      try {
        const { results: screenshots } = await gameClient.get(
          `${id}/screenshots`
        );

        const newScreenshots = screenshots.map((screenshot) => ({
          id: screenshot.id,
          image: getCroppedImageUrl(screenshot.image),
        }));

        commit("setScreenshots", newScreenshots);
      } catch (error) {
        console.error("Error fetching screenshots:", error);
      }
    },

    resetGame({ commit }) {
      commit("setGame", null);
      commit("setMovie", null);
      commit("setScreenshots", []);
      commit("setIsLoading", false);
    },
  },
};
