<template>
    <div class="col-sm-12 col-md-6 col-lg-4 g-4">
        <div class="card">
            <div class="card-image">
                <img v-if="!product.image.startsWith('http')" :src="`${store.imgBasePath}${product.image}`"
                    :alt="product.name" class="img-fluid" />
                <img v-else :src="product.image" :alt="product.name" class="img-fluid" />
            </div>

            <div class="p-3 mt-4">
                <h4 class="card-title">{{ product.name }}</h4>
                <p>{{ product.ingredients }}</p>
                <p>{{ product.price }}€</p>
                <p>{{ product.type }}</p>
                <p v-if="product.available == 1" class="text-success">Disponibile</p>
                <p v-else class="text-danger">Non disponibile</p>
                <p>{{ product.discount }}</p>
                <!-- Button trigger modal -->
                <div class="d-flex justify-content-between">
                    <button type="button" class="btn mybtn-orange" data-bs-toggle="modal" data-bs-target="#exampleModal"
                        v-on:click="showProductModal(product.id)">
                        Mostra prodotto
                    </button>
                    <button type="button" class="btn mybtn-orange" :disabled="vueLocalStorage.includes(product.slug)"
                        @click="tryAddToCart(product)">Aggiungi al carrello</button>

                </div>


            </div>
        </div>
    </div>
</template>
<script>
import { store } from '../store';
import axios from 'axios';
import Swal from 'sweetalert2';


export default {
    name: "CardProductComponent",
    props: ['product', 'types'],
    data() {
        return {
            store,
            vueLocalStorage: '',
        }
    },

    watch: {
        'store.cart': {
            handler() {
                this.getStorageKeys()
            },
            deep: true
        }
    },

    methods: {
        showProductModal(productId) {
            console.log('showProductModal called with productId:', productId);

            this.$emit('show-product-modal', productId);
        },

        tryAddToCart(product) {

            if (localStorage.length) {
                const keys = Object.keys(localStorage)
                const restaurantId = JSON.parse(localStorage.getItem(keys[0])).restaurant_id
                if (product.restaurant_id != restaurantId) {
                    console.log('Non puoi ordinare da due ristoranti diversi');

                    this.sendError();


                    return
                } else {
                    this.addToCart(product)
                    return
                }
            }
            this.addToCart(product)
        },

        addToCart(product) {
            product.quantity = 1
            store.cart.push(product)
            localStorage.setItem(product.slug, JSON.stringify(product))

        },

        getStorageKeys() {
            this.vueLocalStorage = Object.keys(localStorage)
        },

        sendError() {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Non puoi ordinare da due ristoranti diversi!',
            });
        }



    },
    mounted() {
        this.store.getTypes();
        store.cart = this.getAllCart;
        this.getStorageKeys();
        console.log(store.cart);
    },

    computed: {
        getAllCart() {
            let storage = []
            let keys = Object.keys(localStorage)
            for (let i = 0; i < keys.length; i++) {
                storage.push(JSON.parse(localStorage.getItem(keys[i])))
            }
            return storage;
        },
    },

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/general.scss';
@import '../assets/styles/partials/variables';

.img-show {

    height: 350px;
    object-fit: cover;
}

.card {
    overflow: hidden;
    border: 1px solid $orange;
    padding: 0;
}

.card-image {
    height: 316px;

    img {
        width: 100%;
        height: 350px;
        object-fit: cover;

    }
}

h4.card-title {
    height: 86px
}

p.card-text {
    height: 50px;
}

.color-red {
    color: $red !important;
    visibility: visible !important;
    opacity: 1 !important;
}

.swal2-styled {
    background-color: $orange !important;
    color: $white !important;
    transition: 300ms ease-in-out !important;

    &:hover {
        background-color: $white !important;
        color: $orange !important;
        transition: 300ms ease-in-out !important;
    }
}
</style>
