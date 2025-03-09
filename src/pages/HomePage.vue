<template>
  <v-container fluid class="home">
    <v-row>
      <!-- Sidebar: Hidden on small screens, takes 2 columns on medium+ -->
      <v-col cols="12" md="2" class="d-none d-md-block">
        <app-genre-list />
      </v-col>

      <!-- Main content -->
      <v-col cols="12" md="10">
        <app-game-heading :text="genreName" />

        <v-row>
          <!-- GenreSelector (Visible Only on Small Screens) -->
          <v-col cols="12" sm="6" v-show="$vuetify.breakpoint.xsOnly">
            <app-genre-selector />
          </v-col>

          <v-col cols="12" sm="3" md="2">
            <app-platform-selector />
          </v-col>
          <v-col cols="12" sm="2" md="1">
            <app-order-by-selector />
          </v-col>
        </v-row>

        <app-game-grid />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HomePage",
  computed: {
    genreName() {
      const name = this.getSelectedGenresName;

      if (name?.toLowerCase()?.includes("games")) {
        return name;
      }

      return `${name} Games`;
    },
    ...mapGetters(["getSelectedGenresName"]),
  },
};
</script>

<style scoped></style>
