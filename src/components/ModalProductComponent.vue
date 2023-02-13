<template>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Nome prodotto</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <img v-for="product in products" :key="product.id" :src="product.image" alt="" class="img-fluid">
                    <p class="pt-2" v-for="product in products" :key="product.id">{{ product.ingredients }}</p>
                    <p v-for="product in products" :key="product.id">{{ product.price }}</p>
                    <div class="text-center">
                        <i class="fa-solid fa-minus fa-2xl"></i><span class="fs-3">Quantità</span> <i
                            class="fa-solid fa-plus fa-2xl"></i>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn mybtn" data-bs-dismiss="modal">Chiudi</button>
                    <button type="button" class="btn mybtn-orange">Ordina</button>
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
    data() {
        return {
            store,
            products: [],
        }
    },

    methods: {
        getProducts() {
            axios.get(`${this.store.apiBaseUrl}/restaurants/${this.$route.params.slug}`).then((response) => {
                if (response.data.success) {
                    this.restaurant = response.data.results;
                    this.products = this.restaurant.products;
                } else {
                    this.$router.push({ name: "not-found" });
                }
                console.log(this.products);
            });
        },
    },
    mounted() {
        this.getProducts();
    }
}
</script>

<style lang="scss" scoped>

</style>