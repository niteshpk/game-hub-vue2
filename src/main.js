import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Navbar from "./components/Navbar.vue";
import GameGrid from "./components/GameGrid.vue";
import GameCardContainer from "./components/GameCardContainer.vue";

Vue.config.productionTip = false;
Vue.component("app-navbar", Navbar);
Vue.component("app-game-grid", GameGrid);
Vue.component("app-game-card-container", GameCardContainer);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
