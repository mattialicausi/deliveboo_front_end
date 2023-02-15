<template>
    <div class="bg-orange container-fluid my-container-space">
        <div class="container d-flex">
            <div class="row align-items-center">
                <div class="col-sm-12 col-md-6 col-lg-6">
                    <img src="image/panino.png" alt="panino" class="img-fluid img-panino">
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6 position-relative z-index-2">
                    <h1 class="text-white"><strong>Il tuo cibo preferito a portata di click!</strong> </h1>
                    <p class="text-white"> <strong>Scegli il tuo piatto preferito e ordina direttamente da casa
                            tua!</strong></p>

                </div>
                <div class="row">
                    <div class="col-6 d-sm-none d-md-block">
                    </div>
                    <div class="btn-jumbo col-6">
                            <router-link :to="{ name: 'restaurants' }"  class="btn mybtn">Scopri i ristoranti</router-link>
                    </div>
                </div>
          
            </div>
        </div>
    </div>

    <div class="container-wave">
        <!-- img background wave -->
    </div>


</template>

<script>
export default {
    name: 'JumboComponent',
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/general.scss';
@import '../../assets/styles/partials/variables';

h1 {
    font-size: 3rem;
}


.btn-jumbo {
    margin-top: -130px;
    //   margin-top: 1.3rem !important;

    a {
        font-size: 1.5rem;
    }
}

.container {
    height: 400px;
}

.img-panino {
    position: relative;
    z-index: 1;
    transform: rotate(25deg);
}

.container-wave {
    width: 100%;
    background-image: url(image/wave-orange.svg);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: -1;
    height: 15rem;
    transform: scaleY(-1);

}

@media only screen and (max-width: 992px) {
    .bg-orange {
        padding-bottom: 6rem !important;
    }


}



</style>