<template>
    <v-row justify="center">
        <v-col v-for="file in screenshots" :key="file.id" cols="12" sm="6" md="4" lg="3" class="pa-2">
            <v-img :src="file.image" :lazy-src="file.image" contain class="screenshot-image"></v-img>
        </v-col>
    </v-row>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'GameScreenshots',
    props: {
        gameId: {
            type: Number,
            required: true
        }
    },
    computed: {
        ...mapGetters('game', ['screenshots']),
    },
    mounted() {
        if (!this.screenshots || this.screenshots.length === 0) {
            this.$store.dispatch('game/getScreenshots', this.gameId);
        }
    }
}
</script>

<style scoped>
.screenshot-image {
    border-radius: 8px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
}
</style>
