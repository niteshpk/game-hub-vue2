import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Navbar from "./components/Navbar.vue";
import GameGrid from "./components/GameGrid.vue";
import GameCardContainer from "./components/GameCardContainer.vue";
import GameCard from "./components/GameCard.vue";
import GenreList from "./components/GenreList.vue";
import GameHeading from "./components/GameHeading.vue";
import PlatformSelector from "./components/PlatformSelector.vue";
import OrderBySelector from "./components/OrderBySelector.vue";
import PlatformIconList from "./components/PlatformIconList.vue";

Vue.config.productionTip = false;
Vue.component("app-navbar", Navbar);
Vue.component("app-game-grid", GameGrid);
Vue.component("app-game-card-container", GameCardContainer);
Vue.component("app-game-card", GameCard);
Vue.component("app-genre-list", GenreList);
Vue.component("app-game-heading", GameHeading);
Vue.component("app-platform-selector", PlatformSelector);
Vue.component("app-order-by-selector", OrderBySelector);
Vue.component("app-platform-icon-list", PlatformIconList);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
