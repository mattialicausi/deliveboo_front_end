<template>
  <header>
    <HeaderComponent />
  </header>

  <!-- <section>
          <CartComponent/>
        </section> -->

  <!-- rotte delle pagine -->
  <main>
    <router-view></router-view>
  </main>

  <footer>
    <FooterComponent />
</footer>
</template>

<script>
import { store } from './store';
import { RouterView } from 'vue-router';
// import CartComponent from './components/CartComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  components: { HeaderComponent, FooterComponent },

  data() {
    return {
      store,

    }
  },

}
</script>

<style lang="scss" scoped></style>