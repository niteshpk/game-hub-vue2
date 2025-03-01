<template>
  <div class="mt-5">
    <v-btn icon @click="$router.push('/')" class="ml-3">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>

    <div class="home ma-5">
      <v-row>
        <v-col class="col-6">
          <app-game-heading :text="'Games'" />
          <app-expandable-text />
          <app-game-attributes class="mt-5" />
        </v-col>

        <v-col class="col-6">
          <app-game-trailer />
          <app-game-screenshots class="mt-1" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>

export default {
  name: 'GameDetailPage',

}
</script>