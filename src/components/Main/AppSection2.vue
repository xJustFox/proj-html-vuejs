<script>
import { store } from '../../store'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
// import { ref } from 'vue'
// const myCarousel = ref(null)
export default {
    name: 'AppSection2',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    data() {
        return {
            store,
        }
    },
    methods: {

        next() {
            this.$refs.myCarousel.next()
        },
        prev() {
            this.$refs.myCarousel.prev()
        }
    }
}
</script>

<template lang="">
    <div class="container-lg mt-2 mb-5">
        <div class="row">
            <div class="col-12 text-uppercase d-flex justify-content-between mb-4">
                <h4 class="fw-bold">lifestyle & stories</h4>
                <div class="d-flex">
                    <button class="grey_buttons">all</button>
                    <button class="grey_buttons">lifestyle</button>
                    <button class="grey_buttons">stories</button>
                </div>
            </div>
            <div class="col-7 text-black mb-3">
                <div class="left_box">
                    <img :src="store.animeList[6].img" alt="" class="img_">
                    <button class="my_button">{{store.animeList[6].genre[0]}}</button>
                    <div class="text_box text-white">
                        <div class="d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                            </svg>
                            <span class="ms-1 me-2 text-capitalize">{{store.animeList[6].demo}}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                                <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"/>
                                <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                            </svg>
                            <span class="ms-1">{{store.animeList[6].date}}</span>
                        </div>
                        <p class="fw-bold text-capitalize">{{store.animeList[6].title}}</p>
                    </div>
                </div>
            </div>
            <div class="col-5">
                <div class="right_box d-flex">
                    <img :src="store.animeList[7].img" alt="" class="img_">
                    <button class="my_button">{{store.animeList[7].genre[0]}}</button>
                    <div class="d-flex flex-wrap align-content-center">
                        <div class="d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                            </svg>
                            <span class="ms-1 me-2">{{store.animeList[6].demo}}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                                <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"/>
                                <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                            </svg>
                            <span class="ms-1">{{store.animeList[6].date}}</span>
                        </div>
                        <p class="fw-bold text-capitalize">{{store.animeList[6].title}}</p>
                    </div>    
                </div>
                <hr>
                <div class="right_box d-flex">
                    <img :src="store.animeList[0].img" alt="travel-alone" class="img_">
                    <button class="my_button">{{store.animeList[0].genre[0]}}</button>
                    <div class="d-flex flex-wrap align-content-center">
                        <div class="d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                            </svg>
                            <span class="ms-1 me-2">{{store.animeList[0].demo}}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                                <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"/>
                                <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                            </svg>
                            <span class="ms-1">{{store.animeList[0].date}}</span>
                        </div>
                        <p class="fw-bold text-capitalize">{{store.animeList[0].title}}</p>
                    </div>    
                </div>
                <hr>
                <div class="right_box d-flex">
                    <img :src="store.animeList[3].img" alt="travel-alone" class="img_">
                    <button class="my_button">{{store.animeList[3].genre[0]}}</button>
                    <div class="d-flex flex-wrap align-content-center">
                        <div class="d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                            </svg>
                            <span class="ms-1 me-2">{{store.animeList[3].demo}}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                                <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"/>
                                <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                            </svg>
                            <span class="ms-1">{{store.animeList[3].date}}</span>
                        </div>
                        <p class="fw-bold text-capitalize">{{store.animeList[3].title}}</p>
                    </div>    
                </div>
            </div>
        </div>
    </div>
    <div class="banner-container mb-4">
        <div class="container-lg">
            <div class="row">
                <div class="col-12">
                    <img src="../../assets/page-banner-1.webp" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="container-lg mb-4">
        <div class="row">
            <div class="col-12 d-flex align-items-center justify-content-between">
                <h4 class="text-uppercase fw-bold my-3">featured posts</h4>
                <div>
                    <button class="btn_carousel" @click="prev">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                        </svg>
                    </button>
                    <button class="btn_carousel ms-3" @click="next">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="col-12">
                <Carousel ref="myCarousel"  :itemsToShow="3" :items-to-scroll="1" :wrap-around="true" :pauseAutoplayOnHover="true">
                    <Slide v-for="slide in store.animeList" :key="slide">
                        <div class="card_ carousel__item">
                            <img :src="slide.img" alt="">
                            <h6 class="fw-bold">{{slide.title}}</h6>
                            <span>{{slide.date}}</span>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, doloremque. Vero, honoris...</p>
                            <span class="text-capitalize fw-bold label_">read more</span>
                            <div class="labels_">
                                <button class="my_button mx-2" v-for="genre in slide.genre.slice(0,2)">{{genre}}</button>                                
                            </div>
                        </div>
                    </Slide>

                </Carousel>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../style/partials/variables' as*;

.grey_buttons {
    background-color: $my_black;
    color: $my_white;
    text-transform: uppercase;
    margin: 0 0.5em;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 14px;
    border: none;
    border-radius: 5px;
}

h4 {
    line-height: 32px;
    margin: 0;
}

.my_button {
    position: absolute;
    background-color: $my_white;
    padding: 2px 12px;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 600;

    &:hover {
        color: $my_red;
    }
}

.img_ {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    filter: brightness(60%);
    margin-right: 10px;
}

.left_box {
    width: 100%;
    height: 430px;
    position: relative;


    .my_button {
        top: 15px;
        left: 15px;
    }

    .text_box {
        position: absolute;
        bottom: 50px;
        left: 25px;
    }

    img:hover {
        filter: brightness(70%);
    }
}

.right_box {
    position: relative;

    .img_ {
        width: 180px;
        height: 120px;

    }

    .my_button {
        top: 10px;
        left: 10px;
    }

    span:hover,
    p:hover {
        color: $my_red;
    }

    img:hover {
        filter: brightness(70%);
    }

}

.banner-container {
    background-color: $my_lightgray;

    img {
        margin: 30px 0px;
        width: 100%;
    }
}

.btn_carousel {
    border-radius: 50%;
    background-color: $my_black;
    color: $my_white;
    padding: 5px;
    border: none;

}

.grey_buttons:hover,
.btn_carousel:hover {
    background-color: $my_red;
}

.card_ {
    width: 390px;
    background-color: $my_lightgray;
    border-radius: 5px;
    position: relative;

    img {
        width: 100%;
        margin-bottom: 30px;
        border-radius: 5px 5px 0px 0px;

    }

    h6 {
        margin: 0;
    }

    p {
        margin: 10px 0px;
        padding: 0px 25px;
        font-size: 14px;
    }

    h6:hover,
    span:hover {
        color: $my_red;
    }

    .label_ {
        display: inline-block;
        background-color: $my_red;
        color: $my_white;
        border-radius: 30px;
        padding: 7px 40px;
        margin-bottom: 25px;
        cursor: pointer;

        &:hover {
            background-color: $my_black;
            color: $my_white;
        }
    }

    .labels_ {
        width: 100%;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        position: absolute;

        .my_button {
            position: relative;
        }
    }
}
</style>