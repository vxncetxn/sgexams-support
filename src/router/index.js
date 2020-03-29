import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/About",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "About" */ "../views/About.vue")
  },
  {
    path: "/Help",
    name: "Help",
    component: () => import(/* webpackChunkName: "Help" */ "../views/Help.vue")
  },
  {
    path: "/Avenues",
    name: "Avenues",
    component: () =>
      import(/* webpackChunkName: "Avenues" */ "../views/Avenues.vue")
  },
  {
    path: "/Login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/Login.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
