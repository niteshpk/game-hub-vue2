import APIClient from "@/services/api-client";

const gameClient = new APIClient("/games");

export default {
  namespaced: true,
  state: {
    games: [],
    isLoading: false,
  },
  getters: {
    getGames: (state) => state.games,
  },
  mutations: {
    addGames(state, games) {
      state.games = [...state.games, ...games];
    },
    resetGames(state, games) {
      state.games = games;
    },
  },
  actions: {
    async fetchGames({ commit }) {
      const gameQuery = this.getters["gameQuery/getGameQuery"];

      try {
        const data = await gameClient.getAll({
          params: { ...gameQuery, page_size: 30 },
        });
        // console.log(
        //   "Fetched initial games:",
        //   { ...gameQuery, page_size: 30 },
        //   data.results.map((game) => ({
        //     id: game.id,
        //   }))
        // );
        commit("resetGames", data.results);
      } catch (error) {
        console.error("Error fetching initial games:", error);
      }
    },

    async loadMoreGames({ commit }) {
      if (this.state.isLoading) return;
      this.state.isLoading = true;
      const gameQuery = this.getters["gameQuery/getGameQuery"];

      try {
        const data = await gameClient.getAll({
          params: { ...gameQuery, page_size: 10 },
        });
        //
        // console.log(
        //   "Fetched loadMoreGames games:",
        //   { ...gameQuery, page_size: 10 },
        //   data.results.map((game) => ({
        //     id: game.id,
        //   }))
        // );
        commit("addGames", data.results);
      } catch (error) {
        console.error("Error loading more games:", error);
      } finally {
        this.state.isLoading = false;
      }
    },
  },
};
