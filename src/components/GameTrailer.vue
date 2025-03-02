<template>
    <div v-if="movie">
        <video :src="movie.src" :poster="movie.preview" class="video" controls></video>
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
        this.$store.dispatch("game/getMovie", this.gameId);
    }
}
</script>

<style scopped>
.video {
    width: 100%;
    height: auto;
}
</style>