<template>

  <div class="cart-icon btn mybtn" v-if="!store.openCart" @click="store.openCart = !store.openCart"><i
      class="fa-solid fa-cart-shopping"></i></div>
  <div class="shopping_cart rounded-3" v-if="store.openCart">
    <div class="container">
      <div class="py-2 fs-3 text-end" @click="store.openCart = !store.openCart">
        <i class="fa-solid fa-circle-xmark"></i>
      </div>
      <div class="container-title-cart">
        <h3>Carrello</h3>
        <p>Pronto per ordinare?</p>
      </div>

      <div class="product_list mt-5">
        <div class="cart_item d-flex py-3 justify-content-between align-items-center"
          v-for="(cartItem, index) in store.cart" :key="index">
          <div>
            <p>{{ cartItem.name }}</p>
            <p>{{ cartItem.price }}</p>

            <div>

              <button class="btn mybtn-orange" @click="removeQuantity(cartItem, index)"> - </button>
              <span class="px-4 fs-4">{{ cartItem.quantity }}</span>
              <button class="btn mybtn-orange" @click="addQuantity(cartItem, index)"> + </button>

            </div>

          </div>
          <span @click="removeFromCart()"><i class="fa-solid fa-trash"></i></span>
        </div>
        <div></div>
      </div>

      <div class="cart-total d-flex justify-content-between me-3">
        <span class="fs-4">Totale:</span>
        <span class="fs-4">{{ this.cartTotal.toFixed(2) }}</span>
        <div>
          <button class="btn mybtn-orange" @click="clearCart()">Svuota</button>
        </div>
      </div>


    </div>


  </div>
</template>
  
<script>
import { store } from "../store";
export default {
  name: "CartComponent",
  data() {
    return {
      store,
    };
  },
  methods: {
    removeFromCart(index) {
      store.cart.splice(index, 1);
      localStorage.setItem(`cart`, JSON.stringify(store.cart));
    },

    clearCart() {
      localStorage.clear()
      store.cart = [];
    },

    addQuantity(product, i) {
      store.cart[i].quantity++
      const item = JSON.parse(localStorage.getItem(product.slug))
      item.quantity++
      localStorage.setItem(product.slug, JSON.stringify(item))
    },
    removeQuantity(product, i) {
      const item = JSON.parse(localStorage.getItem(product.slug))
      item.quantity--
      if (item.quantity) {
        localStorage.setItem(product.slug, JSON.stringify(item))
        store.cart[i].quantity--
      } else {
        localStorage.removeItem(product.slug)
        store.cart.splice(i, 1)
      }
    },

  },
  computed: {
    cartTotal() {
      return store.cart.reduce((a, b) => a + b.price * b.quantity, 0);
    },
  },
  mounted() {

  }
};
</script>
  
<style lang="scss" scoped>
@import '../assets/styles/general.scss';
@import '../assets/styles/partials/variables';

.product_list {
  overflow-y: auto;
  // position: relative;
  height: 46vh;
}

.cart_item {
  border-bottom: 1px solid black;
}

.cart-icon {

  width: 80px;
  position: fixed;
  top: 6rem;
  right: 1rem;
  z-index: 10;

  i {
    font-size: 1.2rem;

    &:hover {
      cursor: pointer;

    }
  }
}

.container-title-cart {
  text-align: center;
  border-bottom: 1px solid $orange;

  h3 {
    font-weight: bold;
  }
}

.cart-total {

  margin-top: 10px;
  color: $orange;
  font-weight: bold;

}

.shopping_cart {
  position: fixed;
  // top: 5rem;
  // bottom: 10rem;
  transition: 300ms ease-in-out;
  right: 1rem;
  width: 500px;
  height: 72s0px;
  background-color: $white;
  box-shadow: -1px 1px 10px 0px $orange;
  z-index: 20;
  color: black;

  i {
    cursor: pointer;
    color: $orange
  }
}

@media screen and (max-width: 600px) {

  .shopping_cart {
    position: fixed;
    top: 4.5rem;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
  }
}
</style>