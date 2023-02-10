<template>
    <div class="container container-smathphone">
        <div class="row d-flex align-items-center">
            <div class="col-sm-6 col-md-6 col-lg-6">
                <img class="img-fluid" src="../../../public/image/phone-img.png" alt="phone image">
            </div>
            <div class="col-sm-6 col-md-6 col-lg-6">
                <div class="row">
                    <h2 class="text-center">Provalo anche su smartphone</h2>
                    <p class="text-center">Non ne potrai più fare a meno!</p>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-6">
                        <div class="my-btn-footer">
                            <a class="w-50" href="https://www.apple.com/it/app-store/">
                                <img class="img-fluid" src="https://thumbs.dreamstime.com/b/editorial-apple-app-store-download-banner-descriptionapple-inc-american-multinational-technology-company-headquartered-136704089.jpg" alt="Apple store">
                            </a>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6">
                        <div class="my-btn-footer">
                            <a class="w-50" href="https://play.google.com/store/apps?gl=IT&utm_source=emea_Med&utm_medium=hasem&utm_content=Oct2020&utm_campaign=Evergreen&pcampaignid=MKT-EDR-emea-it-1001280-Med-hasem-ap-Evergreen-Oct2020-Text_Search_SKWS%7CONSEM_kwid_43700007423260291&gclid=Cj0KCQiA54KfBhCKARIsAJzSrdpZVMgMWUnXTCF7pG5mmnpc0cxlcAaPgeFTXolIPv5VRokOHPIR8ysaAnjvEALw_wcB&gclsrc=aw.ds&pli=1">
                                <img class="img-fluid mt-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5zOmjz3-B1-Yy99GaWjS61hDdkRjcgOs43w&usqp=CAU" alt="Google store" >
                            </a>
                        </div>
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
        name: 'MobileAppComponent',
    }
</script>

<style lang="scss" scoped>
 @import '../../assets/styles/general.scss';
 @import '../../assets/styles/partials/variables';

.container-wave {
    width: 100%;
    background-image: url(../../../public/image/wave.svg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 15rem;
    // position: relative;

}

.container-smathphone {
    margin-bottom: -15rem;
    // position: absolute;
    // top: -11rem;
    // right: 0;
    // left: 0;
    // z-index: 100;
}

h2 {
    font-size: 3rem;
}

p {
    font-size: 1.5rem;
}

.my-btn-footer {
    padding: 2rem;
}

a {

    img {
        width: 100%;
    }
}


</style>