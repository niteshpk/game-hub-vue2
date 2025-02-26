<template>
  <v-system-bar color="error" dark v-if="error">
    <div class="text-center white--text darken-5">System info goes here</div>
    <v-spacer></v-spacer>
  </v-system-bar>
</template>

<script>
export default {
  name: 'app-system-bar',
  data() {
    return {
      error: false
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
