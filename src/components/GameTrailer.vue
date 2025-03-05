<template>
    <div v-if="movie">
        <video :src="movie.src" :poster="movie.preview" class="video" controls preload="metadata"></video>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'GameTrailer',
    props: {
        gameId: {
            type: Number,
            required: true
        }
    },
    computed: {
        ...mapGetters('game', ['movie']),
    },
    mounted() {
        if (!this.movie) {
            this.$store.dispatch("game/getMovie", this.gameId);
        }
    }
}
</script>

<style scoped>
.video {
    width: 100%;
    max-width: 800px;
    /* Limit max width for large screens */
    height: auto;
    aspect-ratio: 16 / 9;
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
}
</style>
