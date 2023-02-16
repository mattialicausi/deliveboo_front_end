<template>
    <form id="form1" class="p-4 m-5">

        <h1 class="fs-1 my-4">Inserisci le tue credenziali</h1>
        <div class="mb-4 row">
            <div class="col-6 container-input">
                <input id="customer_name" type="text" class="form-control" name="customer_name" required min="3" max="100"
                    v-model="customer_name" autocomplete="customer_name" autofocus placeholder="Nome *">

            </div>


            <div class="col-6">
                <input id="customer_lastname" type="text" class="form-control" name="customer_lastname" required min="3"
                    max="100" v-model="customer_lastname" autocomplete="customer_lastname" autofocus
                    placeholder="Cognome *">

            </div>
        </div>

        <div class="col-6">
            <input id="contact_phone" type="text" class="form-control" name="contact_phone" required min="7" max="15"
                v-model="contact_phone" autocomplete="contact_phone" autofocus placeholder="Numero telefonico *">

        </div>


        <div class="mb-4 row">
            <div class="col-md-12">
                <input id="email" type="email" class="form-control" name="email" v-model="email" required max="70"
                    autocomplete="email" placeholder="Email *">

            </div>
        </div>

        <div class="mb-4 row">
            <div class="col-md-12">
                <input id="address" type="text" class="form-control" name="address" v-model="address" required max="70"
                    autocomplete="address" placeholder="Address *">
            </div>
        </div>



        <span class="fs-4">{{ this.cartTotal.toFixed(2) }}</span>


        <p class="form-message">* Campi obbligatori</p>


        <!-- <a class="btn mybtn-orange credit-card mb-4" @click.prevent="purchase()">
                        <i class="fa-solid fa-credit-card"></i> Carta di Credito</a> -->
    </form>

    <div>
        <PaymentComponent />
    </div>

    <section>
        <CartComponent />
</section>
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
                    console.log(response.data.results)
                    console.log(response.data.order)
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


                })
                .catch(error => {
                    console.error('Errore durante l\'invio dell\'ordine:', error);
                    // Effettua altre azioni in caso di errore
                });
        },
    },
    computed: {
        cartTotal() {
            console.log(store.cart.reduce((a, b) => a + b.price * b.quantity, 0));
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
</style>