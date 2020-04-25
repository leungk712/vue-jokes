import Vue from "vue";
import VueRouter from "vue-router";
import JokesHome from "@/views/JokesHome";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: JokesHome
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
