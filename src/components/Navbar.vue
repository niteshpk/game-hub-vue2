<template>
  <div>
    <v-toolbar elevation="0" class="fixed-toolbar">
      <v-toolbar-title class="app-title" @click="handleAppTitleClick()">House of Games</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-text-field dense hide-details solo clearable prepend-inner-icon="mdi-magnify" :value="getGameQuery.search"
        @keyup.enter="setSearch($event.target.value)" @keyup.tab="setSearch($event.target.value)"
        @blur="setSearch($event.target.value)" placeholder="Search for games" />

      <v-spacer></v-spacer>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon @click="toggleTheme" v-bind="attrs" v-on="on">
            <v-icon v-if="!isDarkTheme">mdi-moon-waning-crescent</v-icon>
            <v-icon v-else>mdi-white-balance-sunny</v-icon>
          </v-btn>
        </template>
        <span>Toggle {{ isDarkTheme ? "Light" : "Dark" }} mode</span>
      </v-tooltip>
    </v-toolbar>

    <v-main>
      <slot></slot>
    </v-main>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "app-navbar",
  data: () => ({
    isDarkTheme: true,
  }),
  methods: {
    ...mapActions("gameQuery", ["setSearch"]),

    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      this.$vuetify.theme.dark = this.isDarkTheme; // Toggle Vuetify theme
    },

    handleAppTitleClick() {
      if (this.$route.path !== "/") {
        this.$router.push("/");
      }
    },
  },

  computed: {
    ...mapGetters("gameQuery", ["getGameQuery"]),
  }
};
</script>

<style scoped>
.fixed-toolbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

main {
  padding-top: 64px !important;
  min-height: 100vh;
}

.app-title {
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
}
</style>
