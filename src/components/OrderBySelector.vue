<template>
  <v-menu bottom :offset-y="offset">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on" class="mr-2">
        Order By: {{ selectedSortOrder?.label }} <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item-group v-model="selectedSortOrder">
        <v-list-item v-for="(order, index) in items" :key="index" :value="order">
          <v-list-item-title>{{ order?.label }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
const sortOrders = [
  { value: '', label: 'Relevance' },
  { value: '-added', label: 'Date added' },
  { value: 'name', label: 'Name' },
  { value: '-released', label: 'Release date' },
  { value: '-metacritic', label: 'Popularity' },
  { value: '-rating', label: 'Average rating' },
];

export default {
  name: 'OrderBySelector',
  data() {
    return {
      offset: true,
      items: sortOrders,
      selectedSortOrder: { ...sortOrders[0] }
    }
  }
}
</script>

<style scoped></style>
