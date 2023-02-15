<template>

    <form id="payment-form" :action="`${store.apiBaseUrl}/order/payment`" method="post">

        <div id="dropin-container"></div>
        <input type="submit" />
        <input type="hidden" id="nonce" name="payment_method_nonce" />
    </form>
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

</style>