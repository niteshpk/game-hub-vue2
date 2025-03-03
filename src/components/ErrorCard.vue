<template>
    <v-card class="error-card w-100" outlined>
        <v-card-title class="error-title">
            <v-icon color="red" class="mr-2">mdi-alert-circle</v-icon>
            Error
        </v-card-title>

        <v-card-text class="error-text">
            {{ errorMessage || "Something went wrong. Please try again." }}
        </v-card-text>

        <v-card-actions>
            <v-btn color="primary" @click="retry">Retry</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: "ErrorCard",
    props: {
        errorMessage: {
            type: String,
            required: true
        },
        redirectUrl: {
            type: String,
            required: true
        }
    },
    methods: {
        retry() {
            this.$router.push(this.redirectUrl);
        }
    }
};
</script>

<style scoped>
.error-card {
    max-width: 400px;
    margin: 20px auto;
    padding: 16px;
    border: 1px solid red;
    border-radius: 8px;
    text-align: center;
}

.error-title {
    font-size: 18px;
    font-weight: bold;
    color: red;
}

.error-text {
    font-size: 16px;
}
</style>