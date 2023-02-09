<template>
        <h1>Home page</h1>

       
</template>

<script>

import axios from 'axios';
import {store} from '../store';

    export default {
        name: 'HomePage',

            data () {
                return {
                    store,
                }
            },
    }
</script>

<style lang="scss" scoped>
@import '../assets/styles/general.scss';
@import '../assets/styles/partials/variables';

</style>