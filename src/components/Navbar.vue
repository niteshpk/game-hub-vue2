<template>
  <div>
    <v-toolbar elevation="0">
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>House of Games</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-text-field dense hide-details solo clearable append-icon="mdi-magnify" placeholder="Search"></v-text-field>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-lightbulb-on-10</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-moon-waning-crescent</v-icon>
      </v-btn>
    </v-toolbar>

    <v-main class="mt-5">
      <slot></slot>
    </v-main>
  </div>
</template>

<script>

export default {
  name: 'app-navbar',
  data: () => ({

  }),
}
</script>

<style scoped>
.logout {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
