<template>
    <div class="container">
        <h2 class="text-center">I Nostri Ristoranti</h2>
        <section id="slider-category" class="m-5">
            <SliderCategoryComponent />
        </section>

        <div class="sidebar">
            <h2>Filter by Category</h2>
            <div v-for="(category, index) in store.categories" :key="index">
                <input type="checkbox" :value="category.id" v-model="selectedCategories" @change="filterByCategory" />
                {{ category.name }}
            </div>
        </div>
        <div class="row" v-if="filteredRestaurants.length">
            <CardRestaurantComponent v-for="(restaurant, i) in filteredRestaurants" :restaurant="restaurant"
                :categories="categories" />
        </div>
        <div class="row" v-else>
            <p>No restaurant found</p>
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
        }
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


.sidebar {
    height: 100%;
    width: 250px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    // background-color: #111;
    // color: white;
    overflow-x: hidden;
    padding-top: 6rem;
    padding-left: 1rem;
}
</style>