<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { store } from '../../store.js';

export default {
    name: 'AppSection1',
    data() {
        return {
            store,
        }
    },
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    methods: {
        next() {
            this.$refs.carousel.next()
        },
        prev() {
            this.$refs.carousel.prev()
        },
    },
}
</script>

<template>
    <div class="py-4 my-bg-gray">
        <div class="container-fluid position-relative">

            <!-- Carousell -->
            <Carousel ref="carousel" :items-to-show="4" :items-to-scroll="1" snapAlign="start" :autoplay="5000" :wrap-around="true" :pauseAutoplayOnHover="true">
                <Slide v-for="slide in store.animeList" :key="slide">

                    <!-- Card -->
                    <div class="my-card carousel__item text-center ">
                        <img :src="slide.img" alt="">
                        <div class="title">{{ slide.title }}</div>
                        <div class="date">{{ slide.date }}</div>
                        <div class="cont-badge">
                            <span class="my-badge" v-for="(item, index) in slide.genre" :key="index">
                                {{ item }}
                            </span>
                        </div>
                    </div>
                </Slide>
            </Carousel>

            <!-- Next Button -->
            <button @click="next" class="carousel__next">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                    class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                </svg>
            </button>

            <!-- Prev Button -->
            <button class="carousel__prev" @click="prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                    class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                </svg>
            </button>
        </div>
    </div>
    <div class="py-5">
        <div class="container-lg bg-info">

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../style/partials/variables' as *;

.my-bg-gray {
    background-color: $my_lightgray;
}

.container-fluid {

    .carousel__prev,
    .carousel__next {
        margin: 0 30px;
        position: absolute;
        top: 50%;
        border-radius: 50%;
        background: $my_white;
        color: $my_red;

        &:hover {
            transition: 350ms;
            background: $my_red;
            color: $my_white;
        }
    }

    .my-card {
        position: relative;
        width: 100%;
        margin: 0 5px;
        border-radius: 5px;
        background-color: $my_white;

        img {
            width: 100%;
            border-radius: 5px 5px 0 0;

            &:hover {
                cursor: pointer;
            }
        }

        .title {
            margin-top: 10px;
            font-size: 13px;
            font-weight: 700;
        }

        .date {
            color: gray;
            font-size: 12px;
            font-weight: 600;
        }

        .cont-badge {
            width: 100%;
            position: absolute;
            top: 5px;
            right: 50%;
            transform: translateX(50%);

            .my-badge {
                background-color: white;
                margin: 0 5px;
                padding: 2px 10px;
                border-radius: 5px;
                font-size: 11px;
                font-weight: 600;
            }
        }

        .title:hover,
        .date:hover,
        .my-badge:hover {
            cursor: pointer;
            color: $my_red;
        }
    }
}

.container-lg {
    height: 600px;
}</style>