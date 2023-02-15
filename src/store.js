import axios, { Axios } from 'axios';
import { reactive } from "vue";

export const store = reactive({

  apiBaseUrl: "http://127.0.0.1:8000/api",
  imgBasePath: "http://127.0.0.1:8000/storage/",

  data: {
    params: {
      categoryFilter: '',
    }
  },
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
  final_price: '',

  paid_status: null,

  saveOrder: false,

  cartShow: false,




  getCategories: function () {
    axios.get(`${this.apiBaseUrl}/categories`).then((res) => {
      this.categories = res.data.categories;
      // console.log(res.data.categories)
    })
  },

  getTypes: function () {
    axios.get(`${this.apiBaseUrl}/types`).then((res) => {
      this.types = res.data.types;
      // console.log(res.data.types)
    })
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
  }


});