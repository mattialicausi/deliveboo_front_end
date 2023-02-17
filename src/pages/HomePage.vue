<template>

    <LoaderComponent v-if="!store.restaurants"/>

    <!-- se trova i ristoranti dallo store fa vedere tutte le sezioni -->
    <div v-else>
            <!-- sezione Jumbo -->
    <section id="jumbo">
        <JumboComponent />
    </section>


    <!-- sezione per carosello di categorie -->
    <section id="slider-category">
        <SliderCategoryComponent />
    </section>


    <!-- sezione per i ristoranti consigliati -->
    <section id="best-restaurants">
            <div class="container-wave-top">
                <!-- img background wave -->
            </div>
   
        <BestRestaurantsComponent style="background-color: rgb(213, 89, 36)" />

            <div class="container-wave-bottom">
                <!-- img background wave -->
            </div>
    </section>

    <!-- sezione per card lavora con deliveboo -->
    <section id="work-with-us">
        <WorkWithUsComponent />
    </section>

    <!-- sezione app mobile -->
    <section id="mobile-app">
        <MobileAppComponent />
    </section>
    </div>

  


</template>

<script>

import axios from 'axios';
import JumboComponent from '../components/header_partials/JumboComponent.vue';
import BestRestaurantsComponent from '../components/BestRestaurantsComponent.vue';
import SliderCategoryComponent from '../components/SliderCategoryComponent.vue';
import WorkWithUsComponent from '../components/WorkWithUsComponent.vue';
import MobileAppComponent from '../components/footer_partials/MobileAppComponent.vue';
import { store } from '../store';
import LoaderComponent from '../components/LoaderComponent.vue';


export default {
    name: "HomePage",
    data() {
        return {
            store,
        };
    },
    components: { SliderCategoryComponent, BestRestaurantsComponent, WorkWithUsComponent, JumboComponent, MobileAppComponent, LoaderComponent }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/general.scss';
@import '../assets/styles/partials/variables';

#category-slider {
    margin-top: -2rem;
    margin-bottom: -2rem;
}

.container-wave-bottom {
    width: 100%;
    background-image: url(image/wave-orange.svg);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    margin-top: -1;
    z-index: -1;
    height: 18rem;
    transform: scaleY(-1);

}


.container-wave-top {
    width: 100%;
    background-image: url(image/wave-top-orange.svg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 18rem;
    // margin-top: 5vh;

}


</style>