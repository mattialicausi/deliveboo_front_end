<template class="container">

     <h2 class="text-center">La nostra selezione per te</h2>

    <div class="row">
        <CardCategoryComponent/>
    </div>


</template>

<script>
import CardCategoryComponent from './slider_category_partials/CardCategoryComponent.vue';



    export default {
    name: "SliderCategoryComponent",
    components: { CardCategoryComponent }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/general.scss';
@import '../assets/styles/partials/variables';

</style>