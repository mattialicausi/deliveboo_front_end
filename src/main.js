import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import './assets/styles/general.scss';


// braintree layout
var button = document.querySelector('#submit-button');

braintree.dropin.create({
  authorization: 'sandbox_g42y39zw_348pk9cgf3bgyw2b',
  selector: '#dropin-container'
}, function (err, instance) {
  button.addEventListener('click', function () {
    instance.requestPaymentMethod(function (err, payload) {
      // Submit payload.nonce to your server
    });
  })
});





// createApp(App).mount('#app')
createApp(App).use(router).mount('#app');

