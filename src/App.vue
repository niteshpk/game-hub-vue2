<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />

    <v-app>
      <v-container>
        <v-btn color="primary">Click Me</v-btn>
      </v-container>
    </v-app>
  </div>
</template>

<style></style>
