<template>
    <div>
        <div v-html="description"></div>

        <v-btn small @click="toggleExpanded()" class="warning">
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
    methods: {
        toggleExpanded() {
            this.expanded = !this.expanded;
        }
    },
    computed: {
        description() {
            return this.expanded ? this.text : this.text.substring(0, limit) + '...';
        }
    }
}
</script>