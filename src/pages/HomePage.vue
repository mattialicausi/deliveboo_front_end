<template>
    
    <!-- sezione per carosello di categorie -->
    <section id="slider-category">
        <SliderCategoryComponent/>
    </section>


    <!-- sezione per i ristoranti consigliati -->
    <section id="best-restaurants">
        <BestRestaurantsComponent/>
    </section>

     <!-- sezione per card lavora con deliveboo -->
     <section id="work-with-us">
        <WorkWithUsComponent/>
    </section>
      

       
</template>

<script>

import axios from 'axios';
import BestRestaurantsComponent from '../components/BestRestaurantsComponent.vue';
import SliderCategoryComponent from '../components/SliderCategoryComponent.vue';
import WorkWithUsComponent from '../components/WorkWithUsComponent.vue';
import {store} from '../store';

    export default {
    name: "HomePage",
    data() {
        return {
            store,
        };
    },
    components: { SliderCategoryComponent, BestRestaurantsComponent, WorkWithUsComponent }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/general.scss';
@import '../assets/styles/partials/variables';

</style>