<template>
    <div class="container text-center">
        <h2>Lavora con DeliveBoo</h2>

        <div class="row justify-content-center">
            <div class="col-sm-12 col-md-8 col-lg-4 mt-3">
                <div class="a-box">
                    <div class="img-container">
                        <div class="img-inner">
                            <div class="inner-skew">
                                <img src="image/riders.jpg">
                            </div>
                        </div>
                    </div>
                    <div class="text-container">
                        <h3>Guadagna con DeliveBoo</h3>
                        <div>
                            Diventa un rider e guadagna consegnando cibo a domicilio.
                        </div>
                        <a href="#" class="btn mybtn-orange">Diventa un rider</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-8 col-lg-4 mt-3">
                <div class="a-box">
                    <div class="img-container">
                        <div class="img-inner">
                            <div class="inner-skew">
                                <img src="image/chef.jpg">
                            </div>
                        </div>
                    </div>
                    <div class="text-container">
                        <h3>Apri un ristorante con DeliveBoo</h3>
                        <div>
                            Espandi la tua attività e raggiungi nuovi clienti con Deliveroo.
                        </div>
                        <a href="#" class="btn mybtn-orange">Apri un ristorante</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-8 col-lg-4 mt-3">
                <div class="a-box">
                    <div class="img-container">
                        <div class="img-inner">
                            <div class="inner-skew">
                                <img src="image/lavora-con-noi.jpg">
                            </div>
                        </div>
                    </div>
                    <div class="text-container">
                        <h3>Lavora in DeliveBoo</h3>
                        <div>
                            Unisciti al team di Deliveroo e aiuta a portare il cibo a domicilio in tutto il mondo.
                        </div>
                        <a href="#" class="btn mybtn-orange">Unisciti a noi</a>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
export default {
    name: 'WorkWithUsComponent',
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/general.scss';
@import '../assets/styles/partials/variables';




.a-box a {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: $orange;
    color: #ffffff;
    border-radius: 25px;
    text-decoration: none;
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
</style>