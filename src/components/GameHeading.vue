<template>
  <div class="heading-container">
    <h1 class="game-heading">{{ text }}</h1>
  </div>
</template>

<script>
export default {
  name: 'GameHeading',
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.game-heading {
  font-size: 2.5rem;
  font-weight: bold;
  padding: 1rem;
}

/* Tablet */
@media (max-width: 1024px) {
  .game-heading {
    font-size: 2rem;
    padding: 0.8rem;
  }
}

/* Mobile */
@media (max-width: 600px) {
  .game-heading {
    font-size: 1.5rem;
    padding: 0.5rem;
  }
}
</style>
