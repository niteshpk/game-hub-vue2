<template>
    <v-app>
        <h1>Login page</h1>

        <div class="text-center">
            <v-btn depressed color="primary" dark @click="$router.push('/home')">
                Redirect Home Page
            </v-btn>
        </div>

    </v-app>
</template>

<script>
export default {
    name: "LoginView",
    data() {
        return {

        };
    },
    methods: {
        submit() {

        },
    },
};
</script>

<style scoped></style>