<template>
    <h2>All Restaurant page</h2>

    <div class="row">
    <!-- <CardRestaurantComponent v-for="(restaurant, index) in restaurants" :restaurant="restaurant" :categories="categories"></CardRestaurantComponent> -->
    
    <CardRestaurantComponent/>
    </div>

    
</template>

<script>

import axios from 'axios';
import {store} from '../store';
import CardRestaurantComponent from '../components/CardRestaurantComponent.vue';

    export default {
        name: 'AllRestaurant',
        components: {
            CardRestaurantComponent
        },

        data () {
                return {
                    store,
                    // restaurants: [],
                    // categories: [],
                }
            },

            methods: {
                getRestaurants() {
                    axios.get(`${this.store.apiBaseUrl}/restaurants`).then((res) => {

                        store.restaurants = res.data.results;
                        console.log(res.data.results);
                        
                    });
                },
                // getCategories() {
                //     axios.get(`${this.store.apiBaseUrl}/categories`).then((res) => {

                //         this.categories = res.data.categories;
                //         // console.log(this.categories);

                //     });
                // }
            },

            mounted() {
                // this.getRestaurants();
                // this.getCategories();

                this.store.getCategories();
                this.store.getTypes();
            },
            created() {
                this.getRestaurants();
            },
    }
</script>

<style lang="scss" scoped>
@import '../assets/styles/general.scss';
@import '../assets/styles/partials/variables';

</style>