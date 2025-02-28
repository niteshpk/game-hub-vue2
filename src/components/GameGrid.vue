<template>
  <div class="d-flex flex-wrap ">
    <!-- <div>loader skeleton</div> -->
    <v-row class="my-5">
      <app-game-card-container v-for="n in 8" :key="n" />
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'GameGrid',
  data() {
    return {
    }
  }
}
</script>

<style scoped></style>
