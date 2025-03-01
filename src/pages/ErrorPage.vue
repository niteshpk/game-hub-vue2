<template>
    <div>
        <NavBar />
        <v-container class="mt-5">
            <v-card class="pa-5">
                <v-card-title class="headline">Oops</v-card-title>
                <v-card-text>
                    {{ isRouteError ? "This page does not exist." : "An unexpected error occurred." }}
                </v-card-text>
            </v-card>
        </v-container>
    </div>
</template>

<script>
import NavBar from "../components/NavBar";
import { useRoute } from "vue-router";

export default {
    name: "ErrorPage",
    components: { NavBar },
    computed: {
        isRouteError() {
            const route = useRoute();
            return route.name === null; // If route is not found
        }
    }
};
</script>

<style scoped>
.v-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>