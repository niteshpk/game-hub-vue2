<template>
  <div>
    <h1 class="py-2">{{ text }}</h1>
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

<style scoped></style>
