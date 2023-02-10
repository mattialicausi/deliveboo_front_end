<template>

    <!-- <div class="container-wave-top"></div> -->


    <div class="container">
        <h2 class="text-center my-5">Locali che potrebbero piacerti</h2>

        <div class="container-card">
            <div class="row">

                <div class="col-sm-12 col-md-6 col-lg-4" v-for="(restaurant, index) in restaurants" :key="index">
                    <div class="my-card rounded-2 mb-4">

                        <div class="container-img">
                            <img :src="restaurant.image" alt="restaurant.name">
                        </div>

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
                                    <p v-if="restaurant.min_price_order">{{ restaurant.min_price_order }}</p>
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
                    <div class="my-btn btn">scopri i ristoranti</div>
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
        }
    },
    methods: {
        getApi() {
            axios.get(`${this.store.apiBaseUrl}/restaurants`).then((res) => {

                for (let i = 0; i < 6; i++) {
                    this.restaurants.push(res.data.results[i])
                }
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

h2 {
    color: $white;
    font-size: 2.5rem;
}

// .container-wave-top {
//     width: 100%;
//     background-image: url('../../public/image/wave-orange.svg');
//     background-repeat: no-repeat;
//     background-size: cover;
//     height: 10rem;

// }
.container-card {
    margin: 50px;
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