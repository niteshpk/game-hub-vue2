<template>
  <v-menu bottom :offset-y="offset">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on" class="mr-2" :block="$vuetify.breakpoint.xs">
        Order By: {{ selectedSortOrder }} <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
    </template>

    <v-list dense>
      <v-list-item-group>
        <v-list-item v-for="(order, index) in items" :key="index" :value="order.value"
          @click="setOrdering(order.value)">
          <v-list-item-title>{{ order.label }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

const sortOrders = [
  { value: "", label: "Relevance" },
  { value: "-added", label: "Date added" },
  { value: "name", label: "Name" },
  { value: "-released", label: "Release date" },
  { value: "-metacritic", label: "Popularity" },
  { value: "-rating", label: "Average rating" },
];

export default {
  name: "OrderBySelector",
  data() {
    return {
      offset: true,
      items: sortOrders,
    };
  },
  methods: {
    ...mapActions("gameQuery", ["setOrdering"]),
  },
  computed: {
    ...mapGetters("gameQuery", ["getGameQuery"]),
    selectedSortOrder() {
      return (
        sortOrders.find((order) => order.value === this.getGameQuery.ordering)
          ?.label || "Relevance"
      );
    },
  },
};
</script>

<style scoped>
@media (max-width: 600px) {
  .v-menu {
    width: 100%;
  }
}
</style>
