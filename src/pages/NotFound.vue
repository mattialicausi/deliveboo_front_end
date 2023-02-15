<template>
     <div class="container">
        <div class="row text-center">
            <div class="col-lg-6 offset-lg-3 col-sm-6 offset-sm-3 col-12 p-3 error-main">
                <div class="row">
                    <div class="col-lg-8 col-12 col-sm-10 offset-lg-2 offset-sm-1">
                        <div>
                            <i class="fa fa-frown-o" aria-hidden="true"></i>
                            <h1 class="m-0">404</h1>
                            <h6>Pagina non trovata!</h6>
                            <a class="nav-link" href="{{ url('admin') }}"><img
                                src="https://cdn.discordapp.com/attachments/1043196087617470534/1072087578813153320/logo-deliveboo-removebg-preview.png"
                                alt="Deliveboo" width="250px"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'NotFound',
    }
</script>

<style lang="scss" scoped>
@import '../assets/styles/general.scss';
@import '../assets/styles/partials/variables';

.container {
    height: 35vh;
    margin-top: 20vh;
}

body{
        font-family: sans-serif;
        margin-top: 150px;
        background-color: $white;
    }

    i{
        font-size:90px !important;
        color: $orange;
        margin-top:20px;
    }

    .error-main{
        background-color:  $white;
        border: 2px solid $orange;
        box-shadow: 0px 10px 10px -10px #5D6572;
    }

    .error-main h1{
        font-weight: bold;
        color: $orange;
        font-size: 100px;
        text-shadow: 2px 4px 5px #6E6E6E;
    }
    .error-main h6{
        color:$orange;
     }
    .error-main p{
        color: $orange;
        font-size: 14px; 
    }

</style>