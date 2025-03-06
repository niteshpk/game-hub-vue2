<template>
  <div>
    <v-app-bar app dense class="fixed-toolbar">
      <v-toolbar-title class="app-title" @click="handleAppTitleClick()">House of Games</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Search Field (Hidden on Small Screens) -->
      <v-text-field v-if="!isMobile" dense hide-details solo clearable prepend-inner-icon="mdi-magnify"
        :value="getGameQuery.search" @keyup.enter="setSearch($event.target.value)"
        @keyup.tab="setSearch($event.target.value)" @blur="setSearch($event.target.value)"
        placeholder="Search for games" class="search-bar" />

      <!-- Search Button (Visible Only on Small Screens) -->
      <v-btn v-if="isMobile" icon @click="showSearch = !showSearch">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

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
    </v-app-bar>

    <!-- Search Bar Overlay (Visible Only on Small Screens When Toggled) -->
    <v-expand-transition>
      <v-text-field v-if="isMobile && showSearch" solo dense hide-details clearable prepend-inner-icon="mdi-magnify"
        :value="getGameQuery.search" @keyup.enter="setSearch($event.target.value)" @blur="showSearch = false"
        placeholder="Search for games" class="mobile-search" :style="{ backgroundColor: mobileSearchBgColor }" />
    </v-expand-transition>

    <v-main>
      <slot></slot>
    </v-main>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "NavBar",
  data: () => ({
    isDarkTheme: true,
    showSearch: false, // Controls search field visibility on mobile
  }),
  computed: {
    ...mapGetters("gameQuery", ["getGameQuery"]),
    isMobile() {
      return this.$vuetify.breakpoint.xsOnly;
    },

    mobileSearchBgColor() {
      return this.isMobile && this.isDarkTheme ? "#444" : "light-grey";
    },
  },
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

.app-title {
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
}

/* Adjust for mobile screens */
@media (max-width: 600px) {
  .app-title {
    font-size: 18px;
  }
}

/* Search Bar Styling */
.search-bar {
  max-width: 300px;
}

.mobile-search {
  position: absolute;
  top: 56px;
  left: 0;
  right: 0;
  z-index: 999;
  padding: 8px;
}
</style>
