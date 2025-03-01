import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  gameQuery: {
    genres: null,
    platformId: null,
    sortOrder: null,
    searchText: null,
    page: 0,
  },
};

const mutations = {
  SET_SEARCH_TEXT(state, searchText) {
    state.gameQuery.searchText = searchText;
  },
  SET_GENRE_ID(state, genres) {
    state.gameQuery.genres = genres;
    state.gameQuery.searchText = null; // Reset searchText (similar to Zustand behavior)
  },
  SET_PLATFORM_ID(state, platformId) {
    state.gameQuery.platformId = platformId;
    state.gameQuery.searchText = null; // Reset searchText
  },
  SET_SORT_ORDER(state, sortOrder) {
    state.gameQuery.sortOrder = sortOrder;
  },
  SET_PAGE(state, page) {
    state.gameQuery.page = page;
  },
};

const actions = {
  setSearchText({ commit }, searchText) {
    commit("SET_SEARCH_TEXT", searchText);
  },
  setGenres({ commit, dispatch }, genres) {
    commit("SET_GENRE_ID", genres);
    dispatch("games/fetchGames", null, { root: true });
  },
  setPlatformId({ commit }, platformId) {
    commit("SET_PLATFORM_ID", platformId);
  },
  setSortOrder({ commit }, sortOrder) {
    commit("SET_SORT_ORDER", sortOrder);
  },
  nextPageData({ commit, dispatch }) {
    const page = this.state.gameQuery.gameQuery.page;
    commit("SET_PAGE", page + 1);
    dispatch("games/fetchGames", null, { root: true });
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
