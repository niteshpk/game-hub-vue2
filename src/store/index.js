import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import games from "./games";
import genres from "./genres";
import platforms from "./platforms";
import gameQuery from "./gameQuery";

export default new Vuex.Store({
  modules: {
    gameQuery,
    games,
    genres,
    platforms,
  },
});
