<template>

    <NavBarComponent/>

    <JumboComponent/>

</template>

<script>
import JumboComponent from './header_partials/JumboComponent.vue';
import NavBarComponent from './header_partials/NavBarComponent.vue';

    export default {
        name: "HeaderComponent",
        components: { NavBarComponent, JumboComponent }
    }
</script>

<style lang="scss" scoped>
@import '../assets/styles/general.scss';
@import '../assets/styles/partials/variables';

</style>