export default {
  namespaced: true,
  state: {
    error: null,
  },
  getters: {
    error: (state) => state.error,
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {
    raiseError({ commit }, error) {
      commit("setError", { message: error, timeout: 3000 });
    },
    clearError({ commit }) {
      commit("setError", null);
    },
  },
};
