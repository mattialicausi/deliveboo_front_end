<template><!-- <div class="cart-icon btn mybtn" v-if="!store.openCart" @click="store.openCart = !store.openCart"><i
      class="fa-solid fa-cart-shopping"></i>

    <div class="popup">{{ store.cart.length }}</div>
</div> -->
  <div class="shopping_cart rounded-3">
    <div class="container">
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

      <div class="cart-total d-flex justify-content-between py-3">
        <span class="fs-4 ">Totale:</span>
        <span class="fs-4">{{ this.cartTotal.toFixed(2) }}</span>
        <div>
          <button class="btn mybtn-orange" @click="clearCart()">Svuota</button>
          <router-link :to="{ name: 'payment' }"><button class="btn mybtn-orange">Compra</button></router-link>

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
      store.popupCounter--;
      localStorage.setItem(`cart`, JSON.stringify(store.cart));
    },

    clearCart() {
      localStorage.clear()
      store.popupCounter = 0;
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
        store.popupCounter--;
      }
    },
    getTotal() {
      let total = 0
      for (let i = 0; i < store.cart.length; i++) {
        total += store.cart[i].price * store.cart[i].quantity
      }
      store.final_price = total
    }

  },
  computed: {
    cartTotal() {
      return store.cart.reduce((a, b) => a + b.price * b.quantity, 0);
    },
  },
  watch: {
    'store.cart': {
      handler() {
        this.getTotal()
      },
      deep: true
    }
  },
  mounted() {
    this.getTotal()
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
  position: sticky;
  top: 0;
  // position: fixed;
  // top: 5rem; 
  // bottom: 10rem;
  // transition: 300ms ease-in-out;
  // right: 1rem;
  // width: 500px;
  // height: 720px;
  background-color: $white;
  box-shadow: -1px 1px 10px 0px $orange;
  z-index: 20;
  color: black;

  i {
    cursor: pointer;
    color: $orange
  }
}

@media only screen and (max-width: 770px) {

  .shopping_cart {
    display: none !important;
  }
}

@media only screen and (min-width: 770px) {

  .shopping_cart {
    display: block;
  }

}
</style>