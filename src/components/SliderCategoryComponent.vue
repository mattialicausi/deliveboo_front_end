<template class="container">

     <h2 class="text-center">La nostra selezione per te</h2>

    <div>
        <CarouselComponent/>
    </div>


</template>

<script>
import CarouselComponent from './slider_category_partials/CarouselComponent.vue';



    export default {
    name: "SliderCategoryComponent",
    components: { CarouselComponent }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/general.scss';
@import '../assets/styles/partials/variables';

</style>