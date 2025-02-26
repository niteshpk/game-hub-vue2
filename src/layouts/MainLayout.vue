<template>
    <v-app>
        <v-card class=" overflow-hidden" height="100%" width="100%">

            <app-system-bar />

            <v-app-bar color="light-blue darken-4" dark>
                <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

                <v-toolbar-title>Title</v-toolbar-title>
            </v-app-bar>


            <v-navigation-drawer v-model="drawer" absolute temporary>
                <v-list-item>
                    <v-list-item-avatar>
                        <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>John Leider</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list dense>
                    <v-list-item v-for="item in items" :key="item.title" router link :to="item.to">
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <div class="logout">

                        <v-divider></v-divider>

                        <v-list-item @click="logout" link>
                            <v-list-item-icon>
                                <v-icon>mdi-logout</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title>Logout</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </div>
                </v-list>
            </v-navigation-drawer>

            <v-main>
                <router-view />
            </v-main>


        </v-card>


    </v-app>

</template>

<script>
export default {
    name: 'app-main-layout',
    data() {
        return {
            drawer: false,
            error: false,
            items: [
                { title: 'Home', icon: 'mdi-home-city', to: '/home' },
                { title: 'Users', icon: 'mdi-account-group-outline', to: '/users' },
                { title: 'My Account', icon: 'mdi-account', to: '/my-account' },
                { title: 'Register', icon: 'mdi-account-plus', to: '/register' },
                { title: 'Login', icon: 'mdi-login', to: 'login' },
            ],
            mini: true,
        }
    },

    methods: {
        logout() {
            this.$router.push('/login');
        }
    }
}
</script>

<style scoped>
.logout {
    position: absolute;
    bottom: 0;
    width: 100%;
}
</style>