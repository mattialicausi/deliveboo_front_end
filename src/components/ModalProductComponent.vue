<template><!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">{{ product.name }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <img v-if="!product.image.startsWith('http')" :src="`${store.imgBasePath}${product.image}`"
                        :alt="product.name" class="img-fluid" />
                    <img v-else :src="product.image" :alt="product.name" class="img-fluid" />
                    <p class="pt-2">{{ product.description }}</p>
                    <p>€ {{ product.price }}</p>
                    <!-- <div class="text-center">
                                <i class="fa-solid fa-minus fa-2xl"></i><span class="fs-3">Quantità</span> <i
                                    class="fa-solid fa-plus fa-2xl"></i>
                            </div> -->
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn mybtn" data-bs-dismiss="modal">Chiudi</button>
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
export default {
    name: "ModalProductComponent",
    props: ['product', 'restaurant'],

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

<style lang="scss" scoped></style>