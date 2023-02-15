<template class="container">

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

h2 {
    font-size: 2.5rem;
}

</style>