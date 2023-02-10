<template>

<!-- desktop carousel -->
<section class=" d-flex justify-content-center">
    
    <vueper-slides class="no-shadow container" :visible-slides="6" :slide-ratio="1 / 6" :dragging-distance="70">

    <vueper-slide v-for="(category, i) in categories" :key="i" :image="category.image" />
        
    </vueper-slides>

</section>



</template>

<script>
import axios from 'axios';
import {store} from '../../store';
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';


    export default {
        name: 'CardCategoryComponent',

        components: {VueperSlides, VueperSlide},

        data() {
            return {
                store,
                categories: [],
            }
        },

        methods: {
            getCategories() {
                axios.get(`${this.store.apiBaseUrl}/categories`).then((res) => {

                this.categories = res.data.categories;
                console.log(this.categories);

                });
            },

        },

        mounted() {
            this.getCategories();
        },
    }
</script>

<style lang="scss" scoped>
 @import '../../assets/styles/general.scss';
 @import '../../assets/styles/partials/variables';


 @media screen and (max-width: 576px) {
  .my-container {
   max-width: 450px;
  }
}


</style>

