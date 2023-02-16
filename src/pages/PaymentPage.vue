<template>
    <div class="container-wave-bottom">
        <!-- img background wave -->
    </div>

    <div v-if="success" class="alert alert-success text-start" role="alert">
        Acquisto confermato!
    </div>  

    <form id="form1" class="container rounded-2" @submit.prevent="purchase()">

        <h1 class="fs-1 my-4" style="color: rgb(213, 89, 36);">Inserisci le tue credenziali</h1>
        <div class="mb-4 row">
            <div class="col-6 container-input">
                <input id="customer_name" type="text" class="form-control" name="customer_name" required min="3" max="100"
                    v-model="customer_name" autocomplete="customer_name" autofocus placeholder="Nome *">

                    <p v-for="(error, index) in errors.customer_name" :key="index" class="invalid-feedback">{{ error }}</p> 

            </div>


            <div class="col-6">
                <input id="customer_lastname" type="text" class="form-control" name="customer_lastname" required min="3"
                    max="100" v-model="customer_lastname" autocomplete="customer_lastname" autofocus
                    placeholder="Cognome *">

                    <p v-for="(error, index) in errors.customer_lastname" :key="index" class="invalid-feedback">{{ error }}</p> 

            </div>
        </div>


        <div class="mb-4 row">
            <div class="col-sm-6 col-md-6 col-lg-6">
                <input id="email" type="email" class="form-control" name="email" v-model="email" required max="70"
                    autocomplete="email" placeholder="Email *">
                    <p v-for="(error, index) in errors.email" :key="index" class="invalid-feedback">{{ error }}</p> 

            </div>


            <div class="col-sm-6 col-md-6 col-lg-6">
                <input id="contact_phone" type="text" class="form-control" name="contact_phone" required min="7" max="15"
                    v-model="contact_phone" autocomplete="contact_phone" autofocus placeholder="Numero telefonico *">

                    <p v-for="(error, index) in errors.contact_phone" :key="index" class="invalid-feedback">{{ error }}</p> 
                
            </div>

        </div>

        <div class="mb-4 row">
            <div class="col-sm-12 col-md-6 col-lg-6">
                <input id="address" type="text" class="form-control" name="address" v-model="address" required max="70"
                    autocomplete="address" placeholder="Address *">

                 <p v-for="(error, index) in errors.address" :key="index" class="invalid-feedback">{{ error }}</p> 

                    
            </div>
        </div>



        <p class="form-message">* Campi obbligatori</p>


        <!-- <button type="submit" class="btn mybtn-orange credit-card mb-4">
            <i class="fa-solid fa-credit-card"></i> Carta di Credito
        </button> -->
            
    </form>

    <div class="container mt-5 p-3 rounded cart">
        <div class="row no-gutters">
            <div class="col-md-8">
                <div class="product-details mr-2">

                    <router-link class="ml-2 ms-2 text-decoration-none" :to="{ name: 'restaurants' }">
                        <div class="d-flex flex-row align-items-center btn mybtn"><i class="fa fa-long-arrow-left"></i>
                            <span class="ms-1">Continua lo shopping</span>
                        </div>
                    </router-link>

                    <hr>

                    <div class="d-flex align-items-center justify-content-between pe-1">
                        <h6 class="mb-0">Carrello</h6>
                        <h6 class="color-total"> Totale: {{ this.cartTotal.toFixed(2) }} €</h6>
                    </div>

                    <div class="d-flex justify-content-between"><span>Hai {{ store.cart.length }} prodotti nel tuo
                            carrello</span></div>
                    <div class="container-product rounded-2">
                        <div class="d-flex justify-content-between align-items-center mt-3 p-2 items rounded"
                            v-for="(cartItem, index) in store.cart" :key="index">
                            <div class="d-flex flex-row"><img class="rounded me-2" :src="cartItem.image" width="40">
                                <div class="ml-2"><span class="font-weight-bold d-block">{{ cartItem.name }}</span><span
                                        class="spec"> Quantità: {{ cartItem.quantity }}</span></div>
                            </div>
                            <div class="d-flex flex-row align-items-center"><span class="d-block me-2 hover-products-n"
                                    @click="removeQuantity(cartItem, index)"> - </span><span
                                    class="d-block ml-5 font-weight-bold">€ {{ calculateItemTotal(cartItem).toFixed(2)
                                    }}</span><span class="d-block ms-2 hover-products-n "
                                    @click="addQuantity(cartItem, index)"> + </span></div>
                        </div>
                    </div>


                </div>
            </div>
            <div class="col-md-4">

                <div>
                    <PaymentComponent />
                </div>
            </div>
        </div>
    </div>



    <!-- <section>
                        <CartComponent />
                    </section> -->

    <div class="container-wave">
        <!-- img background wave -->
</div>
</template>

<script>
import axios from 'axios';
import { store } from '../store';
import PaymentComponent from "../components/PaymentComponent.vue";
import CartComponent from '../components/CartComponent.vue';


export default {
    name: 'PaymentPage',
    components: { PaymentComponent, CartComponent },
    data() {
        return {
            store,
            menu: [],
            customer_name: '',
            customer_lastname: '',
            contact_phone: '',
            email: '',
            address: '',
            final_price: '',
            order_time: '',
            order_code: '',
            paid_status: false,
            errors: {},
            success: false,

        }
    },

    methods: {
        getProducts() {
            axios
                .get(`${this.store.apiBaseUrl}/restaurants/${this.$route.params.slug}`)
                .then((response) => {
                    // console.log(response.data.results);
                    if (response.data.success) {
                        this.menu = response.data.results;
                    } else {
                        this.$router.push({ name: "notfound" });
                    }
                });
        },

        calculateItemTotal(cartItem) {
            return cartItem.price * cartItem.quantity;
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
        regexify(pattern) {
            let regex = '';
            for (let i = 0; i < pattern.length; i++) {
                if (pattern[i] === 'A') {
                    regex += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
                } else if (pattern[i] === '0') {
                    regex += Math.floor(Math.random() * 10);
                } else {
                    regex += pattern[i];
                }
            }

            return regex;
        },

        getCurrentDateTime() {

            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            const hour = String(now.getHours()).padStart(2, '0');
            const minute = String(now.getMinutes()).padStart(2, '0');
            const second = String(now.getSeconds()).padStart(2, '0');

            return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
        },
        clearCart() {
            localStorage.clear()
            store.popupCounter = 0;
            store.cart = [];
        },

        purchase() {
            // Costruisci l'oggetto dei dati da inviare al server
            const data = {
                customer_name: this.customer_name,
                customer_lastname: this.customer_lastname,
                contact_phone: this.contact_phone,
                email: this.email,
                address: this.address,
                order_time: this.getCurrentDateTime(),
                final_price: store.final_price,
                cart: store.cart,
                order_code: this.regexify('A0A-00A0A0-AAA'),
                paid_status: store.paid_status ? 1 : 0
            }
            // Esegui la chiamata HTTP POST con Axios
            axios.post(`${store.apiBaseUrl}/purchase`, data, { headers: { "Content-Type": "multipart/form-data" } })
                .then(response => {
                    console.log(response.data)
                    this.success = response.data.success;
                    if (this.success) {
                       
                        this.errors = response.data.errors;
                        console.log(response.data.errors);
                         

                    } else {

                        console.log('Ordine inviato con successo!', response.data);
                        // Effettua altre azioni in base alla risposta del server
                        this.customer_name = '';
                        this.customer_lastname = '';
                        this.contact_phone = '';
                        this.email = '';
                        this.address = '';
                        this.final_price = '';
                        this.order_time = '';
                        this.order_code = '';
                        this.paid_status = '';
                        this.clearCart();
                      
                    }

                })

             
                 
            
              
               
        },
    },
    computed: {
        cartTotal() {
            // console.log(store.cart.reduce((a, b) => a + b.price * b.quantity, 0));
            return store.cart.reduce((a, b) => a + b.price * b.quantity, 0);
        },
        getAllCart() {
            let storage = []
            let keys = Object.keys(localStorage)
            for (let i = 0; i < keys.length; i++) {
                storage.push(JSON.parse(localStorage.getItem(keys[i])))
            }
            return storage;
        },




    },
    mounted() {
        this.getProducts();
        store.cart = this.getAllCart
    },
    watch: {
        'store.saveOrder': {
            handler() {
                this.purchase()
            }
        }
    }

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/general.scss';
@import '../assets/styles/partials/variables';

.color-total {
    color: $orange;
    font-size: 1.3rem;
}

.container-product {
    max-height: 22vh;
    overflow-y: auto;
    background-color: $white;
    z-index: 100 !important;
}

.container-wave {
    width: 100%;
    background-image: url(/image/wave.svg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 15rem;

}

.cart {
    margin-bottom: -15rem;
    background-color: $white;
}

.container-wave-bottom {
    width: 100%;
    background-image: url(/image/wave-orange.svg);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    margin-top: -1;
    z-index: -1 !important;
    height: 18rem;
    transform: scaleY(-1);

}

#form1 {
    border: 1px solid $orange;
    background-color: $white;
    margin-top: -8rem;
    z-index: 1000 !important;
}

.hover-products-n {
    &:hover {

        cursor: pointer
    }
}

.btn {
    width: max-content;

    a {
        color: $orange;

    }
}



.button {
    cursor: pointer;
    font-weight: 500;
    left: 3px;
    line-height: inherit;
    position: relative;
    text-decoration: none;
    text-align: center;
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
    -webkit-appearance: none;
    -moz-appearance: none;
    display: inline-block;
}

.button--small {
    padding: 10px 20px;
    font-size: 0.875rem;
}

.button--green {
    outline: none;
    background-color: #64d18a;
    border-color: #64d18a;
    color: white;
    transition: all 200ms ease;
}

.button--green:hover {
    background-color: #8bdda8;
    color: white;
}

.payment-info {
    background: blue;
    padding: 10px;
    border-radius: 6px;
    color: #fff;
    font-weight: bold;
}

.product-details {
    padding: 10px;
}

body {
    background: #eee;
}

.cart {
    background: #fff;
}

.p-about {
    font-size: 12px;
}

.table-shadow {
    -webkit-box-shadow: 5px 5px 15px -2px rgba(0, 0, 0, 0.42);
    box-shadow: 5px 5px 15px -2px rgba(0, 0, 0, 0.42);
}

.type {
    font-weight: 400;
    font-size: 10px;
}

label.radio {
    cursor: pointer;
}

label.radio input {
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
    pointer-events: none;
}

label.radio span {
    padding: 1px 12px;
    border: 2px solid #ada9a9;
    display: inline-block;
    color: #8f37aa;
    border-radius: 3px;
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 300;
}

label.radio input:checked+span {
    border-color: #fff;
    background-color: blue;
    color: #fff;
}

.credit-inputs {
    background: rgb(102, 102, 221);
    color: #fff !important;
    border-color: rgb(102, 102, 221);
}

.credit-inputs::placeholder {
    color: #fff;
    font-size: 13px;
}

.credit-card-label {
    font-size: 9px;
    font-weight: 300;
}

.form-control.credit-inputs:focus {
    background: rgb(102, 102, 221);
    border: rgb(102, 102, 221);
}

.line {
    border-bottom: 1px solid rgb(102, 102, 221);
}

.information span {
    font-size: 12px;
    font-weight: 500;
}

.information {
    margin-bottom: 5px;
}

.items {
    -webkit-box-shadow: 5px 5px 4px -1px rgba(0, 0, 0, 0.25);
    box-shadow: 5px 5px 4px -1px rgba(0, 0, 0, 0.08);
}

.spec {
    font-size: 11px;
}
</style>