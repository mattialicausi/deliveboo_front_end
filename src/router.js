import { createRouter, createWebHistory } from "vue-router";

// import SingleProduct from "./pages/SingleProduct.vue";
import HomePage from "./pages/HomePage.vue";
import AllRestaurant from "./pages/AllRestaurant.vue";
import SingleRestaurant from "./pages/SingleRestaurant.vue";
// import LoginPage from "./pages/LoginPage.vue";
// import RegisterPage from "./pages/RegisterPage.vue";
// import ContactUs from "./pages/ContactUs.vue";

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
    //     {
    //       path: "/login",
    //       name: "login",
    //       component: LoginPage,
    //     },
    //     {
    //       path: "/register",
    //       name: "register",
    //       component: RegisterPage,
    //     },
    // {
    //   path: "/product/:slug",
    //   name: "single-product",
    //   component: SingleProduct,
    // },
    //     {
    //       path: "/contactus",
    //       name: "contactus",
    //       component: ContactUs,
    //     },
    //     {
    //       path: "/cart",
    //       name: "cart",
    //       component: CartComponent,
    //     },
  ],
});

export { router };
