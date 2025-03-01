<template>
  <v-menu bottom :offset-y="offset">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on" class="mr-2">
        {{ selectedPlatform }} <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item-group>
        <v-list-item v-for="({ name, id }) in items" :key="id" :value="id" @click="setPlatform(id)">
          <v-list-item-title>{{ name }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
import Platforms from '@/data/Platforms';
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'PlatformSelector',
  data() {
    return {
      offset: true,
      items: Platforms.results.map(platform => ({
        name: platform.name,
        id: platform.id,
      })),
    }
  },
  methods: {
    ...mapActions("gameQuery", ["setPlatform"]),
  },
  computed: {
    ...mapGetters("gameQuery", ['getGameQuery']),
    selectedPlatform() {
      return this.items.find(platform => platform.id === this.getGameQuery.parent_platforms)?.name || 'Platform';
    }
  },
}
</script>

<style scoped></style>
