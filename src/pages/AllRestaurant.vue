<template>
    <div class="container">
        <h2 class="text-center">I Nostri Ristoranti</h2>
        <section id="slider-category" class="m-5">
            <SliderCategoryComponent />
        </section>

<!-- 
        <ul class="ks-cboxtags">
            <li><input type="checkbox" id="checkboxOne" value="Rainbow Dash"><label for="checkboxOne">Rainbow Dash</label></li>
        </ul> -->
        
        <div class="row">
            
            

            <div class="col-3">
                
                <div>
                    <h2>Lista delle categorie</h2>
                    <div class="ks-cboxtags category-list d-flex flex-column">
                        <li v-for="(category, index) in store.categories" :key="index"><input type="checkbox" :id="checkboxOne + `${category.id}`" :value="category.id" v-model="selectedCategories" @change="filterByCategory" />
                            <label :for="checkboxOne + `${category.id}`">{{ category.name }}</label>
                        </li>
                    </div>
                </div>

            </div>

            

            <div class="col-9">


                <!-- search bar  -->
                <div class="search-box mb-5">
                    <input type="text" placeholder=" Cerca il tuo ristorante "/><span></span>
                </div>


                <div class="row" v-if="filteredRestaurants.length">
                    <CardRestaurantComponent v-for="(restaurant, i) in filteredRestaurants" :restaurant="restaurant"
                    :categories="categories" />
                </div>

                <div class="row" v-else>
                    <p>Nessun ristorante trovato</p>
                </div>

            </div>

        </div>
        
    </div>
</template>
<script>
import axios from 'axios';
import { store } from '../store';
import CardRestaurantComponent from '../components/CardRestaurantComponent.vue';
import SliderCategoryComponent from '../components/SliderCategoryComponent.vue';

export default {
    name: 'AllRestaurant',
    components: {
        CardRestaurantComponent,
        SliderCategoryComponent
    },
    data() {
        return {
            store,
            restaurants: [],
            categories: [],
            selectedCategories: [],
            
        }
    },
    computed: {
        filteredRestaurants() {
            if (!this.selectedCategories.length) {
                return this.restaurants;
            }
            return this.restaurants.filter(restaurant => {
                return restaurant.categories.some(category => this.selectedCategories.includes(category.id));
            });
        },
    },
    methods: {
        getRestaurants() {
            axios.get(this.store.apiBaseUrl + "/restaurants", store.data).then(response => {
                this.restaurants = response.data.results;
                console.log(response.data.results);
            });
        },
        getRestaurantsCategories() {
            axios.get(this.store.apiBaseUrl + "/categories").then(response => {
                this.categories = response.data.categories
                console.log(response.data.categories);
            });
        },
    },
    mounted() {
        this.getRestaurants();
        this.getRestaurantsCategories();
        this.store.getCategories();
    },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/general.scss';
@import '../assets/styles/partials/variables';


// .sidebar {
//     height: 100%;
//     width: 250px;
//     position: fixed;
//     z-index: 1;
//     top: 0;
//     left: 0;
//     background-color: #111;
//     color: white;
//     overflow-x: hidden;
//     padding-top: 6rem;
//     padding-left: 1rem;
// }

// search bar effect

@import url("https://fonts.googleapis.com/css?family=Raleway:400,400i,700");

.search-box {
  border: solid 2px #D55924;
  display: inline-block;
  position: relative;
  border-radius: 50px;
}
.search-box input[type="text"] {
  font-family: Raleway, sans-serif;
  font-size: 20px;
  font-weight: bold;
  width: 50px;
  height: 50px;
  padding: 5px 40px 5px 10px;
  border: none;
  box-sizing: border-box;
  border-radius: 50px;
  transition: width 800ms cubic-bezier(0.5, -0.5, 0.5, 0.5) 600ms;
}
.search-box input[type="text"]:focus {
  outline: none;
}
.search-box input[type="text"]:focus, .search-box input[type="text"]:not(:placeholder-shown) {
  width: 600px;
  transition: width 800ms cubic-bezier(0.5, -0.5, 0.5, 1.5);
}
.search-box input[type="text"]:focus + span, .search-box input[type="text"]:not(:placeholder-shown) + span {
  bottom: 13px;
  right: 10px;
  transition: bottom 300ms ease-out 800ms, right 300ms ease-out 800ms;
}
.search-box input[type="text"]:focus + span:after, .search-box input[type="text"]:not(:placeholder-shown) + span:after {
  top: 0;
  right: 10px;
  opacity: 1;
  transition: top 300ms ease-out 1100ms, right 300ms ease-out 1100ms, opacity 300ms ease 1100ms;
}
.search-box span {
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -13px;
  right: -15px;
  transition: bottom 300ms ease-out 300ms, right 300ms ease-out 300ms;
}
.search-box span:before, .search-box span:after {
  content: '';
  height: 25px;
  border-left: solid 3px #D55924;
  position: absolute;
  transform: rotate(-45deg);
}
.search-box span:after {
  transform: rotate(45deg);
  opacity: 0;
  top: -20px;
  right: -10px;
  transition: top 300ms ease-out, right 300ms ease-out, opacity 300ms ease-out;
}



// checkbox effect
.category-list.ks-cboxtags {
    list-style: none;
}
.category-list.ks-cboxtags li{
  display: inline;
}
.category-list.ks-cboxtags li label{
    width: 150px;
    display: inline-block;
    background-color: rgba(255, 255, 255, .9);
    border: 2px solid #D55924;
    color: #D55924;
    border-radius: 25px;
    white-space: nowrap;
    margin: 3px 0px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    transition: all .2s;
}

.category-list.ks-cboxtags li label {
    padding: 8px 12px;
    cursor: pointer;
}

.category-list.ks-cboxtags li label::before {
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    font-size: 12px;
    padding: 2px 6px 2px 2px;
    content: "\️✖️";
    transition: transform .3s ease-in-out;
}

.category-list.ks-cboxtags li input[type="checkbox"]:checked + label::before {
    content: "\✔️";
    transform: rotate(-360deg);
    transition: transform .3s ease-in-out;
}

.category-list.ks-cboxtags li input[type="checkbox"]:checked + label {
    border: 2px solid #fff;
    background-color: #D55924;
    color: #fff;
    transition: all .2s;
}

.category-list.ks-cboxtags li input[type="checkbox"] {
  display: absolute;
}
.category-list.ks-cboxtags li input[type="checkbox"] {
  position: absolute;
  opacity: 0;
}
.category-list.ks-cboxtags li input[type="checkbox"]:focus + label {
  border: 2px solid #D55924;
}
</style>