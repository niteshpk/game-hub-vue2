<template>
  <div>
    <v-toolbar elevation="0" class="fixed-toolbar">

      <v-toolbar-title>House of Games</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-text-field dense hide-details solo clearable prepend-inner-icon="mdi-magnify"
        placeholder="Search for games"></v-text-field>

      <v-spacer></v-spacer>


      <!-- Dark Mode Button -->
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon @click="toggleTheme" v-bind="attrs" v-on="on">
            <v-icon v-if="!isDarkTheme">mdi-moon-waning-crescent</v-icon>
            <v-icon v-else>mdi-white-balance-sunny</v-icon>
          </v-btn>
        </template>
        <span>Toggle {{ isDarkTheme ? 'Light' : 'Dark' }} mode</span>
      </v-tooltip>


    </v-toolbar>

    <v-main>
      <slot></slot>
    </v-main>
  </div>
</template>

<script>

export default {
  name: 'app-navbar',
  data: () => ({
    isDarkTheme: true,
  }),
  methods: {
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      this.$vuetify.theme.dark = this.isDarkTheme; // Toggle Vuetify theme
    },
  },
}
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
</style>
