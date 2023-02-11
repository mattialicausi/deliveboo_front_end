<template>

    <div class="cart-icon btn mybtn" v-if="!store.openCart"  @click="store.openCart =!store.openCart"><i class="fa-solid fa-cart-shopping"></i></div>
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
          <div class="cart_item d-flex py-3 justify-content-between align-items-center" v-for="(cartItem, index) in store.cartData" :key="index">
            <div>
              <p>nome</p>
              <p>prezzo</p>
              <input type="number" class="w-25 me-2" v-model="cartItem.quantity" min="1"/>
              <label for="quantity">Quantità</label>
            </div>
            <span @click="removeFromCart()"><i class="fa-solid fa-trash"></i></span>
          </div>
        </div>

        <div class="cart-total d-flex justify-content-between me-3">
            <span class="fs-4">Totale:</span>
            <span class="fs-4">{{ this.cartTotal.toFixed(2) }}</span>
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
        store.cartData.splice(index, 1);
        localStorage.setItem(`cart`, JSON.stringify(store.cartData));
      },
    },
    computed: {
      cartTotal() {
        return store.cartData.reduce((a, b) => a + b.price * b.quantity, 0);
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
    position: relative;
    // height: 70vh;
  }
  .cart_item {
    border-bottom: 1px solid black;
  }

  .cart-icon {

    width: 80px;
    position: fixed;
    top: 6rem;
    right: 1rem;

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
    position: absolute;
    bottom: 2rem;
    left: 1rem;
    right: 1rem;
    border-top: 1px solid $orange;
    color: $orange;
    font-weight: bold;

  }
  .shopping_cart {
    position: fixed;
    top: 5rem;
    bottom: 10rem;
    // height: 80%;
    right: 1rem;
    width: 500px;
    // min-height: 100vh;
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
      left:0;
      right:0;
      width: 100%;
    }
}
</style>