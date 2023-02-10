<template>
    <div class="container-smartphone container">
        <div class="row align-items-center">
            <div class="col-sm-12 col-md-6 col-lg-6">
                <img class="phone" src="image/phone-img.png" alt="phone image">
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6 text-center">
                <h2 class="text-center">Provalo anche su smartphone</h2>
                <p class="text-center">Non ne potrai più fare a meno!</p>
                <ul class="list-unstyled mb-0 d-flex justify-content-center">
                    <li>
                        <a href="https://www.apple.com/it/app-store/"><img
                                src="https://thumbs.dreamstime.com/b/editorial-apple-app-store-download-banner-descriptionapple-inc-american-multinational-technology-company-headquartered-136704089.jpg"
                                alt="Apple store" class="img-fluid m-1"></a>
                    </li>
                    <li>
                        <a href="https://play.google.com/store/apps?gl=IT&utm_source=emea_Med&utm_medium=hasem&utm_content=Oct2020&utm_campaign=Evergreen&pcampaignid=MKT-EDR-emea-it-1001280-Med-hasem-ap-Evergreen-Oct2020-Text_Search_SKWS%7CONSEM_kwid_43700007423260291&gclid=Cj0KCQiA54KfBhCKARIsAJzSrdpZVMgMWUnXTCF7pG5mmnpc0cxlcAaPgeFTXolIPv5VRokOHPIR8ysaAnjvEALw_wcB&gclsrc=aw.ds&pli=1"
                            class="text-white"><img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5zOmjz3-B1-Yy99GaWjS61hDdkRjcgOs43w&usqp=CAU"
                                alt="Google store" class="img-fluid m-1"></a>
                    </li>
                </ul>
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
    background-image: url(image/wave.svg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 15rem;

}

.container-smartphone {
    margin-bottom: -15rem;
}

.phone {
    width: 70%;
}

h2 {
    font-size: 3rem;
    color: $orange;
}

p {
    font-size: 1.5rem;
    color: $orange;
}

.my-btn-footer {
    padding: 2rem;
}
</style>