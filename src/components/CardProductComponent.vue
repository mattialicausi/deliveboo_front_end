<template>
    <div class="col-lg-5 col-md-6 col-sm-12 g-4">
        <div class="card flex-row">
            <div class="card-image">
                <img v-if="!product.image.startsWith('http')" :src="`${store.imgBasePath}${product.image}`"
                    :alt="product.name" class="" />
                <img v-else :src="product.image" :alt="product.name" class="" />
            </div>
            <div class="p-2 w-100">
                <h4 class="card-title">{{ product.name.substring(0, 25) + ".." }}</h4>
                <p>{{ product.price }}€</p>

                <!-- buttons -->
                <div
                    class="d-flex flex-lg-column align-items-start px-1 flex-sm-row flex-md-row justify-content-md-between mt-md-5 mt-lg-0 btn-sm">
                    <button type="button" class="btn mybtn-orange mb-1 btn-web" data-bs-toggle="modal"
                        data-bs-target="#exampleModal" @click="showProductModal(product.id)">
                        Mostra prodotto
                    </button>

                    <button type="button" class="btn mybtn-orange btn-web"
                        :disabled="vueLocalStorage.includes(product.slug)" @click="tryAddToCart(product)">Aggiungi al
                        carrello</button>

                    <!-- responsive -->
                    <button type="button" class="btn mybtn-orange mb-1 btn-resp" data-bs-toggle="modal"
                        data-bs-target="#exampleModal" @click="showProductModal(product.id)">
                        <i class="fa-solid fa-eye"></i>
                    </button>

                    <button type="button" class="btn mybtn-orange btn-resp"
                        :disabled="vueLocalStorage.includes(product.slug)" @click="tryAddToCart(product)"><i
                            class="fa-solid fa-cart-plus"></i></button>
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
                    this.addToCart(product);
                    return
                }
            }
            this.addToCart(product)
        },

        addToCart(product) {
            product.quantity = 1
            store.cart.push(product)
            store.popupCounter++;
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

        store.cart = this.getAllCart;
        this.getStorageKeys();
        // console.log(store.cart);
        // console.log(this.getStorageKeys());
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

.card {
    height: 200px;
    overflow: hidden;
    border: 1px solid $orange;
    padding: 0;
}

.card-image img {
    width: 200px;
    height: 200px;
    object-fit: cover;
}


.card-title {
    height: 50px
}

.btn-web {
    width: 171px;
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

@media only screen and (max-width: 770px) {

    .card-image img {
        width: 125px;
        height: 200px;
        object-fit: cover;
    }

    .btn-web {
        display: none;
    }

    .btn-resp {
        display: block;
    }

    .btn-sm {
        margin-top: 3rem;
        justify-content: space-between;
    }
}

@media only screen and (min-width: 770px) {

    .btn-web {
        display: block;
    }

    .btn-resp {
        display: none;
    }
}
</style>
