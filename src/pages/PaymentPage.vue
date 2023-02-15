<template>

    <form id="form1" class="p-4" @submit.prevent="submitForm">
                         
                            <h1 class="fs-1 my-4">Inserisci le tue credenziali</h1>
                            <div class="mb-4 row">
                                <div class="col-6 container-input">
                                    <input id="customer_name" type="text"
                                        class="form-control" name="customer_name"
                                        required min="3" max="100" v-model="customer_name"
                                        autocomplete="customer_name" autofocus placeholder="Nome *">

                                </div>

                                <input type="hidden" name="csrf-token" :value="csrfToken">

                                <div class="col-6">
                                    <input id="customer_lastname" type="text"
                                        class="form-control" name="customer_lastname"
                                         required min="3" max="100"  v-model="customer_lastname"
                                        autocomplete="customer_lastname" autofocus placeholder="Cognome *">
                                    
                                </div>
                            </div>

                            <div class="col-6">
                                    <input id="contact_phone" type="text"
                                        class="form-control" name="contact_phone"
                                         required min="7" max="15"  v-model="contact_phone"
                                        autocomplete="contact_phone" autofocus placeholder="Numero telefonico *">
                                    
                                </div>


                            <div class="mb-4 row">
                                <div class="col-md-12">
                                    <input id="email" type="email"
                                        class="form-control" name="email"  v-model="email"
                                        required max="70" autocomplete="email"
                                        placeholder="Email *">
                                    
                                </div>
                            </div>

                            <div class="mb-4 row">
                                <div class="col-md-12">
                                    <input id="address" type="text"
                                        class="form-control" name="address"  v-model="address"
                                        required max="70" autocomplete="address"
                                        placeholder="Address *">
                                </div>
                            </div>


                            
                            <span class="fs-4">{{ this.cartTotal.toFixed(2) }}</span>


                            <p class="form-message">* Campi obbligatori</p>

                            <button type="submit" @click="submitForm()">Invia</button>
    </form>


    <!-- <div id="dropin-container"></div>
    <button id="submit-button" class="button button--small button--green">Purchase</button> -->
</template>

<script>
import axios from 'axios';
import { store } from '../store';


    export default {
        name: 'PaymentPage',

        data () {
            return {
                store,
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

            submitForm() {
                // Costruisci l'oggetto dei dati da inviare al server
                const data = {
                    customer_name: this.customer_name,
                    customer_lastname: this.customer_lastname,
                    contact_phone: this.contact_phone,
                    email: this.email,
                    address: this.address,
                    order_time: this.getCurrentDateTime(),
                    final_price: this.cartTotal,
                    order_code: this.regexify('A0A-00A0A0-AAA'),
                    paid_status: false
                };

                // Esegui la chiamata HTTP POST con Axios
                axios.post('http://127.0.0.1:8000/api/orders', data, {
                    headers: {
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                    }
                })
                    .then(response => {
                        console.log('Ordine inviato con successo!', response.data);
                        // Effettua altre azioni in base alla risposta del server
                    })
                    .catch(error => {
                        console.error('Errore durante l\'invio dell\'ordine:', error.response.data);
                        // Effettua altre azioni in caso di errore
                    });
            },
        },
            
            
        // },

        computed: {
            cartTotal() {
                console.log(store.cart.reduce((a, b) => a + b.price * b.quantity, 0));
                return store.cart.reduce((a, b) => a + b.price * b.quantity, 0);
            },
        },

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