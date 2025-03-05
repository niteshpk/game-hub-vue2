<template>
    <v-card class="error-card w-100" outlined>
        <v-card-title class="error-title">
            <v-icon color="red" class="mr-2">mdi-alert-circle</v-icon>
            Error
        </v-card-title>

        <v-card-text class="error-text">
            {{ errorMessage || "Something went wrong. Please try again." }}
        </v-card-text>

        <v-card-actions class="justify-center">
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
    max-width: 90%;
    width: 400px;
    margin: 20px auto;
    padding: 16px;
    border: 1px solid red;
    border-radius: 8px;
    text-align: center;
}

/* Adjustments for smaller screens */
@media (max-width: 600px) {
    .error-card {
        max-width: 100%;
        width: 90%;
        padding: 12px;
    }
}

.error-title {
    font-size: 1.2rem;
    font-weight: bold;
    color: red;
    display: flex;
    align-items: center;
    justify-content: center;
}

.error-text {
    font-size: 1rem;
    line-height: 1.4;
}

/* Center the retry button */
.v-card-actions {
    display: flex;
    justify-content: center;
}
</style>
