import APIClient from "@/services/api-client";
import getCroppedImageUrl from "@/services/image-url";

export default {
  namespaced: true,
  state: {
    game: null,
    movie: null,
    screenshots: [],
    isGameLoading: false,
    isMovieLoading: false,
    isScreenshotsLoading: false,
  },
  getters: {
    game: (state) => state.game,
    movie: (state) => state.movie,
    screenshots: (state) => state.screenshots,
    isGameLoading: (state) => state.isGameLoading,
    isMovieLoading: (state) => state.isMovieLoading,
    isScreenshotsLoading: (state) => state.isScreenshots,
  },
  mutations: {
    setGame(state, game) {
      state.game = game;
    },
    setMovie(state, movie) {
      state.movie = movie;
    },
    setScreenshots(state, screenshots) {
      state.screenshots = screenshots;
    },
    setIsGameLoading(state, isGameLoading) {
      state.isGameLoading = isGameLoading;
    },
    setIsMovieLoading(state, isMovieLoading) {
      state.isMovieLoading = isMovieLoading;
    },
    setIsScreenshotsLoading(state, isScreenshotsLoading) {
      state.isScreenshotsLoading = isScreenshotsLoading;
    },
  },
  actions: {
    async fetchGame({ commit }, slug) {
      if (!slug) {
        return;
      }

      if (this.state.isGameLoading) {
        return;
      }

      commit("setGame", null);
      commit("setIsGameLoading", true);

      const gameClient = new APIClient("/games");
      try {
        const game = await gameClient.get(slug);
        commit("setGame", game);
      } catch (error) {
        console.error("Error fetching game:", error);
      } finally {
        commit("setIsGameLoading", false);
      }
    },

    async getMovie({ commit }, id) {
      commit("setMovie", null);
      commit("setIsMovieLoading", true);

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
      } finally {
        commit("setIsMovieLoading", false);
      }
    },

    async getScreenshots({ commit }, id) {
      commit("setScreenshots", []);
      commit("setIsScreenshotsLoading", true);
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
      } finally {
        commit("setIsScreenshotsLoading", false);
      }
    },

    resetGame({ commit }) {
      commit("setGame", null);
      commit("setMovie", null);
      commit("setScreenshots", []);
      commit("setIsGameLoading", false);
      commit("setIsMovieLoading", false);
      commit("setIsScreenshotsLoading", false);
    },
  },
};
