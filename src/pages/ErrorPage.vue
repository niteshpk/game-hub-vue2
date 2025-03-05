<template>
    <div>
        <NavBar />
        <v-container class="error-container">
            <v-card class="pa-5 text-center">
                <v-card-title class="headline">Oops!</v-card-title>
                <v-card-text class="error-text">
                    {{ isRouteError ? "This page does not exist." : "An unexpected error occurred." }}
                </v-card-text>
                <v-btn color="primary" @click="goHome">Go Home</v-btn>
            </v-card>
        </v-container>
    </div>
</template>

<script>
import NavBar from "../components/NavBar";
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";

export default {
    name: "ErrorPage",
    components: { NavBar },
    setup() {
        const route = useRoute();
        const router = useRouter();

        const isRouteError = computed(() => !route.name); // Proper check for 404

        const goHome = () => {
            router.push("/");
        };

        return { isRouteError, goHome };
    }
};
</script>

<style scoped>
.error-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
}

.error-text {
    font-size: 18px;
    color: #555;
    margin-bottom: 16px;
}

.v-btn {
    transition: transform 0.2s ease-in-out;
}

.v-btn:hover {
    transform: scale(1.05);
}
</style>
