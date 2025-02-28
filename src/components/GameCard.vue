<template>
  <v-card hover rounded>
    <v-img height="250" :src="img"></v-img>

    <v-card-text>
      <v-row class="mx-0" align="center">
        <div class="my-4 text-subtitle-1 flex gap-2">

          <app-platform-icon-list />
        </div>

        <v-spacer></v-spacer>
        <div class=" ms-4">
          <v-chip class="white--text darken-4 bg-green green lighten-5 subtitle-2">{{ rating }}</v-chip>
        </div>
      </v-row>

      <v-card-title class="px-0 pb-1">
        {{ title }}
        <v-icon class="mx-2">{{ icon }}</v-icon>
      </v-card-title>
    </v-card-text>

  </v-card>
</template>

<script>
export default {
  name: 'GameCard',
  data() {
    return {
      title: 'Cafe Badilico',
      rating: 92,
      img: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
      icon: 'mdi-thumb-up',
    }
  }
}
</script>

<style scoped></style>
