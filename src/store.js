import axios, { Axios } from 'axios';
import { reactive } from "vue";

export const store = reactive({

  apiBaseUrl: "http://127.0.0.1:8000/api",
  imgBasePath: "http://127.0.0.1:8000/storage/",

  categories: [],
  types: [],
  restaurants: [],

  
  getCategories: function(){
    axios.get(`${this.apiBaseUrl}/categories`).then((res)=>{
      this.categories = res.data.categories;
      console.log(res.data.categories)
  })
  },

  getTypes: function(){
    axios.get(`${this.apiBaseUrl}/types`).then((res)=>{
      this.types = res.data.types;
      console.log(res.data.types)
  })
  },


});