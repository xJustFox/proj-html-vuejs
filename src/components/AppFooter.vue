<script>
import { store } from '../store.js';

export default {
    name: 'AppFooter',
    data() {
        return {
            store,
        }
    },
}
</script>

<template lang="">
    <div class="ultracontainer">
        <div class="justify-content-center d-flex">
            <div class="triangolo"></div>
        </div>
        
        <div class="container">
            <div class="row">
                <div class="col-md-4 text-center">
                    <p>Prima colonna</p>
                </div>
                <div class="col-md-4 text-center">
                    <p>Seconda colonna</p>
                </div>
                <div class="col-md-4 text-center">
                    <p>Terza colonna</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '../style/partials/variables';

    .ultracontainer{
        height: 500px;
        background-color: $my_red;
        border-top: 10px solid $my_black;
    }

    .triangolo {
        width: 0;
        height: 0;
        border-left: 15px solid transparent;
        border-top: 15px solid $my_black;
        border-right: 15px solid transparent;
    }
</style>