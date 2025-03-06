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
        path: "",
        component: () =>
          import(/* webpackChunkName: "home" */ "../pages/HomePage.vue"),
      },
      {
        path: "/games/:slug",
        name: "game-detail",
        component: () =>
          import(
            /* webpackChunkName: "game-detail-page" */ "../pages/GameDetailPage.vue"
          ),
      },
      {
        path: "/error",
        name: "error",
        props: { isRouteError: true },
        component: () =>
          import(/* webpackChunkName: "error-page" */ "../pages/ErrorPage.vue"),
      },
    ],
  },
  {
    path: "*",
    redirect: "/error",
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
