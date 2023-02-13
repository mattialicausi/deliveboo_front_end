<template>
    <!-- Modal -->
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
                    <p class="pt-2">{{ product.ingredients }}</p>
                    <p>{{ product.price }}</p>
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
    props: ['product'],

    data() {
        return {
            store,
        }
    },


}
</script>

<style lang="scss" scoped>

</style>