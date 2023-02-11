<template>

    <NavBarComponent />



</template>

<script>
import NavBarComponent from './header_partials/NavBarComponent.vue';

export default {
    name: "HeaderComponent",
    components: { NavBarComponent }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/general.scss';
@import '../assets/styles/partials/variables';
</style>