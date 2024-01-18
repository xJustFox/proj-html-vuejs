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
        <div class="justify-content-center d-flex">
            <div class="triangle"></div>
        </div>
        
        <div class="container p-5">
            <div class="row">
                <div class="col-4 d-flex">
                    <div class="col-6" v-for="(section, index) in store.footerData.slice(0, 2)" :key="index">
                        <h4>{{ section.title }}</h4>
                        <ul>
                            <li v-for="(link, linkIndex) in section.links" :key="linkIndex">
                            <a :href="link.path">{{ link.text }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-4 d-flex">
                    <div class="col-6" v-for="(section, index) in store.footerData.slice(2, 4)" :key="index">
                        <h4>{{ section.title }}</h4>
                        <ul>
                            <li v-for="(link, linkIndex) in section.links" :key="linkIndex">
                            <a :href="link.path">{{ link.text }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-4">
                    <h4>SUBCRIBE TO NEWSLETTER</h4>
                    <input type="text" placeholder="Email" class="mb-2 input-subscribe w-100"><br>
                    <button class="btn-subscribe w-100">SUBSCRIBE</button>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <hr class="w-100">
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

    .triangle {
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
    
    h4{
        font-size: medium;
        font-weight: bold;
    }

    a{
        text-decoration: none;
        transition: color 0.3s ease;
    }

    a:hover{
        color: $my_black;
        transition: color 0.3s ease;
    }

    .btn-subscribe{
        height: 45px;
        border-radius: 10px;
        border: none;
        padding: 5px;
        background-color: $my_black;
    }

    .input-subscribe{
        height: 45px;
        border-radius: 10px;
        border: none;
        padding: 5px;
        color: $my_black;
    }

    hr{
        opacity: 1;
    }
</style>