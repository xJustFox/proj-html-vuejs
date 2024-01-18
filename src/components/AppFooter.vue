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
    <div class="ultracontainer pb-4">
        <div class="justify-content-center d-flex mb-4">
            <div class="triangolo"></div>
        </div>
        
        <div class="container">
            <div class="row">
                <div class="col-md-4 d-flex">
                    <div class="col-md-6" v-for="(section, index) in store.footerData.slice(0, 2)" :key="index">
                        <h4>{{ section.title }}</h4>
                        <ul>
                            <li v-for="(link, linkIndex) in section.links" :key="linkIndex">
                            <a :href="link.path">{{ link.text }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-4 d-flex">
                    <div class="col-md-6" v-for="(section, index) in store.footerData.slice(2, 4)" :key="index">
                        <h4>{{ section.title }}</h4>
                        <ul>
                            <li v-for="(link, linkIndex) in section.links" :key="linkIndex">
                            <a :href="link.path">{{ link.text }}</a>
                            </li>
                        </ul>
                    </div>
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

    *{
        color: $my_white;
    }

    .ultracontainer{
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

    ul{
        list-style: none;
        padding-left: 0;
    }
</style>