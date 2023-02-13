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
  restaurants: [],
  products: [],

  // carrello
  openCart: false,
  shoppingCart: [],
  cartData: [],


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