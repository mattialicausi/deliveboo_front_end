<template>



    <section class="footer">
        <footer class="text-center text-lg-start text-white position-relative" style="background-color: #292d2d;">

            <!-- info deliveboo -->
            <div class="container p-4 pb-0">
                <section class="">
                    <div class="row justify-content-between">
                        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <div class="logo pb-2">
                                <a class="nav-link" href="#"><img
                                        src="https://cdn.discordapp.com/attachments/1043196087617470534/1072087578813153320/logo-deliveboo-removebg-preview.png"
                                        alt="Deliveboo"></a>
                            </div>
                            <p>I nostri valori sono al centro di tutto l'operato di Deliveboo. Ci guidano ogni giorno
                                per lavorare in squadra e prendere decisioni, dalle scelte che hanno un impatto sulle
                                assunzioni e sullo sviluppo del personale, a quelle che scrivono il futuro dei prodotti
                                Deliveboo.</p>
                        </div>
                        <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase">Scopri Deliveboo</h5>
                            <ul class="list-unstyled mb-0">
                                <li>
                                    <a href="#!" class="text-white">Ristoranti</a>
                                </li>
                                <li>
                                    <a href="#!" class="text-white">Categorie</a>
                                </li>
                                <li>
                                    <a class="nav-link" href="#">Entra nel team</a>
                                </li>
                                <li>
                                    <a href="#!" class="text-white">Categorie</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase">Note legali</h5>
                            <ul class="list-unstyled mb-0">
                                <li>
                                    <a href="https://www.shopify.com/it/strumenti/generatore-di-policy/termini-di-servizio"
                                        class="text-white">Termini & Condizioni</a>
                                </li>
                                <li>
                                    <a href="https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/36573"
                                        class="text-white">Informazioni sulla privacy</a>
                                </li>
                                <li>
                                    <a href="https://ricette.giallozafferano.it/Cookies.html"
                                        class="text-white">Cookies</a>
                                </li>
                                <li>
                                    <a href="https://www.informazione-aziende.it/Azienda_BOOLEAN-SRL"
                                        class="text-white">Sede legale</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase">Scarica l'app</h5>
                            <ul class="list-unstyled mb-0">
                                <li>
                                    <a href="https://www.apple.com/it/app-store/" class="text-white"><img
                                            src="https://thumbs.dreamstime.com/b/editorial-apple-app-store-download-banner-descriptionapple-inc-american-multinational-technology-company-headquartered-136704089.jpg"
                                            alt="Apple store"></a>
                                </li>
                                <li>
                                    <a href="https://play.google.com/store/apps?gl=IT&utm_source=emea_Med&utm_medium=hasem&utm_content=Oct2020&utm_campaign=Evergreen&pcampaignid=MKT-EDR-emea-it-1001280-Med-hasem-ap-Evergreen-Oct2020-Text_Search_SKWS%7CONSEM_kwid_43700007423260291&gclid=Cj0KCQiA54KfBhCKARIsAJzSrdpZVMgMWUnXTCF7pG5mmnpc0cxlcAaPgeFTXolIPv5VRokOHPIR8ysaAnjvEALw_wcB&gclsrc=aw.ds&pli=1"
                                        class="text-white"><img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5zOmjz3-B1-Yy99GaWjS61hDdkRjcgOs43w&usqp=CAU"
                                            alt="Google store" class="mt-1"></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <!-- entra nel team -->
                <hr class="mb-4" />
                <section class="">
                    <p class="d-flex justify-content-center align-items-center">
                        <span class="me-3">Entra nel nostro Team! Registrati gratuitamente!</span>
                        <button type="button" class="btn btn-outline-light btn-rounded">
                            <a class="nav-link" href="http://127.0.0.1:8000/register">Registrati</a>
                        </button>
                    </p>
                </section>

                <!-- social media -->
                <hr class="mb-4" />
                <section class="mb-4 text-center">
                    <a class="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/" role="button"><i
                            class="fab fa-facebook-f"></i></a>

                    <a class="btn btn-outline-light btn-floating m-1" href="https://twitter.com/?lang=it"
                        role="button"><i class="fab fa-twitter"></i></a>

                    <a class="btn btn-outline-light btn-floating m-1" href="https://www.google.com/" role="button"><i
                            class="fab fa-google"></i></a>

                    <a class="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/" role="button"><i
                            class="fab fa-instagram"></i></a>

                    <a class="btn btn-outline-light btn-floating m-1" href="https://it.linkedin.com/" role="button"><i
                            class="fab fa-linkedin-in"></i></a>

                    <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/" role="button"><i
                            class="fa-brands fa-github"></i></a>
                </section>
            </div>

            <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)"> © 2023 Copyright:
                <a class="text-white" href="https://boolean.careers/">Team 5 - Classe 74</a>
            </div>
        </footer>

    </section>

</template>

<script>


export default {
    name: "FooterComponent"
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/general.scss';
@import '../assets/styles/partials/variables';

// FOOTER
footer {
    img {
        width: 150px;
    }

    h5 {
        font-size: 1.2rem;
        margin-top: 1.5rem;
        margin-bottom: 1.2rem;
    }

    ul li {
        padding: 0.2rem 0;
    }

    a {
        text-decoration: none;
    }

    a:hover {
        color: $orange !important;
    }


    .btn:hover {
        color: $orange;
    }
}


// BUTTON WHITE
.mybtn {
    border: 1px solid $orange;
    background-color: $white;
    color: $orange;
    transition: 200ms ease-in-out;

    &:hover {
        cursor: pointer;
        border: 1px solid black;
        background-color: $orange;
        color: $white;
        transition: 200ms ease-in-out;

    }
}

//BUTTON ORANGE
.mybtn-orange {
    border: 1px solid $black;
    background-color: $orange;
    color: $white;
    transition: 200ms ease-in-out;

    &:hover {
        cursor: pointer;
        border: 1px solid $orange;
        background-color: $white;
        color: $orange;
        transition: 200ms ease-in-out;

    }
}


// CLASSE ACTIVE LINK
.myactive {
    color: $orange !important;
    text-decoration: none;
    transition: 200ms ease-in-out;

    &:hover {
        color: $orange;
        transition: 200ms ease-in-out;

    }
}
</style>