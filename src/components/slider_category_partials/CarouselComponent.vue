<template>

  <div class="container-carousel">
    <Carousel :itemsToShow="itemsToShow" :breakpoints="breakpoints" :wrapAround="true" :transition="800" :autoplay="2000" :itemsToScroll="1">
      <Slide v-for="(item, i) in store.categorySlider" :key="i">
        <router-link :to="{name: 'restaurants'}">
            <div class="carousel__item">
            <img class="img-fluid" :src="item.img" :alt="item.name">
            <p class="text-uppercase">{{ item.name }}</p>
          </div>
        </router-link>

      </Slide>



      <Slide class=" position-relative" v-for="(category, i) in store.categorySlider" :key="i">
            <input class="input-best-category" type="checkbox" :id="checkboxOne + `${category.id}`"
                :value="category.id" v-model="selectedCategories" @change="filterByCategory" />
            <div class="text-center best-restaurant-description">
                <img class="img-fluid" :src="category.img" :alt="category.name">
                <h4>{{ category.name }}</h4>
            </div>
        </Slide>



      <template #addons>
        <navigation />
        <pagination />
      </template>
    </Carousel>
  </div>



</template>

<script>
import axios from 'axios';
import {store} from '../../store';
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },

  data() {
    return {
      store,
      categories: [],

      itemsToShow: 3, // Mostra 6 elementi per impostazione predefinita
      breakpoints: {
        575: {
          itemsToShow: 3, // Mostra solo 3 elementi quando la larghezza della finestra è inferiore a 575px
        },
        992: {
          itemsToShow: 6,
        },
      },
    }
  },

  mounted() {
    store.getCategories();
  },

})
</script>

<style lang="scss" scoped>
@import '../../assets/styles/general.scss';
@import '../../assets/styles/partials/variables';

.container-carousel {
  height: 25vh;
}

a {
  text-decoration: none;
  color: black;
  transition: 300ms ease-in-out;

  &:hover {
    color: $orange !important;
  transition: 300ms ease-in-out;

  }
}

.carousel__item img {
  width: 75%;
}
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
  font-size: 1.5rem;
  font-weight: bold;
}
</style>



