import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "main-layout" */ "../layouts/MainLayout.vue"),
    children: [
      {
        path: "home",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
      },
      {
        path: "my-account",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/MyAccountView.vue"),
      },
      {
        path: "users",
        component: () =>
          import(/* webpackChunkName: "users" */ "../views/UsersView.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "auth-layout" */ "../layouts/AuthLayout.vue"),
    children: [
      {
        path: "login",
        component: () =>
          import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
      },
      {
        path: "register",
        component: () =>
          import(
            /* webpackChunkName: "register" */ "../views/RegisterView.vue"
          ),
      },
    ],
  },

  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
