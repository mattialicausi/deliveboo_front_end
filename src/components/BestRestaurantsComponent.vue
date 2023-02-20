<template>

    <!-- <div class="container-wave-top"></div> -->


    <div>
        <h2 class="text-center pt-5">Locali che potrebbero piacerti</h2>

        
        <div class="container-card container">
            <div class="row">

                <div class="col-sm-12 col-md-6 col-lg-4" v-for="(restaurant, index) in filteredByRating" :key="index">

                
                    <div class="my-card rounded-2 mb-4">
                        <router-link :to="{ name: 'single-restaurant', params: {slug:restaurant.slug}}">
                            <div class="container-img">
                                <img :src="restaurant.image" alt="restaurant.name">
                            </div>
                        </router-link>

                        <div class="container-content">

                            <div class="my-2 d-flex justify-content-between align-items-center">
                                <div class="d-flex align-items-center">
                                    <h4 class="h-100">{{ restaurant.restaurant_name }}</h4>
                                </div>

                                <div class="d-flex align-items-center">
                                    <i class="fa-solid fa-star me-2"></i>
                                    <span v-if="restaurant.rating">{{ restaurant.rating }}</span>
                                    <span v-if="!restaurant.rating">Nessun voto</span>
                                </div>
                            </div>

                            <div class="my-2">
                                <div>
                                    <p v-if="restaurant.min_price_order">Ordine minimo: {{ restaurant.min_price_order }} €</p>
                                    <p v-if="!restaurant.min_price_order">Nessun prezzo minimo per l'ordine</p>
                                </div>
                            </div>

                            <div class="my-2">
                                <div>
                                    <p v-if="restaurant.address"> In {{ restaurant.address }}</p>
                                    <p v-if="!restaurant.address">Nessun indirizzo</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="container-btn">
                    <router-link :to="{ name: 'restaurants' }"><div class="my-btn btn">Vedi altro...</div></router-link> 
                </div>

            </div>
        </div>
    </div>


</template>

<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: "BestRestaurantsComponent",

    data() {
        return {
            store,
            restaurants: [],
            filteredByRating: [],
        }
    },
    methods: {
        getApi() {
            axios.get(`${this.store.apiBaseUrl}/restaurants`).then((res) => {
                this.restaurants = res.data.results;
                this.filterTopRatedItems(this.restaurants); // chiamata per filtrare i ristoranti con il rating più alto
                this.restaurants.sort((a, b) => b.rating - a.rating); // ordinamento dei ristoranti per rating, in modo decrescente
                this.restaurants = this.restaurants.slice(0, 6); // selezione dei primi 6 ristoranti con il rating più alto
                console.log(this.restaurants);
            });
        },


        filterTopRatedItems(items) {
            // Ordina l'array in modo decrescente in base al rating
            const sortedItems = items.sort((a, b) => b.rating - a.rating);
            // Filtra i primi sei elementi dell'array ordinato
            const topRatedItems = sortedItems.filter((item, index) => index < 6);
            console.log(topRatedItems);
            this.filteredByRating = topRatedItems;

            return topRatedItems;
            }
    },

    mounted() {
        this.getApi();
    },

    props: ['restaurant'],




}
</script>

<style lang="scss" scoped>
@import '../assets/styles/general.scss';
@import '../assets/styles/partials/variables';

h2 {
    color: $white;
    font-size: 2.5rem;
    margin-top: -3rem;
    margin-bottom: 3.5rem;
}

.container-btn {
    display: flex;
    justify-content: end;
    margin-bottom: 3rem;

    .my-btn {
        background-color: $white;
        color: $orange;
        border: 1px solid transparent;
        width: max-content;
        transition: 200ms ease-in-out;

        &:hover {
            cursor: pointer;
            border: 1px solid $white;
            background-color: $orange;
            color: $white;
            transition: 200ms ease-in-out;
        }

    }
}



.my-card {
    background-color: $white;
    border: 1px solid $white;
    height: 400px;
    overflow: hidden;


    .container-img {
        height: 50%;

        img {
            height: 100%;
            width: 100%;
        }
    }

    .container-content {
        background-color: $white;
        color: $black;
        height: calc(100% - 50%);
        padding: 1rem;

        i {
            color: $orange;
            font-size: 1.5rem;
        }

        p {
            font-size: 1rem;
        }
    }

    &:hover {
        cursor: pointer;
    }

}
</style>