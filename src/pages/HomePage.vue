<template>
  <div class="home">
    <div class="d-flex ">

      <div class="col-2">
        <app-genre-list />
      </div>

      <div class="col-10">
        <app-game-heading />

        <div class="d-flex">
          <app-platform-selector />

          <app-order-by-selector />
        </div>

        <app-game-grid />

      </div>
    </div>

  </div>

</template>
<script>

export default {
  data() {
    return {


    }
  }
}
</script>