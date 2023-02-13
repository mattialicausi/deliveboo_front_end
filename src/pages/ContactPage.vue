<template>

<div class="mycontainer"></div>
    <div class="container myrestaurant mb-4">
        <div class="row">

                <section class="col-sm-12 col-md-6 p-4">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6285.996954935512!2d14.43666167803194!3d38.02381496885957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1316dc93d9d37111%3A0x103973a06ffb42cc!2s98072%20Caronia%2C%20Metropolitan%20City%20of%20Messina%2C%20Italy!5e0!3m2!1sen!2sin!4v1675960668655!5m2!1sen!2sin"
                    width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
                </section>

            <section class="contact_me p-4 col-sm-12 col-md-6">
                    <div class="inner-wrapper">
                        <div class="container-fluid text-center">
                            <h2 class="text-uppercase">contattaci</h2> 
                            <div v-if="success" class="alert alert-success text-start" role="alert">
                                Messaggio inviato con successo!
                            </div>               
                            <div class="row">
                                <form class="col-12 text-start" @submit.prevent="sendForm()">
                                    <div class="mb-3">
                                        <input class="border-0 border-bottom form-control" 
                                            type="text" name="name" id="name" placeholder="Nome" v-model="name" :class="{'is-invalid': errors.name}" required>
                                            <p v-for="(error,index) in errors.name" :key="index" class="invalid-feedback">
                                                {{ error }}
                                            </p>
                                    </div>
                                    <div class="mb-3">
                                        <input class="border-0 border-bottom form-control" 
                                            type="text" name="email" id="email" placeholder="Email" v-model="email" :class="{'is-invalid': errors.email}" required>
                                            <p v-for="(error,index) in errors.email" :key="index" class="invalid-feedback">
                                                {{ error }}
                                            </p>

                                    </div>
                                    <div class="mb-3">
                                        <textarea class="border-0 border-bottom form-control"
                                        name="message" id="message" cols="30"
                                            rows="10" placeholder="Messaggio" v-model="message" :class="{'is-invalid': errors.message}" required></textarea>
                                            <p v-for="(error,index) in errors.message" :key="index" class="invalid-feedback">
                                                {{ error }}
                                            </p>
                                    </div>
                                    <button class="btn mybtn-orange" type="submit" :disabled="loading">{{loading ? 'Invio...' : 'Invia'}}</button>
                                </form>
                            </div>
                        </div>
                    </div>
            </section>

       
        </div>
    </div>
 
</template>

<script>
import axios from 'axios';
import {store} from '../store';
    export default {
        name: 'ContactForm',
        data(){
            return {
                store,
                name: '',
                email: '',
                message: '',
                success: false,
                errors: {},
                loading: false               
            }
        },
        methods: {

            resetDeliveryMsg() {
                setTimeout(() => {
                        this.success = true;
                     }, 2500);
                },

            sendForm(){
                this.loading = true;
                const data = {
                    name: this.name,
                    email: this.email,
                    message: this.message
                }
                axios.post(`${this.store.apiBaseUrl}/contacts`, data).then((response)=>{
                    console.log(response.data);
                    this.success = response.data.success;
                    if(this.success){
                        this.errors = response.data.errors;
                        console.log(this.errors);

                    } else {
                        this.name = '';
                        this.email = '';
                        this.message = '';
                    }
                    
                    this.loading = false;
                 
                   
                });
            },

            
            
        }

    }
</script>

<style lang="scss" scoped>
@import '../assets/styles/general.scss';
@import '../assets/styles/partials/variables';

.mycontainer {
    height: 300px;
    background-image: url(/image/chef.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.my-border-bottom {
    border-bottom: 2px solid $orange;
}

h2 {
    color: $orange;
    font-weight: bold;
}

.myrestaurant {
    margin-top: -50px;
    border: 1px solid $orange;
    border-radius: 20px;
    background-color: $white;
}

</style>