<template>
    <v-app>
        <app-navbar>
            <v-system-bar window dark color="red" v-if="error">
                <v-icon>mdi-alert-circle</v-icon>
                <span> {{ error.message }} </span>
                <v-spacer></v-spacer>
                <v-icon @click="clearError()">mdi-close</v-icon>
            </v-system-bar>

            <router-view />
        </app-navbar>

    </v-app>

</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'app-main-layout',
    methods: {
        ...mapActions("error", ["clearError"]),
    },
    computed: {
        ...mapGetters("error", ["error"]),
    }
}
</script>

<style scoped>
.v-icon:hover {
    cursor: pointer;
}
</style>