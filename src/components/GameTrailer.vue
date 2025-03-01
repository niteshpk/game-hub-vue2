<template>
    <video :src="trailer.data[480]" :poster="trailer.preview" class="video" controls></video>
</template>

<script>
import Movies from '@/data/Movies';
export default {
    name: 'GameTrailer',
    data() {
        return {
            trailer: Movies.results[0],
        }
    },
    computed: {
        ratingColor() {
            return this.rating > 75 ? 'green' : this.rating > 60 ? 'yellow' : '';
        }
    }
}
</script>

<style scopped>
.video {
    width: 100%;
    height: auto;
}
</style>