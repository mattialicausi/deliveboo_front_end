<template>
    <div v-if="restaurant && store.categories">
        <div>
            <!-- <img :src="restaurant.image" :alt="restaurant.image"> -->
            <div class="mycontainer" v-if="!restaurant.image.startsWith('http')" :style="{
                backgroundImage: `url(${store.imgBasePath}${restaurant.image})`
            }" :alt="restaurant.restaurant_name">
            </div>
            <div class="mycontainer" v-else :style="{
                backgroundImage: `url(${restaurant.image})`
            }" :alt="restaurant.restaurant_name">
            </div>
            <div class="container myrestaurant">
                <h2 class="text-center my-4">{{ restaurant.restaurant_name }}</h2>
                <div>

                    <h4 v-if="restaurant.description">{{ restaurant.description }}</h4>
                    <h4 v-else>Nessuna descrizione</h4>
                    <p>{{ restaurant.address }}</p>
                    <h4>{{ restaurant.rating }} <i class="fa-solid fa-star me-2"></i></h4>
                </div>

                <!-- BOTTONE INFORMAZIONI RISTORANTE -->
                <div class="my-4">
                    <button class="btn mybtn-orange my-3" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Informazioni ristorante
                    </button>
                    <div class="collapse" id="collapseExample">
                        <div class="card">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-6 col-sm-12">
                                    <iframe
                                        :src="'https://maps.google.com/maps?q=' + encodeURIComponent(restaurant.address) + '&t=&z=13&ie=UTF8&iwloc=&output=embed'"
                                        width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12">
                                    <h3>Noi ci troviamo qui!</h3>
                                    <p>Puoi passare a trovarci anche in sede</p>
                                    <h4>{{ restaurant.address }}</h4>
                                    <h4><i class="fa-solid fa-phone"></i> {{ restaurant.contact_phone }}</h4>
                                    <h4>Aperti dalle {{ restaurant.opening_time }}</h4>
                                    <h4>Fino alle {{ restaurant.closing_time }}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <!-- MENU -->
        <div class="container-fluid bg-orange mt-5">
            <div class="py-4 m-4">
                <h2 class="text-center text-white">Il nostro menu</h2>
                <div class="row justify-content-between">
                    <div class="col-lg-8 col-md-6 col-sm-12">
                        <div class="row justify-content-evenly">
                            <CardProductComponent v-for="product in products" :key="product.id" :product="product"
                                :types="types" @show-product-modal="showProductModal" />
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 mt-5">
                        <CartComponent />
                    </div>
                </div>
            </div>
        </div>

        <ModalProductComponent v-if="selectedProduct" :product="selectedProduct" :restaurant="restaurant" />



        <!-- Altre categorie -->
        <div class="container my-5">
            <h3>Sei ancora indeciso? Consulta altre categorie!</h3>
        </div>
        <SliderCategoryComponent />
    </div>

<LoaderComponent v-else />
</template>

<script>
import axios from 'axios';
import { store } from '../store';
import CardProductComponent from "../components/CardProductComponent.vue";
import ModalProductComponent from "../components/ModalProductComponent.vue";
import LoaderComponent from '../components/LoaderComponent.vue';
import SliderCategoryComponent from '../components/SliderCategoryComponent.vue';
import CartComponent from '../components/CartComponent.vue';


export default {
    name: 'SingleRestaurantPage',
    components: {
        CardProductComponent,
        ModalProductComponent,
        LoaderComponent,
        SliderCategoryComponent,
        CartComponent
    },

    data() {
        return {
            store,
            restaurant: null,
            products: [],
            selectedProduct: null,
            types: [],
        }
    },
    computed: {
        filteredProduct() {
            return this.products.find(product => product.id === this.selectedProductId);
        }
    },

    methods: {
        getRestaurant() {
            axios.get(`${this.store.apiBaseUrl}/restaurants/${this.$route.params.slug}`).then((response) => {
                if (response.data.success) {
                    this.restaurant = response.data.results;
                } else {
                    this.$router.push({ name: "not-found" });
                }
                // console.log(this.restaurant);
            });
        },
        getProducts() {
            axios.get(`${this.store.apiBaseUrl}/restaurants/${this.$route.params.slug}`).then((response) => {
                if (response.data.success) {
                    this.restaurant = response.data.results;
                    this.products = this.restaurant.products;
                } else {
                    this.$router.push({ name: "not-found" });
                }
            });
        },
        showProductModal(productId) {
            // Recupera il prodotto corrispondente all'id
            this.selectedProduct = this.products.find(p => p.id === productId);
        },

        tryAddToCart(product) {

            if (localStorage.length) {
                const keys = Object.keys(localStorage)
                const restaurantId = JSON.parse(localStorage.getItem(keys[0])).restaurant_id
                if (product.restaurant_id != restaurantId) {
                    console.log('Non puoi ordinare da due ristoranti diversi');
                    return
                } else {
                    this.addToCart(product)
                    return
                }
            }
            this.addToCart(product)
        },

        addToCart(product) {
            product.quantity = 1
            store.cart.push(product)
            localStorage.setItem(product.slug, JSON.stringify(product))

        },

        getStorageKeys() {
            this.vueLocalStorage = Object.keys(localStorage)
        }
    },

    mounted() {
        this.getRestaurant();
        this.getProducts();
        store.getCategories();
    },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/general.scss';
@import '../assets/styles/partials/variables';

.mycontainer {
    height: 400px;
    // background-image: url(/image/chef.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

h4 i {
    color: $orange;
}

.myrestaurant {
    margin-top: -90px;
    border: 1px solid $orange;
    border-radius: 20px;
    background-color: $white;
}

.card-category {
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    border: 1px solid $orange;
    border-radius: 10px;

}

.category-img {

    img {
        width: 100px;
        height: 100px;


    }
}

.border {
    border-top: 1px solid $orange !important;
    width: -webkit-fill-available;
    // overflow: hidden;
}
</style>