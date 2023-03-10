import { createRouter, createWebHistory } from "vue-router";


import HomePage from "./pages/HomePage.vue";
import AllRestaurant from "./pages/AllRestaurant.vue";
import SingleRestaurant from "./pages/SingleRestaurant.vue";
import ContactPage from "./pages/ContactPage.vue";
import NotFound from './pages/NotFound.vue';
import PaymentPage from './pages/PaymentPage.vue';
import OurTeamPage from './pages/OurTeamPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/restaurants",
      name: "restaurants",
      component: AllRestaurant,
    },
    {
      path: "/restaurants/:slug",
      name: "single-restaurant",
      component: SingleRestaurant,
    },
    {
      path: "/contacts",
      name: "contactus",
      component: ContactPage,
    },
    {
      path: "/restaurants/:slug/payment",
      name: "payment",
      component: PaymentPage,
    },
    {
      path: "/our-team",
      name: "our-team",
      component: OurTeamPage,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },


  ],
});

export { router };
