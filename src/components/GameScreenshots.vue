<template>
    <v-row>
        <v-col v-for="file in screenshots" :key="file.id" cols="12" md="6" class="pa-1">
            <v-img :src="file.image" contain></v-img>
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
        this.$store.dispatch('game/getScreenshots', this.gameId);
    }
}
</script>