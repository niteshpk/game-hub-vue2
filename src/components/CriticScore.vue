<template>
    <v-chip :color="ratingColor" class="subtitle-2 white--text">
        {{ score }}
    </v-chip>
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
            if (this.score > 75) return 'green';
            if (this.score > 60) return 'yellow';
            return 'red'; // Default color for low scores
        }
    }
}
</script>
