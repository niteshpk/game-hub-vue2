<template>
    <v-menu bottom :offset-y="offset">
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on" class="mr-2" :block="$vuetify.breakpoint.xs">
                {{ selectedGenreName }} <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
        </template>

        <v-list dense>
            <v-list-item-group v-model="getGameQuery.genres">
                <v-list-item v-for="genre in getGenres" :key="genre.id" @click="setGenres([genre.id])">
                    <v-list-item-title>{{ genre.name }}</v-list-item-title>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-menu>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "GenreSelector",
    data() {
        return {
            offset: true,
        };
    },
    computed: {
        ...mapGetters("genres", ["getGenres"]),
        ...mapGetters("gameQuery", ["getGameQuery"]),
        selectedGenreName() {
            const genre = this.getGenres.find(g => g.id === this.getGameQuery.genres);
            return genre ? genre.name : "Genre";
        },
    },
    methods: {
        ...mapActions("gameQuery", ["setGenres"]),
    },
};
</script>

<style scoped></style>