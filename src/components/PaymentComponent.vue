<template>

    <div class="m-5">
        <form id="payment-form" class="form-action" :action="`${store.apiBaseUrl}/order/payment`" method="post">
            <div id="dropin-container" class="rounded-2"></div>
            <input type="submit" class="btn mybtn" />
            <input type="hidden" id="nonce" name="payment_method_nonce" />
        </form>
    </div>
</template>

<script>
import { store } from '../store'
import axios from 'axios';
export default {
    data() {
        return {
            store,
        }
    },
    methods: {

    },
    mounted() {
        const form = document.getElementById('payment-form');
        axios.get(`${store.apiBaseUrl}/order`).then((response) => {
            braintree.dropin.create({
                authorization: response.data.token,
                container: '#dropin-container'
            }, (error, dropinInstance) => {
                if (error) console.error(error);

                form.addEventListener('submit', event => {
                    event.preventDefault();

                    dropinInstance.requestPaymentMethod((error, payload) => {
                        if (error) console.error(error);

                        document.getElementById('nonce').value = payload.nonce;
                        //   form.submit();
                        axios.post(`${store.apiBaseUrl}/order/payment`, { payment_method_nonce: payload.nonce, amount: store.final_price }).then((response) => {
                            store.paid_status = response.data.success;
                            console.log(store.paid_status);
                            store.saveOrder = !store.saveOrder;
                        })
                    });
                });
            });
        })

    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/general.scss';
@import '../assets/styles/partials/variables';



input {
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-control::-ms-expand {
  background-color: transparent;
  border: 0;
}

.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.form-control::placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control:disabled, .form-control[readonly] {
  background-color: #e9ecef;
  opacity: 1;
}


.braintree-sheet__header {
    border: 1px solid rgb(213, 89, 36) !important;
}

.braintree-dropin {
    background-color: $orange !important;
}

.braintree-placeholder {
    margin-bottom: 0;
}




</style>