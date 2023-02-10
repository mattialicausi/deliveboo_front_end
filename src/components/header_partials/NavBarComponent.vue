<template>
    <nav class="navbar position-relative navbar-expand-lg shadow-sm p-0" id="nav-desktop">
        <div class="container">
            <div class="collapse navbar-collapse row" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0 col-4 d-flex align-items-center">
                    <div class="d-flex">
                        <li class="nav-item">
                            <a href="#" class="btn mybtn mx-2"><i class="fa-solid fa-user text-black"></i> Accedi</a>
                        </li>
                        <div>
                            <li class="nav-item">
                                <a href="#" class="btn mybtn-orange">Registrati</a>
                            </li>
                        </div>
                    </div>
                </ul>
                <div class="logo col-4 d-flex align-items-center justify-content-center">
                    <!-- <a class="nav-link" :href="rootRoute">
                        <img :src="" alt="Deliveboo" />
                    </a> -->
                    <router-link :to="{ name: 'home' }">
                        <img src="/image/logo.png" alt="logo" class="" />
                    </router-link>
                </div>
                <div class=" col-4 d-flex align-items-center justify-content-end">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a :class="{ 'myactive': isLoginRoute }" class="nav-link" :href="loginRoute">Contattaci</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>

    <!-- MOBILE VERSION -->

    <nav class="navbar fixed-top d-lg-none p-0" id="nav-mobile">
        <div class="container-fluid d-lg-none">
            <a class="navbar-brand" href="#">
                <img src="https://cdn.discordapp.com/attachments/1043196087617470534/1072087578813153320/logo-deliveboo-removebg-preview.png"
                    alt="Deliveboo">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar">
                <i class="fa-solid fa-bars"></i>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <a class="nav-link" href="#">
                        <img src="https://cdn.discordapp.com/attachments/1043196087617470534/1072087578813153320/logo-deliveboo-removebg-preview.png"
                            alt="Deliveboo">
                    </a>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                            <a href="#" class="nav-link">Accedi</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">Registrati</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">Contattaci</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>

</template>

<script>
export default {
    name: 'NavBarComponent',
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/general.scss';
@import '../../assets/styles/partials/variables';
</style>