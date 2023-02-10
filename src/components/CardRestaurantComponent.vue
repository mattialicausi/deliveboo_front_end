<template>

    <div class="row">

        <div class="col">
            <div v-for="(categories, i) in categories">{{categories.id === restaurant.id ? categories.name : ''}}</div>
        </div>
        
        <div class="col d-flex">

            <img :src="restaurant.image" class="card-img-top pb-5" style="width: 250px;" :alt="restaurant.restaurant_name" />
            <div>

            <h1>{{ restaurant.restaurant_name }}</h1>
            <p>{{ restaurant.description }}</p>
            <p>{{ restaurant.rating }}</p>
            <p>{{ restaurant.delivery_price }}</p>
            <p>{{ restaurant.min_price_order }}</p>
  
            </div>
        
        </div>
    </div>
          
</template>

<script>

// import axios from 'axios';
import {store} from '../store';

    export default {
        name : "CardRestaurantComponent",

        data() {
            return {
                store,
            }
        },

        props: ['restaurant', 'categories'],

        methods: {
           
        
        },
        mounted() {
            
        },
    }
</script>

<style lang="scss" scoped>

</style>