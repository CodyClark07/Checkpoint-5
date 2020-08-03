import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../pages/Home.vue";
// @ts-ignore
import Profile from "../pages/Profile.vue";
import Blogs from "../pages/Blogs.vue";

import { authGuard } from "@bcwdev/auth0-vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: authGuard,
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: Blogs,

  },
  {
    path: '/blogs/:id',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "blogdeetz" */ '../pages/BlogDeetz.vue'),
    beforeEnter: authGuard,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
