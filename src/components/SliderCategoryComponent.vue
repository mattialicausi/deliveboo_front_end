<template>

    <CardCategoryComponent/>

    <h2>Slider Category Component</h2>
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