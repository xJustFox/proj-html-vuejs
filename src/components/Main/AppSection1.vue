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
            <Carousel ref="carousel" :items-to-show="4" :items-to-scroll="1" snapAlign="start" :autoplay="5000"
                :wrap-around="true" :pauseAutoplayOnHover="true">
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
            <button class="carousel__next" @click="next">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                    class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                </svg>
            </button>

            <!-- Prev Button -->
            <button class="carousel__prev" @click="prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                    class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                </svg>
            </button>
        </div>
    </div>
    <div class="py-5">
        <div class="container-lg">
            <div class="my-row">
                <div class="col-3">

                    <!-- Card Container -->
                    <div class="card-container">
                        <div class="card-bg"></div>
                        <img :src="store.animeList[4].img" alt="">

                        <!-- Icon -->
                        <div class="card-text">
                            <div class="text-icon">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="12px" fill="currentColor"
                                        class="bi bi-person-fill" viewBox="0 0 14 14">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                    </svg>
                                    {{ store.animeList[4].demo }}
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="12px" fill="currentColor"
                                        class="bi bi-calendar-week-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M9.5 7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m3 0h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5M2 10.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5" />
                                    </svg>
                                    {{ store.animeList[4].date }}
                                </span>
                            </div>

                            <!-- Title Card -->
                            <div class="text-title">{{ store.animeList[4].title }}</div>
                        </div>

                        <!-- Badge -->
                        <div class="cont-badge">
                            <span class="my-badge" v-for="(item, index) in store.animeList[4].genre" :key="index">
                                {{ item }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    
                    <!-- Card Container -->
                    <div class="card-container">
                        <div class="card-bg"></div>
                        <img :src="store.animeList[7].img" alt="">

                        <!-- Icon -->
                        <div class="card-text">
                            <div class="text-icon">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="12px" fill="currentColor"
                                        class="bi bi-person-fill" viewBox="0 0 14 14">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                    </svg>
                                    {{ store.animeList[7].demo }}
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="12px" fill="currentColor"
                                        class="bi bi-calendar-week-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M9.5 7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m3 0h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5M2 10.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5" />
                                    </svg>
                                    {{ store.animeList[7].date }}
                                </span>
                            </div>

                            <!-- Title Card -->
                            <div class="text-title">{{ store.animeList[7].title }}</div>
                        </div>

                        <!-- Badge -->
                        <div class="cont-badge">
                            <span class="my-badge" v-for="(item, index) in store.animeList[7].genre" :key="index">
                                {{ item }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-6">

                    <!-- Card Container -->
                    <div class="card-container">
                        <div class="card-bg"></div>
                        <img :src="store.animeList[0].img" alt="">

                        <!-- Icon -->
                        <div class="card-text">
                            <div class="text-icon">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="12px" fill="currentColor"
                                        class="bi bi-person-fill" viewBox="0 0 14 14">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                    </svg>
                                    {{ store.animeList[0].demo }}
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="12px" fill="currentColor"
                                        class="bi bi-calendar-week-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M9.5 7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m3 0h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5M2 10.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5" />
                                    </svg>
                                    {{ store.animeList[0].date }}
                                </span>
                            </div>

                            <!-- Title Card -->
                            <div class="text-title">{{ store.animeList[0].title }}</div>
                        </div>

                        <!-- Badge -->
                        <div class="cont-badge">
                            <span class="my-badge" v-for="(item, index) in store.animeList[0].genre" :key="index">
                                {{ item }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-3">

                    <!-- Card Container -->
                    <div class="card-container">
                        <div class="card-bg"></div>
                        <img :src="store.animeList[3].img" alt="">

                        <!-- Icon -->
                        <div class="card-text">
                            <div class="text-icon">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="12px" fill="currentColor"
                                        class="bi bi-person-fill" viewBox="0 0 14 14">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                    </svg>
                                    {{ store.animeList[3].demo }}
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="12px" fill="currentColor"
                                        class="bi bi-calendar-week-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M9.5 7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m3 0h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5M2 10.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5" />
                                    </svg>
                                    {{ store.animeList[3].date }}
                                </span>
                            </div>

                            <!-- Title Card -->
                            <div class="text-title">{{ store.animeList[3].title }}</div>
                        </div>

                        <!-- Badge -->
                        <div class="cont-badge">
                            <span class="my-badge" v-for="(item, index) in store.animeList[3].genre" :key="index">
                                {{ item }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-3">

                    <!-- Card Container -->
                    <div class="card-container">
                        <div class="card-bg"></div>
                        <img :src="store.animeList[8].img" alt="">

                        <!-- Icon -->
                        <div class="card-text">
                            <div class="text-icon">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="12px" fill="currentColor"
                                        class="bi bi-person-fill" viewBox="0 0 14 14">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                    </svg>
                                    {{ store.animeList[8].demo }}
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="12px" fill="currentColor"
                                        class="bi bi-calendar-week-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M9.5 7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m3 0h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5M2 10.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5" />
                                    </svg>
                                    {{ store.animeList[8].date }}
                                </span>
                            </div>

                            <!-- Title Card -->
                            <div class="text-title">{{ store.animeList[8].title }}</div>
                        </div>

                        <!-- Badge -->
                        <div class="cont-badge">
                            <span class="my-badge" v-for="(item, index) in store.animeList[8].genre" :key="index">
                                {{ item }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../style/partials/variables' as *;

.my-bg-gray {
    background-color: $my_lightgray;
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
        font-size: 14px;
        font-weight: 600;
    }
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
            font-size: 16px;
            font-weight: 700;
        }

        .date {
            color: gray;
            font-size: 15px;
            font-weight: 600;
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
    .my-row {
        width: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        max-height: 450px;


        .card-container {
            position: relative;
            text-align: center;
            margin: 5px;

            img {
                border-radius: 5px;
                width: 100%;
            }

            .card-bg {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                border-radius: 5px;
                background-color: rgba(1, 1, 1, 0.5);
            }

            .card-text {
                width: 100%;
                color: white;
                position: absolute;
                bottom: 0;
                right: 50%;
                transform: translateX(50%);
                padding-bottom: 15px;
                font-size: medium;
                font-weight: 700;

                .text-icon {
                    font-size: smaller;
                    span {
                        padding-left: 5px;
                    }
                    svg {
                        vertical-align: baseline;
                    }
                }
            }


            &:hover,
            .card-bg:hover,
            .card-text:hover,
            .my-badge:hover{
                cursor: pointer;
            }

            &:hover .card-bg,
            .card-text:hover .card-bg,
            .my-badge:hover .card-bg{
                cursor: pointer;
                transition: 500ms;
                background-color: rgba(60, 60, 60, 0.5);
            }
            .cont-badge {
                top: 15px;
            }

            .my-badge:hover {
                color: $my_red;
            }
        }

    }
}
</style>