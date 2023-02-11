<template>
    <div class="mycontainer">
        <!-- bg image -->
    </div>
    <div class="container myrestaurant">
        <h2 class="text-center my-4">Nome Ristorante</h2>
        <div>
            <h4>Categoria</h4>
            <h4>Indirizzo</h4>
            <h4>Voto</h4>
        </div>

        <!-- BOTTONE INFORMAZIONI RISTORANTE -->
        <div class=" my-4">
            <button class="btn mybtn-orange" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample"
                aria-expanded="false" aria-controls="collapseExample">
                Informazioni ristorante
            </button>
            <div class="collapse" id="collapseExample">
                <div class="card">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6285.996954935512!2d14.43666167803194!3d38.02381496885957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1316dc93d9d37111%3A0x103973a06ffb42cc!2s98072%20Caronia%2C%20Metropolitan%20City%20of%20Messina%2C%20Italy!5e0!3m2!1sen!2sin!4v1675960668655!5m2!1sen!2sin"
                                width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <h3>Noi ci troviamo qui!</h3>
                            <p>Puoi passare a trovarci anche in sede</p>
                            <h4>Indirizzo</h4>
                            <h4>Numero di telefono</h4>
                            <h4>Orario</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- FILTRO -->
    <div class="container">
        <div class="my-4">
            <select name="type" id="type" class="mybtn-orange btn-filter">
                <option value="">Tipi</option>
                <option>Tipi</option>
            </select>
        </div>
    </div>

    <!-- MENU -->
    <div class="container-fluid bg-orange">
        <div class="container py-4">
            <h2 class="text-center text-white ">Il nostro menu</h2>
            <div class="row">
                <CardProductComponent />
            </div>
        </div>
    </div>

    <!-- Altre categorie -->
    <div class="container my-5">
        <h3>Sei ancora indeciso? Consulta altre categorie!</h3>
        <div class="row py-3">
            <div class="col-lg-2 col-md-4 col-sm-6 g-3">
                <div class="card-category">
                    <div class="category-img">
                        <img src="/image/img-category/americano-category.webp" alt="img category">
                    </div>
                    <div class="border">
                        <p class="text-center mb-0 p-2">Nome categoria</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <ModalProductComponent />


</template>

<script>
import axios from 'axios';
import { store } from '../store';
import CardProductComponent from "../components/CardProductComponent.vue";
import ModalProductComponent from "../components/ModalProductComponent.vue";

export default {
    name: 'SingleRestaurantPage',
    components: {
        CardProductComponent,
        ModalProductComponent
    },

    data() {
        return {
            store,
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/general.scss';
@import '../assets/styles/partials/variables';

.mycontainer {
    height: 300px;
    background-image: url(/image/chef.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.myrestaurant {
    margin-top: -50px;
    border: 1px solid $orange;
    border-radius: 20px;
    background-color: $white;
}

.card-category {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid $orange;
    border-radius: 10px;

}

.category-img {

    img {
        width: 100px;

    }
}

.border {
    border-top: 1px solid $orange !important;
    width: -webkit-fill-available;
    // overflow: hidden;
}
</style>