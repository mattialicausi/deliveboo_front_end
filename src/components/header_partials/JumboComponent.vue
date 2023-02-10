<template>
    <div class="bg-orange container-fluid">
        <div class="container d-flex">
            <div class="row align-items-center">
                <div class="col-sm-12 col-md-6 col-lg-6">
                    <img src="image/panino.png" alt="panino" class="img-fluid img-panino">
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6 position-relative z-index-2">
                    <h1 class="text-dark"><strong>Il tuo cibo preferito a portata di click!</strong> </h1>
                    <p class="text-dark"> <strong>Scegli il tuo piatto preferito e ordina direttamente da casa
                            tua!</strong></p>
                    <div class="btn-jumbo">
                        <a href="#" class="btn mybtn">Scopri i ristoranti</a>
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


.bg-orange {
    background-color: $orange;

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
</style>