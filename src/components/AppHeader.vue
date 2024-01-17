<script>
import { store } from '../store.js';

export default {
    name: 'AppHeader',
    data() {
        return {
            store,
        }
    },
}
</script>

<template lang="">
    <div class="container-lg">
        <div class="row bg-danger p-1">
            <div class="col-6"> 
                <span class="news p-1 px-3">NEWS UPDATES</span>
                <div>
                <span>0:37</span>
                <span>THE BEST HEALTHY FOOD</span>
            </div></div>
            <div class="col-2"></div>
            <div class="col-4"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .news{
        background-color: gray;
        color: white;
        font-weight: bolder;

    }
</style>