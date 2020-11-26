import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Catalog from "../views/Catalog.vue";
import Signin from "../views/Signin.vue";
import About from "../views/About.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/catalog",
    name: "Catalog",
    component: Catalog,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
