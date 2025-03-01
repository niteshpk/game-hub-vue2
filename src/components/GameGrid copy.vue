<template>
  <v-container>
    <v-list id="scroll-target" style="max-height: 400px" class="overflow-y-auto">
      <v-list-item v-for="(item, index) in items" :key="index" v-scroll:#scroll-target="onScroll">
        <v-list-item-content>
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-progress-circular v-if="loading" indeterminate color="primary"></v-progress-circular>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`),
      loading: false,
      offsetTop: 0,
    };
  },
  methods: {
    loadMore() {
      if (this.loading) return;
      this.loading = true;

      setTimeout(() => {
        const newItems = Array.from({ length: 10 }, (_, i) => `Item ${this.items.length + i + 1}`);
        this.items.push(...newItems);
        this.loading = false;
      }, 1000);
    },
    onScroll(e) {
      this.offsetTop = e.target.scrollTop

      // Detect if scroll reached the bottom
      if (e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight - 10) {
        this.loadMore();
      }
    },
  },
};
</script>
