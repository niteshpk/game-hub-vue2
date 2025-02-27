<template>
  <v-card class="test1 mt-4 mx-3 pa-0" hover>
    <v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <div class="my-4 text-subtitle-1 flex gap-2">
          <!-- add windows icon here -->
          <v-icon class="mr-2">mdi-microsoft-windows</v-icon>
          <v-icon class="mr-2">mdi-sony-playstation</v-icon>
          <v-icon class="mr-2">mdi-microsoft-xbox</v-icon>
          <v-icon class="mr-2">mdi-apple</v-icon>
          <v-icon class="mr-2">mdi-penguin</v-icon>
          <v-icon class="mr-2">mdi-android</v-icon>
          <v-icon class="mr-2">mdi-nintendo-game-boy</v-icon>
        </div>

        <v-spacer></v-spacer>
        <div class=" ms-4">
          <v-chip class="white--text darken-4 bg-green green lighten-5 subtitle-2">92</v-chip>
        </div>

      </v-row>


      <v-card-title class="px-0 pb-1">
        Cafe Badilico
        <v-icon class="mx-2">mdi-thumb-up</v-icon>
      </v-card-title>

    </v-card-text>

  </v-card>

</template>

<script>
export default {
  name: 'GameCardContainer',
  data() {
    return {
    }
  }
}
</script>

<style scoped></style>
