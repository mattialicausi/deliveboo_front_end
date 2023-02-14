<template>

    <div v-if="store.restaurants && store.categories">
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
        <BestRestaurantsComponent />
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

    <LoaderComponent v-else/>


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

#best-restaurants {
    background-color: $orange;
}



</style>