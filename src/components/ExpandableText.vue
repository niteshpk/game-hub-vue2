<template>
    <div>
        <p v-html="shortenedText"></p>

        <v-btn small text color="primary" @click="toggleExpanded">
            {{ expanded ? 'Show Less' : 'Read More' }}
        </v-btn>
    </div>
</template>

<script>
const limit = 300;

export default {
    name: 'ExpandableText',
    props: {
        text: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            expanded: false,
        }
    },
    computed: {
        shortenedText() {
            if (this.expanded || this.text.length <= limit) return this.text;

            // Prevent cutting off in the middle of a word
            let trimmedText = this.text.substring(0, limit);
            return trimmedText.substring(0, trimmedText.lastIndexOf(" ")) + "...";
        }
    },
    methods: {
        toggleExpanded() {
            this.expanded = !this.expanded;
        }
    }
}
</script>

<style scoped>
p {
    line-height: 1.5;
    font-size: 1rem;
}

/* Improve button spacing for mobile */
@media (max-width: 600px) {
    p {
        font-size: 0.9rem;
    }

    .v-btn {
        font-size: 0.8rem;
    }
}
</style>
