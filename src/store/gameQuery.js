import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  gameQuery: {
    genres: null,
    parent_platforms: null,
    ordering: null,
    search: null,
    page: 0,
  },
};

const mutations = {
  SET_GAME_QUERY(state, gameQuery) {
    state.gameQuery = gameQuery;
  },
};

const actions = {
  nextPageData({ commit, dispatch }) {
    const moreGamesLoading = this.getters["games/moreGamesLoading"];

    if (moreGamesLoading) return;

    const page = this.state.gameQuery.gameQuery.page;

    commit("SET_GAME_QUERY", {
      genres: null,
      parent_platforms: null,
      ordering: null,
      search: null,
      page: page + 1,
    });
    dispatch("games/loadMoreGames", null, { root: true });
  },
  setGenres({ commit, dispatch }, genres) {
    commit("SET_GAME_QUERY", {
      genres: genres,
      parent_platforms: null,
      ordering: null,
      search: null,
      page: 1,
    });

    dispatch("games/loadMoreGames", null, { root: true });
  },
  setPlatform({ commit, dispatch }, parent_platforms) {
    const { genres, ordering, search } = this.state.gameQuery.gameQuery;

    commit("SET_GAME_QUERY", {
      genres: genres,
      parent_platforms: parent_platforms,
      ordering: ordering,
      search: search,
      page: 1,
    });

    dispatch("games/loadMoreGames", null, { root: true });
  },
  setOrdering({ commit, dispatch }, ordering) {
    const { genres, parent_platforms, search } = this.state.gameQuery.gameQuery;

    commit("SET_GAME_QUERY", {
      genres: genres,
      parent_platforms: parent_platforms,
      ordering: ordering,
      search: search,
      page: 1,
    });

    dispatch("games/loadMoreGames", null, { root: true });
  },

  setSearch({ commit, dispatch }, search) {
    commit("SET_GAME_QUERY", {
      genres: null,
      parent_platforms: null,
      ordering: null,
      search: search,
      page: 1,
    });

    dispatch("games/loadMoreGames", null, { root: true });
  },
};

const getters = {
  getGameQuery: (state) => state.gameQuery,
};

export default {
  namespaced: true, // Allows using store modules with a namespace
  state,
  mutations,
  actions,
  getters,
};
