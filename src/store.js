import axios, { Axios } from "axios";
import { reactive } from "vue";

export const store = reactive({
  apiBaseUrl: "http://127.0.0.1:8000/api",
  imgBasePath: "http://127.0.0.1:8000/storage/",

  data: {
    params: {
      categoryFilter: "",
    },
  },

  categorySlider: [
    {
      name: "pizza",
      img: "/image/img-category/pizza.png",
      id: 2,
    },
    {
      name: "americano",
      img: "/image/img-category/hamburger.png",
      id: 5,
    },
    {
      name: "cinese",
      img: "/image/img-category/cinese.png",
      id: 1,
    },
    {
      name: "italiano",
      img: "/image/img-category/italiano.png",
      id: 3,
    },
    {
      name: "kebab",
      img: "/image/img-category/kebab.png",
      id: 4,
    },
    {
      name: "fritti",
      img: "/image/img-category/americano.png",
      id: 14,
    },
    {
      name: "poké",
      img: "/image/img-category/poke.png",
      id: 7,
    },
    {
      name: "africano",
      img: "/image/img-category/africano.png",
      id: 8,
    },
    {
      name: "colazione",
      img: "/image/img-category/colazione.png",
      id: 16,
    },
  ],

  categoryAllRestaurant: [
    {
      name: "pizza",
      img: "/image/img-category/pizza.png",
      id: 2,
    },
    {
      name: "americano",
      img: "/image/img-category/hamburger.png",
      id: 5,
    },
    {
      name: "cinese",
      img: "/image/img-category/cinese.png",
      id: 1,
    },
    {
      name: "italiano",
      img: "/image/img-category/italiano.png",
      id: 3,
    },
    {
      name: "kebab",
      img: "/image/img-category/kebab.png",
      id: 4,
    },
    {
      name: "poké",
      img: "/image/img-category/poke.png",
      id: 7,
    },
    {
      name: "kebab",
      img: "/image/img-category/kebab.png",
      id: 4,
    },
    {
      name: "africano",
      img: "/image/img-category/africano.png",
      id: 8,
    },
    {
      name: "colazione",
      img: "/image/img-category/colazione.png",
      id: 16,
    },
  ],

  categories: [],
  types: [],
  restaurant: [],
  restaurants: [],
  products: [],

  // carrello
  openCart: false,
  shoppingCart: [],
  cartData: [],
  cart: [],
  final_price: "",

  paid_status: null,

  saveOrder: false,

  cartShow: false,

  getCategories: function () {
    axios.get(`${this.apiBaseUrl}/categories`).then((res) => {
      this.categories = res.data.categories;
      // console.log(res.data.categories)
    });
  },

  getTypes: function () {
    axios.get(`${this.apiBaseUrl}/types`).then((res) => {
      this.types = res.data.types;
      // console.log(res.data.types)
    });
  },

  // funzione per il totale del carrello
  cartTotal() {
    return this.cart.reduce((a, b) => a + b.price * b.quantity, 0);
  },

  // FUNZIONE PER ANIMARE GLI ELEMENTI IN ENTRATA NELLA PAGINA
  showitems() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("showing");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((element) => observer.observe(element));
  },
});
