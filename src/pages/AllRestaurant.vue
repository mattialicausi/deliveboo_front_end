<template>
    <h2>All Restaurant page</h2>

    <ul v-for="(restaurant, index) in restaurants" :key="index">
            <li>
                <h1>{{ restaurant.restaurant_name }}</h1>
                <p>{{ restaurant.p_iva }}</p>
                <p>{{ restaurant.address }}</p>
                <p>{{ restaurant.contact_phone }}</p>
                <p>{{ restaurant.description }}</p>
                <p>{{ restaurant.opening_time }}</p>
                <p>{{ restaurant.closing_time }}</p>
                <!-- <img :src="`${store.imgBasePath}${restaurant.image}`" class="card-img-top pb-5" :alt="restaurant.name" /> -->
                <img :src="restaurant.image" class="card-img-top pb-5" style="width: 400px;" :alt="restaurant.name" />
            
            </li>
        </ul>
</template>

<script>

import axios from 'axios';
import {store} from '../store';

    export default {
        name: 'AllRestaurant',

        data () {
                return {
                    store,
                    restaurants: [],
                }
            },

            methods: {
                getApi() {
                    axios.get(`${this.store.apiBaseUrl}/restaurants`).then((res) => {

                        this.restaurants = res.data.results;
                        console.log(this.restaurants);
                        
                    });
                }
            },

            mounted() {
                this.getApi();
            },
    }
</script>

<style lang="scss" scoped>
@import '../assets/styles/general.scss';
@import '../assets/styles/partials/variables';

</style>