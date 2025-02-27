<template>
  <v-toolbar dense elevation="4">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>GameHub</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-text-field dense hide-details solo clearable append-icon="mdi-magnify" placeholder="Search"></v-text-field>


    <v-btn icon>
      <v-icon>mdi-lightbulb-on-10</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-moon-waning-crescent</v-icon>
    </v-btn>
  </v-toolbar>

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
