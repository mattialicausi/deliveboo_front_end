<template>

    <MobileAppComponent/>

    <div class="container">
        <MapComponent/>
    </div>


    <h2>Footer Component</h2>
</template>
 
<script>
    import MobileAppComponent from './footer_partials/MobileAppComponent.vue';
    import MapComponent from './footer_partials/MapComponent.vue';

     export default {
        name: "FooterComponent",
        components: { MobileAppComponent, MapComponent }
    }
 </script>
 
 <style lang="scss" scoped>
 @import '../assets/styles/general.scss';
 @import '../assets/styles/partials/variables';
 
 </style>