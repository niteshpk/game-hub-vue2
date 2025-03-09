import APIClient from "@/services/api-client";

const gameClient = new APIClient("/games");

export default {
  namespaced: true,
  state: {
    games: [],
    initialGamesLoading: false,
    moreGamesLoading: false,
  },
  getters: {
    games: (state) => state.games,
    initialGamesLoading: (state) => state.initialGamesLoading,
    moreGamesLoading: (state) => state.moreGamesLoading,
  },
  mutations: {
    addGames(state, games) {
      state.games = [...state.games, ...games];
    },
    resetGames(state, games) {
      state.games = games;
    },
    setInitialGamesLoading(state, initialGamesLoading) {
      state.initialGamesLoading = initialGamesLoading;
    },
    setMoreGamesLoading(state, moreGamesLoading) {
      state.moreGamesLoading = moreGamesLoading;
    },
  },
  actions: {
    async loadMoreGames({ commit, dispatch }) {
      commit("setMoreGamesLoading", true);
      const gameQuery = this.getters["gameQuery/getGameQuery"];
      const request = { ...gameQuery, page_size: 30 };

      try {
        const data = await gameClient.getAll({
          params: request,
        });

        if (request.page === 1) {
          if (data.results.length === 0) {
            dispatch("error/raiseError", "No games found.", {
              root: true,
            });
          }
          commit("resetGames", data.results);
        } else {
          commit("addGames", data.results);
        }
      } catch (error) {
        console.error("Error loading more games:", error);
        dispatch("error/raiseError", "Error loading games. Please try again.", {
          root: true,
        });
      } finally {
        commit("setMoreGamesLoading", false);
      }
    },
  },
};
