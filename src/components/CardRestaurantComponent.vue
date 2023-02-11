<template>
    <div class="container-card">


        <!-- <div class="container mb-5" v-for="(restaurant, index) in restaurants" :key="index"> -->

        <div class="container mb-5">

            <div class="row align-items-center">
                <div class="col card restaurantImg">
                    <img v-if="!restaurant.image.startsWith('http')" :src="`${store.imgBasePath}${restaurant.image}`"
                        :alt="restaurant.restaurant_name">
                    <img v-else :src="restaurant.image" :alt="restaurant.restaurant_name">
                </div>

                <div class="col">

                    <h3 class="fw-bold">{{ restaurant.restaurant_name }}</h3>
                    <p v-for="(category, i) in restaurant.categories">
                        {{ (i < (restaurant.categories.length - 1)) ? category.name + ', ' : category.name }} </p>

                            <p>
                                <!-- <div>
                                <span v-for="n in maxRating" :key="n" :class="'fa fa-star'"></span>
                            </div> -->
                                <span v-if="restaurant.rating"><i class="fa-solid fa-star"></i> {{
                                    restaurant.rating
                                }}/5</span>
                                <!-- <span v-if="!restaurant.rating">Nessun voto</span> -->
                            </p>
                            <p>{{ truncateText(restaurant.description) }}</p>

                </div>

                <div class="col">

                    <p>
                        <span v-if="restaurant.min_price_order">{{ restaurant.min_price_order }} &euro;</span>
                        <span v-if="!restaurant.min_price_order">Nessun prezzo minimo per l'ordine</span>
                    </p>
                    <p>
                        <span v-if="restaurant.delivery_price">Costo consegna {{ restaurant.delivery_price }}
                            &euro;</span>
                        <span v-if="!restaurant.delivery_price">Consegna gratuita</span>

                    </p>

                </div>

            </div>
        </div>

    </div>

</template>

<script>

import axios from 'axios';
import { store } from '../store';


export default {
    name: "CardRestaurantComponent",




    data() {
        return {
            store,
            restaurants: [],
            maxLength: 25,
            maxRating: 5,
            rating: 0
        }
    },
    props: ['restaurant', 'categories'],

    methods: {
        getRestaurants() {
            axios.get(`${this.store.apiBaseUrl}/restaurants`).then((res) => {
                this.restaurants = res.data.results;

            });
        },

        truncateText(text) {
            if (!text) {
                return "";
            }

            if (text.length > this.maxLength) {
                return text.substr(0, this.maxLength) + "...";
            }
            return text;
        },

        setRating(rating) {
            this.rating = rating;
        }


    },
    mounted() {
        this.getRestaurants();
    },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/general.scss';
@import '../assets/styles/partials/variables';


.restaurantImg {

    img {
        width: 100%;
        aspect-ratio: 1.8;
    }
}
</style>