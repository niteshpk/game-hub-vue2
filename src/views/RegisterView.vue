<template>
    <v-app>
        <h1>Register page</h1>

        <div class="text-center">
            <v-btn color="primary" depressed dark @click="$router.push('/my-account')">
                Redirect My Account Page
            </v-btn>
        </div>

    </v-app>
</template>

<script>
export default {
    name: "RegisterView",
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