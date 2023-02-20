<template>

            <div class="container-wave-bottom">
                <!-- img background wave -->
            </div>
       
        <div class="container">
            <h2 class="text-center">Il nostro team</h2>

        <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-6 mt-3 d-flex justify-content-center">
                <div class="a-box">
                    <div class="img-container">
                        <div class="img-inner">
                            <div class="inner-skew">
                                <img src="https://avatars.githubusercontent.com/u/109081285?v=4">
                            </div>
                        </div>
                    </div>
                    <div class="text-container">
                        <h3>Daniel Iabanji</h3>
                        <div class="txt">Ciao, sono un developer back end! Lavoro a stretto contatto con il team di sviluppo per garantire il corretto funzionamento dell'applicazione e per migliorarne continuamente le prestazioni.</div>
                        <a class="btn mybtn-orange" href="https://github.com/danieliabanji">Visita il mio GitHub</a>
                    </div>
                </div>
            </div>

            <div class="col-sm-12 col-md-6 col-lg-6 mt-3 d-flex justify-content-center">
                <div class="a-box">
                    <div class="img-container">
                        <div class="img-inner">
                            <div class="inner-skew">
                                <img src="https://avatars.githubusercontent.com/u/108634093?v=4">
                            </div>
                        </div>
                    </div>
                    <div class="text-container">
                        <h3>Mattia Li Causi</h3>
                        <div class="txt">Ciao, sono un developer front end!  Lavoro a stretto contatto con il team di sviluppo per garantire un'esperienza utente piacevole e fluida, e mi occupo della creazione e dell'integrazione di grafiche, animazioni e funzionalità interattive.</div>
                        <a class="btn mybtn-orange" href="https://github.com/mattialicausi">Visita il mio GitHub</a>
                    </div>
                </div>
            </div>

            <div class="col-sm-12 col-md-6 col-lg-6 mt-3 d-flex justify-content-center">
                <div class="a-box">
                    <div class="img-container">
                        <div class="img-inner">
                            <div class="inner-skew">
                                <img src="https://avatars.githubusercontent.com/u/111997578?v=4">
                            </div>
                        </div>
                    </div>
                    <div class="text-container">
                        <h3>Stefania Sperani</h3>
                        <div class="txt">Ciao, sono un developer front end! Mi piace seguire le tendenze del web design e le nuove tecnologie per creare prodotti moderni e all'avanguardia.</div>
                        <a class="btn mybtn-orange" href="https://github.com/StefaniaSperani">Visita il mio GitHub</a>
                    </div>
                </div>
            </div>

            <div class="col-sm-12 col-md-6 col-lg-6 mt-3 d-flex justify-content-center">
                <div class="a-box">
                    <div class="img-container">
                        <div class="img-inner">
                            <div class="inner-skew">
                                <img src="https://ca.slack-edge.com/T91QPE3BP-U0408C5G0G0-507548abd449-512">
                            </div>
                        </div>
                    </div>
                    <div class="text-container">
                        <h3>Biagio Buttà</h3>
                        <div class="txt">Ciao, sono un developer back end specializzato nell'inserimento dei dati! Collaboro strettamente con il team di sviluppo front end per garantire che le interfacce di inserimento dei dati siano ben integrate con il design dell'applicazione.</div>
                        <a class="btn mybtn-orange" href="https://github.com/StefaniaSperani">Visita il mio GitHub</a>
                    </div>
                </div>
            </div>
        </div>


    
    </div>

    <div class="container-wave-top">
                <!-- img background wave -->
    </div>
 
</template>

<script>
    export default {
        name: 'OurTeamPage',

        mounted() {
            window.scrollTo(0, 0);
        },
    }
</script>

<style lang="scss" scoped>
@import '../assets/styles/general.scss';
@import '../assets/styles/partials/variables';

.container {
    margin-top: -17rem;
    
}

.container-wave-bottom {
    width: 100%;
    background-image: url(image/wave-orange.svg);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    margin-top: -1rem;
    z-index: -1;
    height: 20rem;
    transform: scaleY(-1);

}

.container-wave-top {
    width: 100%;
    background-image: url(image/wave.svg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 18rem;
    margin-top: -15vh;

}

h2 {
    font-size: 3rem;
    color: #fff;
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

.text-container {
    border: 1px solid $orange;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    padding: 120px 20px 20px 20px;
    border-radius: 20px;
    background: #fff;
    margin: -120px 0px 0px 0px;
    line-height: 19px;
    font-size: 14px;
}

.text-container h3 {

    margin: 20px 0px 10px 0px;
    color: $orange;
    font-size: 18px;
}

.txt {
    height: 150px;
    padding-bottom: 1rem;
}

</style>