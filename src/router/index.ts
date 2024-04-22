import { createRouter, createWebHashHistory } from "vue-router";
// 通用页面
const constantRoutes = [
  {
    path: "/redirect",
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/view/redirect/index.vue"),
      },
    ],
    meta: {
      hidden: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/view/login/index.vue"),
    meta: {
      hidden: true,
    },
  },
  {
    path: "/404",
    component: () => import("@/view/error/404.vue"),
    meta: {
      hidden: true,
    },
  },
  {
    path: "/401",
    component: () => import("@/view/error/401.vue"),
    meta: {
      hidden: true,
    },
  },
];

export const asyncRoutes = [
  {},
  {
    path: "*",
    redirect: "/404",
    meta: {
      hidden: true,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});

export default router;
