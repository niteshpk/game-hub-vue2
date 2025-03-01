<template>
    <v-chip :class="`white--text darken-4 bg-${ratingColor} ${ratingColor} lighten-5 subtitle-2`">{{ rating }}</v-chip>
</template>

<script>
export default {
    name: 'CriticScore',
    data() {
        return {
            rating: 92,
        }
    },
    computed: {
        ratingColor() {
            return this.rating > 75 ? 'green' : this.rating > 60 ? 'yellow' : '';
        }
    }
}
</script>