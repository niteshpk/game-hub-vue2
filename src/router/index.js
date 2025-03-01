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
          import(/* webpackChunkName: "home" */ "../pages/GameDetailPage.vue"),
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
