<template>
    <v-chip :class="`white--text darken-4 bg-${ratingColor} ${ratingColor} lighten-5 subtitle-2`">{{ score }}</v-chip>
</template>

<script>
export default {
    name: 'CriticScore',
    props: {
        score: {
            type: Number,
            required: true
        }
    },
    computed: {
        ratingColor() {
            return this.score > 75 ? 'green' : this.score > 60 ? 'yellow' : '';
        }
    }
}
</script>