<template>
    <v-container class=" error-container d-flex align-center justify-center" dark>
        <v-card class="pa-5 " width="100%" align="center" outlined hover rounded>
            <v-card-title class="headline  justify-center">Oops!</v-card-title>
            <v-card-text class="error-text d-flex align-center justify-center">
                {{ errorMessage }}
            </v-card-text>
            <v-btn color="primary" @click="redirect()">{{ buttonText }}</v-btn>
        </v-card>
    </v-container>
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
            required: false
        },
        buttonText: {
            type: String,
            default: "Go Home",
            required: false
        },
        handler: {
            type: Function,
            default: () => { },
            required: false
        }
    },
    methods: {
        redirect() {
            if (this.redirectUrl && this.$route.path !== this.redirectUrl) {
                this.$router.push(this.redirectUrl).
                    catch((err) => {
                        if (err.name !== "NavigationDuplicated") {
                            console.error(err);
                        }
                    });
                return;
            }

            this.handler();
        },
    },
};
</script>

<style scoped>
.error-container {
    height: 100vh;
    padding: 16px;
}

.error-text {
    font-size: 18px;
    color: #ff5252;
}
</style>
