<template>

<section class="outer-container-cards">
    <div ref="box" class="cards-container" @mouseover="stopAutoplay" @mouseleave="autoplay">

        <!-- aggiungere link per ristoranti filtrati per categoria -->

        <div class="col-2 flex-column justify-content-center align-items-center" v-for="(category, index) in categories" :key="index">
            <img class="w-100 h-75" :src="category.image" :alt="category.name">
            <h5 class="text-center">{{ category.name }}</h5>
        </div>
    </div>
</section>

</template>

<script>
import axios from 'axios';
import {store} from '../../store';
    export default {
        name: 'CardCategoryComponent',

        data() {
            return {
                store,
                categories: [],
            }
        },

        methods: {
            getCategories() {
                axios.get(`${this.store.apiBaseUrl}/categories`).then((res) => {

                this.categories = res.data.categories;
                console.log(this.categories);

                });
            },

            scrollRgt() {
                const element = this.$refs.box;
                    if (element != null) {
                        element.scrollBy({
                        left: 800,
                        behavior: "smooth",
                    });
                }
            },

            autoplay() {
                this.autoscroll = setInterval(() => {
                    this.scrollRgt();
                }, 2000);
            },

            stopAutoplay() {
                clearInterval(this.autoscroll);
                this.autoscroll = null;
            },
        },

        mounted() {
            this.getCategories();
            this.autoplay();
        },
    }
</script>

<style lang="scss" scoped>
 @import '../../assets/styles/general.scss';
 @import '../../assets/styles/partials/variables';

 .outer-container-cards {
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: auto;

  .cards-container {
    width: 100%;
    height: 100%;
    display: flex;
    overflow-x: auto;
  }
}

//style scrollbar slider
::-webkit-scrollbar {
  height: 7px;
}

// Handle
::-webkit-scrollbar-thumb {
  -webkit-border-radius: 2px;
  background-color: $orange;
  border-radius: 2px;
  width: 5%;
}

</style>