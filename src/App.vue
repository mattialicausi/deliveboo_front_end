<template>
  <header>
    <HeaderComponent/>
  </header>

    <h1>Home page</h1>

  <!-- rotte delle pagine -->
    <!-- <main>
       <router-view></router-view>
    </main> -->

    <footer>
      <FooterComponent/>
    </footer>

</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';

  export default {
    components: { HeaderComponent, FooterComponent }
}
</script>

<style lang="scss" scoped>

</style>