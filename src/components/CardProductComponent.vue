<template>
    <div class="col-sm-12 col-md-6 col-lg-4 g-4">
        <div class="card">
            <img v-if="!product.image.startsWith('http')" :src="`${store.imgBasePath}${product.image}`"
                :alt="product.name" class="img-fluid" />
            <img v-else :src="product.image" :alt="product.name" class="img-fluid" />
            <div class="p-3">
                <h4>{{ product.name }}</h4>
                <p>{{ product.ingredients }}</p>
                <p>{{ product.price }}€</p>
                <p>{{ product.type }}</p>
                <p v-if="product.available == 1" class="text-success">Disponibile</p>
                <p v-else class="text-danger">Non disponibile</p>
                <p>{{ product.discount }}</p>
                <!-- Button trigger modal -->
                <button type="button" class="btn mybtn-orange" data-bs-toggle="modal" data-bs-target="#exampleModal"
                    v-on:click="showProductModal(product.id)">
                    Mostra prodotto
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import { store } from '../store';
import axios from 'axios';


export default {
    name: "CardProductComponent",
    props: ['product', 'types'],
    data() {
        return {
            store,
        }
    },
    methods: {
        showProductModal(productId) {
            console.log('showProductModal called with productId:', productId);

            this.$emit('show-product-modal', productId);
        },
    },
    mounted() {
        this.store.getTypes();
    },

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/general.scss';
@import '../assets/styles/partials/variables';


.card {
    overflow: hidden;
    border: 1px solid $white;
}
</style>
