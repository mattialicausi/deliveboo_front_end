<template>

  <div class="container">
    <Carousel :itemsToShow="3" :wrapAround="true" :transition="800" :autoplay="2000" :itemsToScroll="1">
      <Slide v-for="(category, i) in store.categories" :key="i">
    
        <div class="carousel__item">
          <img class="img-fluid" :src="category.image" :alt="category.name">
          <p>{{ category.name }}</p>
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
    }
  },

  mounted() {
    this.store.getCategories();
  },

})
</script>

<style lang="scss" scoped>
@import '../../assets/styles/general.scss';
@import '../../assets/styles/partials/variables';

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
  color: $orange;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
