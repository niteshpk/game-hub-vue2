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
    async fetchGames({ commit }) {
      commit("setInitialGamesLoading", true);
      commit("resetGames", []);

      const gameQuery = this.getters["gameQuery/getGameQuery"];

      try {
        const data = await gameClient.getAll({
          params: { ...gameQuery, page_size: 30 },
        });
        // console.log(JSON.stringify({ ...gameQuery, page_size: 30 }));
        commit("resetGames", data.results);
      } catch (error) {
        console.error("Error fetching initial games:", error);
      } finally {
        commit("setInitialGamesLoading", false);
      }
    },

    async loadMoreGames({ commit }) {
      commit("setMoreGamesLoading", true);
      const gameQuery = this.getters["gameQuery/getGameQuery"];

      try {
        const data = await gameClient.getAll({
          params: { ...gameQuery, page_size: 30 },
        });

        // console.log(JSON.stringify({ ...gameQuery, page_size: 30 }));
        commit("addGames", data.results);
      } catch (error) {
        console.error("Error loading more games:", error);
      } finally {
        commit("setMoreGamesLoading", false);
      }
    },
  },
};
