<template>
  <div class="d-flex flex-wrap test">
    <!-- <div>loader skeleton</div> -->
    <app-game-card-container v-for="n in 8" :key="n" class="col-3" />
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
