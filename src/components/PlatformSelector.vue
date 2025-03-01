<template>
  <v-menu bottom :offset-y="offset">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on" class="mr-2">
        {{ selectedPlatform?.name }} <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item-group v-model="selectedPlatform">
        <v-list-item v-for="(plateform) in items" :key="plateform?.id" :value="plateform">
          <v-list-item-title>{{ plateform?.name }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
import Platforms from '@/data/Platforms';

export default {
  name: 'PlatformSelector',
  data() {
    return {
      offset: true,
      items: Platforms.results.map(platform => ({
        name: platform.name,
        id: platform.id,
      })),
      selectedPlatform: { name: 'Platform', id: null },
    }
  }
}
</script>

<style scoped></style>
