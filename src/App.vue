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
import CartComponent from './components/CartComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  components: { HeaderComponent, FooterComponent, CartComponent },

  data() {
    return {
      store,
      vueLocalStorage: '',

    }
  },

  methods: {
    getStorageKeys() {
      this.vueLocalStorage = Object.keys(localStorage);
      console.log(this.vueLocalStorage);
    },

  },

  watch: {
    'store.cart': {
      handler() {
        this.getStorageKeys()
      },
      deep: true
    }
  },

  mounted() {

    this.getStorageKeys();
    console.log(this.getStorageKeys());
  },

  computed: {
    getAllCart() {
      let storage = []
      let keys = Object.keys(localStorage)
      for (let i = 0; i < keys.length; i++) {
        storage.push(JSON.parse(localStorage.getItem(keys[i])))
      }
      return storage;
    },
  },

}
</script>

<style lang="scss" scoped></style>