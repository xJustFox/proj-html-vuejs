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
        <div class="row bg-danger p-2">
            <div class="col-6"> 
                <span class="news-up p-2 px-3">NEWS UPDATES</span>
                <span class="news p-1">0:37</span>
                <span class="news p-1">THE BEST HEALTHY FOOD</span>
            </div>
            <div class="col-2"></div>
            <div class="col-4"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .news-up{
        background-color: gray;
        color: white;
        font-weight: bolder;
    }

    .news{
        color: white;
        font-weight: 650
    }
</style>