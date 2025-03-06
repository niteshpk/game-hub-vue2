<template>
    <v-app>
        <app-navbar>
            <!-- Responsive error bar -->
            <v-system-bar v-if="error" window dark color="red" class="error-bar">
                <v-icon class="mr-2">mdi-alert-circle</v-icon>
                <span class="error-text"> {{ error?.message || "An error occurred" }} </span>
                <v-spacer></v-spacer>
                <v-icon class="close-icon" @click="clearError">mdi-close</v-icon>
            </v-system-bar>

            <!-- Main content -->
            <router-view />
        </app-navbar>
        <!-- <app-footer></app-footer> -->

    </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "AppMainLayout",
    methods: {
        ...mapActions("error", ["clearError"]),
    },
    computed: {
        ...mapGetters("error", ["error"]),
    }
};
</script>

<style scoped>
.error-bar {
    padding: 8px;
    font-size: 14px;
    display: flex;
    align-items: center;
    animation: fadeIn 0.3s ease-in-out;
}

.error-text {
    flex: 1;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.close-icon {
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
}

.close-icon:hover {
    transform: scale(1.1);
}

/* Smooth fade-in animation */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-5px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
