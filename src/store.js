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

  categorySlider: [
    {
      name: 'pizza',
      img: '/image/img-category/pizza-category.webp',
      id: 2,
    },
    {
      name: 'americano',
      img: '/image/img-category/hamburger-category.webp',
      id: 5,
    },
    {
      name: 'cinese',
      img: '/image/img-category/cinese-category.webp',
      id: 1,
    },
    {
      name: 'italiano',
      img: '/image/img-category/italiano-category.webp',
      id: 3,
    },
    {
      name: 'kebab',
      img: '/image/img-category/kebab-category.webp',
      id: 4,
    },
    {
      name: 'fritti',
      img: '/image/img-category/americano-category.webp',
      id: 14,
    },
    {
      name: 'poké',
      img: '/image/img-category/poke-category.webp',
      id: 7,
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
  popupCounter: 0,


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