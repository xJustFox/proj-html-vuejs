<script>
import AppSection1 from './Main/AppSection1.vue';
import AppSection2 from './Main/AppSection2.vue';
import AppSection3 from './Main/AppSection3.vue';
import { store } from '../store.js';

export default {
    name: 'AppMain',
    data() {
        return {
            store,
        }
    },
    components: {
        AppSection1,
        AppSection2,
        AppSection3
    }
}
</script>

<template lang="">
    <AppSection1 />
    <AppSection2 />
    <AppSection3 />
</template>

<style lang="scss" scoped></style>