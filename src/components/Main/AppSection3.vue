<script>
export default {
    name: 'AppSection3',
}
</script>

<template lang="">
    <div class="container">
        <div class="row">
            <div class="col">

            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class=row>
            <div class="col-2">
                <div class="text-center hover2 position-relative">
                    <img src="/src/assets/anime-fashion.webp" class="rounded img-thumbnail" alt="anime fashion">
                    <h4 class="position-absolute top-50 start-50 translate-middle">FASHION</h4>
                </div>
            </div>
            <div class="col-2">
                <div class="text-center hover2 position-relative">
                    <img src="/src/assets/success-story.webp" class="rounded img-thumbnail" alt="...">
                    <h4 class="position-absolute top-50 start-50 translate-middle">CULTURE</h4>
                </div>
            </div>
            <div class="col-2">
                <div class="text-center hover2 position-relative">
                    <img src="/src/assets/healthy-foods.webp" class="rounded img-thumbnail" alt="...">
                    <h4 class="position-absolute top-50 start-50 translate-middle">FOOD</h4>
                </div>
            </div>
            <div class="col-2">
                <div class="text-center hover2 position-relative">
                    <img src="/src/assets/visit-france.webp" class="rounded img-thumbnail" alt="...">
                    <h4 class="position-absolute top-50 start-50 translate-middle">LIFESTYLE</h4>
                </div>
            </div>
            <div class="col-2">
                <div class="text-center hover2 position-relative">
                    <img src="/src/assets/travel-alone.webp" class="rounded img-thumbnail" alt="...">
                    <h4 class="position-absolute top-50 start-50 translate-middle">STORIES</h4>
                </div>
            </div>
            <div class="col-2">
                <div class="text-center hover2 position-relative">
                    <img src="/src/assets/best-places.webp" class="rounded img-thumbnail" alt="...">
                    <h4 class="position-absolute top-50 start-50 translate-middle">TRAVEL</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    img{
        border: none;
        padding: 0;
        background-color: rgba(0,0,0,0.5);
        opacity: 0.5;
    }
    .hover2 img {
    margin-left: 0px; 
    transition: margin 0.35s ease;

    }
    .hover2 img:hover {
    margin-right: -20px;
    background-color: transparent;
    text-decoration: none;
    color: #c36;
    }
    h4{
        font-weight: 700;
        color: white;
    }
</style>