<template>
    <div class="col-sm-12 col-md-6 col-lg-4 g-4">
        <div class="card">
            <img src="/image/chef.jpg" alt="img piatto" class="img-fluid">
            <div class="p-3">
                <h4>Nome piatto</h4>
                <p>Ingredienti</p>
                <p>Prezzo</p>
                <p>Tipo</p>
                <p>Disponibile</p>
                <p>Sconto</p>
                <!-- Button trigger modal -->
                <button type="button" class="btn mybtn-orange" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Mostra prodotto
                </button>
            </div>
        </div>
    </div>


</template>

<script>
import { store } from '../store';
export default {
    name: "CardProductComponent",
    data() {
        return {
            store,
        }
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
