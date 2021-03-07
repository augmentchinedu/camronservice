import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
const executiveAirCharter = () => import("../views/ExecutiveAirCharter.vue");
const floatPlaneServices = () => import("../views/floatPlaneServices.vue");
const HomeSecurity = () => import("../views/HomeSecurity.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/executive-air-charter",
    component: executiveAirCharter,
  },
  {
    path: "/float-plane-services",
    component: floatPlaneServices,
  },
  {
    path: "/home-security",
    component: HomeSecurity,
  },
  {
    path: "/our-photo-gallery",
    component: HomeSecurity,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
