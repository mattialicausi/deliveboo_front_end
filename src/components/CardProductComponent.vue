<template>
    <div @click="emitSelectProduct">
        <div class="col-sm-12 col-md-6 col-lg-4 g-4">
            <div class="card">
                <img v-if="!product.image.startsWith('http')" :src="`${store.imgBasePath}${product.image}`"
                    :alt="product.name" class="img-fluid" />
                <img v-else :src="product.image" :alt="product.name" class="img-fluid" />
                <div class="p-3">
                    <h4>{{ product.name }}</h4>
                    <p>{{ product.ingredients }}</p>
                    <p>{{ product.price }}</p>
                    <p>{{ product.type }}</p>
                    <p v-if="product.available == 1" class="text-success">Disponibile</p>
                    <p v-else class="text-danger">Non disponibile</p>
                    <p>{{ product.discount }}</p>
                    <!-- Button trigger modal -->
                    <button type="button" class="btn mybtn-orange" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">
                        Mostra prodotto
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { store } from '../store';

export default {
    name: "CardProductComponent",
    // props: ['product'],
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        emitSelectProduct() {
            this.$emit('selectProduct', this.product);
        }
    }
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
