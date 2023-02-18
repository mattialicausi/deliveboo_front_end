<template>
    <div class="container-wave">
        <!-- img background wave -->
    </div>
    <div class="container" v-if="store.categories && this.restaurants">

        <h2 class="text-center">I Nostri Ristoranti</h2>

        <div class="d-flex justify-content-between my-5 container-category">
            <div class=" position-relative" v-for="(category, i) in store.categoryAllRestaurant" :key="i">
                <input class="input-best-category" type="checkbox" :id="checkboxOne + `${category.id}`" :value="category.id"
                    v-model="selectedCategories" @change="filterByCategory" />


                <div class="a-box best-restaurant-description my-card">
                    <div class="img-container">
                        <div class="img-inner">
                            <div class="inner-skew">
                                <img :src="category.img" :alt="category.name">
                            </div>
                        </div>
                    </div>
                    <div class="text-container">
                        <h5 class="text-center text-uppercase">{{ category.name }}</h5>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">

            <div class="col-lg-3 col-md-12 col-sm-12">
                <div>
                    <h4>Tutte le categorie (A - Z)</h4>
                    <div class="ks-cboxtags category-list d-flex flex-column">
                        <li v-for="(category, index) in store.categories.sort((a, b) => a.name.localeCompare(b.name))"
                            :key="index">
                            <input type="checkbox" :id="checkboxOne + `${category.id}`" :value="category.id"
                                v-model="selectedCategories" @change="filterByCategory" />
                            <label :for="checkboxOne + `${category.id}`">{{ category.name }}</label>
                        </li>
                    </div>
                </div>
            </div>

            <div class="col-lg-9 col-md-12 col-sm-12" style="padding-top: 45px;">

                <div class="row" v-if="filteredRestaurants.length">
                    <CardRestaurantComponent v-for="(restaurant, i) in filteredRestaurants" :restaurant="restaurant"
                        :categories="categories" />
                </div>
                <div class="row" v-else>
                    <p>Nessun ristorante trovato</p>
                </div>
            </div>
        </div>
    </div>

<LoaderComponent v-else />
</template>
<script>
import axios from 'axios';
import { store } from '../store';
import CardRestaurantComponent from '../components/CardRestaurantComponent.vue';
import SliderCategoryComponent from '../components/SliderCategoryComponent.vue';
import LoaderComponent from '../components/LoaderComponent.vue';

export default {
    name: 'AllRestaurant',
    components: {
        CardRestaurantComponent,
        SliderCategoryComponent,
        LoaderComponent
    },
    data() {
        return {
            store,
            restaurants: [],
            categories: [],
            selectedCategories: [],
            bestCategory: [],
            checkboxOne: 'uniqueIdPrefix'
        }
    },
    computed: {
        filteredRestaurants() {
            if (!this.selectedCategories.length) {
                return this.restaurants;
            }
            return this.restaurants.filter(restaurant => {
                return restaurant.categories.some(category => this.selectedCategories.includes(category.id));
            });
        },
    },
    methods: {
        getRestaurants() {
            axios.get(this.store.apiBaseUrl + "/restaurants", store.data).then(response => {
                this.restaurants = response.data.results;
                console.log(response.data.results);
            });
        },
        getRestaurantsCategories() {
            axios.get(this.store.apiBaseUrl + "/categories").then(response => {
                this.categories = response.data.categories
                console.log(response.data.categories);
            });
        },

        getBestCategory() {

            for (let i = 0; i < 4; i++) {
                this.bestCategory.push(store.categories[i]);

            }
        },
    },

    mounted() {
        this.getRestaurants();
        this.getRestaurantsCategories();
        this.getBestCategory();
        this.store.getCategories();
        window.scrollTo(0, 0);
    },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/general.scss';
@import '../assets/styles/partials/variables';
@import url("https://fonts.googleapis.com/css?family=Raleway:400,400i,700");

.container-wave {
    width: 100%;
    background-image: url(image/wave-orange.svg);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: -10;
    height: 20rem;
    transform: scaleY(-1);

}

.container {
    margin-top: -25vh;
}


.a-box {
    display: inline-block;
    width: 300px;
    text-align: center;

}

.img-container {
    height: 230px;
    width: 200px;
    overflow: hidden;
    border-radius: 0px 0px 20px 20px;
    display: inline-block;
}



.img-container img {
    transform: skew(0deg, -13deg);
    height: 250px;
    margin: -35px 0px 0px -70px;
}

.inner-skew {
    display: inline-block;
    border-radius: 20px;
    overflow: hidden;
    padding: 0px;
    transform: skew(0deg, 13deg);
    font-size: 0px;
    margin: 30px 0px 0px 0px;
    background: #c8c2c2;
    height: 250px;
    width: 200px;
}



.input-best-category {
    height: 180px;
    width: 180px;
    border: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    box-shadow: none;
    transition: 400ms ease-in-out;


    h4 {
        margin-top: -2rem !important;
    }

    img {
        margin-top: -1rem !important;
    }

    &:hover {
        cursor: pointer;
    }



    &:hover+.a-box {
        cursor: pointer;
        transform: translateY(-3rem);
        color: $orange;
        transition: 400ms ease-in-out;

    }

    &:checked+.a-box {
        transform: translateY(-3rem);
        color: $orange;

    }


}



.best-restaurant-description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: -2rem;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 20px;
    z-index: -1;
    transition: 300ms ease-in-out;

}

.best-restaurant-description input[type="checkbox"]:checked {

    color: $orange;
    transition: 300ms ease-in-out;

}

h2 {
    font-size: 2.5rem;
    font-weight: bold;
    color: $white;
}

.search-box {
    border: solid 2px #D55924;
    display: inline-block;
    position: relative;
    border-radius: 50px;
}

.search-box input[type="text"] {
    font-family: Raleway, sans-serif;
    font-size: 20px;
    font-weight: bold;
    width: 50px;
    height: 50px;
    padding: 5px 40px 5px 10px;
    border: none;
    box-sizing: border-box;
    border-radius: 50px;
    transition: width 800ms cubic-bezier(0.5, -0.5, 0.5, 0.5) 600ms;
}

.search-box input[type="text"]:focus {
    outline: none;
}

.search-box input[type="text"]:focus,
.search-box input[type="text"]:not(:placeholder-shown) {
    width: 600px;
    transition: width 800ms cubic-bezier(0.5, -0.5, 0.5, 1.5);
}

.search-box input[type="text"]:focus+span,
.search-box input[type="text"]:not(:placeholder-shown)+span {
    bottom: 13px;
    right: 10px;
    transition: bottom 300ms ease-out 800ms, right 300ms ease-out 800ms;
}

.search-box input[type="text"]:focus+span:after,
.search-box input[type="text"]:not(:placeholder-shown)+span:after {
    top: 0;
    right: 10px;
    opacity: 1;
    transition: top 300ms ease-out 1100ms, right 300ms ease-out 1100ms, opacity 300ms ease 1100ms;
}

.search-box span {
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: -13px;
    right: -15px;
    transition: bottom 300ms ease-out 300ms, right 300ms ease-out 300ms;
}

.search-box span:before,
.search-box span:after {
    content: '';
    height: 25px;
    border-left: solid 3px #D55924;
    position: absolute;
    transform: rotate(-45deg);
}

.search-box span:after {
    transform: rotate(45deg);
    opacity: 0;
    top: -20px;
    right: -10px;
    transition: top 300ms ease-out, right 300ms ease-out, opacity 300ms ease-out;
}



// checkbox effect
.category-list.ks-cboxtags {
    list-style: none;
}

.category-list.ks-cboxtags li {
    display: inline;
}

.category-list.ks-cboxtags li label {
    width: 150px;
    display: inline-block;
    background-color: rgba(255, 255, 255, .9);
    border: 2px solid #D55924;
    color: #D55924;
    border-radius: 25px;
    white-space: nowrap;
    margin: 3px 0px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    transition: all .2s;
    text-align: center;
}

.category-list.ks-cboxtags li label {
    padding: 8px 12px;
    cursor: pointer;
}

.category-list.ks-cboxtags li label::before {
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    font-size: 12px;
    padding: 2px 6px 2px 2px;
    // content: "\️✖️";
    transition: transform .3s ease-in-out;
}

.category-list.ks-cboxtags li input[type="checkbox"]:checked+label::before {
    // content: "\✔️";
    transform: rotate(-360deg);
    transition: transform .3s ease-in-out;
}

.category-list.ks-cboxtags li input[type="checkbox"]:checked+label {
    border: 2px solid #fff;
    background-color: #D55924;
    color: #fff;
    transition: all .2s;
}

.category-list.ks-cboxtags li input[type="checkbox"] {
    display: absolute;
}

.category-list.ks-cboxtags li input[type="checkbox"] {
    position: absolute;
    opacity: 0;
}

.category-list.ks-cboxtags li input[type="checkbox"]:focus+label {
    border: 2px solid #D55924;
}


@media only screen and (max-width: 992px) {
    .container-category {
        display: none !important;
    }

    h3 {
        text-align: center;
    }

    .category-list.ks-cboxtags {
        display: flex !important;
        flex-flow: row wrap !important;
        justify-content: center;
    }

}


@media only screen and (max-width: 600px) {

    .category-list {
        margin-top: 1rem;
    }

    h4 {
        color: $white;
        text-align: center;
    }
}
</style>