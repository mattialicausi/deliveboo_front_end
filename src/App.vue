<template>
  <header>
    <HeaderComponent/>
  </header>

  <!-- rotte delle pagine -->
    <main class="container">
       <router-view></router-view>
    </main>

    <footer>
      <FooterComponent/>
    </footer>

</template>

<script>
import {RouterView} from 'vue-router';
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';

  export default {
    components: { HeaderComponent, FooterComponent },
}
</script>

<style lang="scss" scoped>

</style>