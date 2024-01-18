<script>
import { store } from '../../store'
export default {
    name: 'AppSection2',
    data() {
        return {
            store,
        }
    },
}
</script>

<template lang="">
    <div class="container-lg mt-2 mb-5">
        <div class="row">
            <div class="col-12 text-uppercase d-flex justify-content-between mb-4">
                <h4>lifestyle & stories</h4>
                <div class="d-flex">
                    <button class="btn grey_buttons">all</button>
                    <button class="btn grey_buttons">lifestyle</button>
                    <button class="btn grey_buttons">stories</button>
                </div>
            </div>
            <div class="col-7 text-black mb-3">
                <div class="left_box">
                    <img :src="store.animeList[6].img" alt="" class="img_">
                    <button class="my_button btn_left">{{store.animeList[6].genre[0]}}</button>
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
    <div class="banner-container">
        <div class="container-lg">
            <div class="row">
                <div class="col-12"></div>
            </div>
        </div>
    </div>
    <div class="container-lg">
        <div class="row">
            <div class="col-12"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../style/partials/variables' as*;

.grey_buttons {
    background-color: #545454;
    color: $my_white;
    text-transform: uppercase;
    margin: 0 0.5em;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 14px;
}

h4 {
    line-height: 32px;
    margin: 0;
}

.my_button {
    position: absolute;
    background-color: $my_white;
    padding: 0px 10px;
    border: 1px solid $my_white;
    border-radius: 5px;
    font-size: 13px;
    font-weight: 600;
}

.img_ {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    filter: brightness(60%);
    margin-right: 10px;
}

.left_box {
    width: 750px;
    height: 430px;
    position: relative;


    .btn_left {
        top: 10px;
        left: 10px;
    }

    .text_box {
        position: absolute;
        bottom: 50px;
        left: 25px;
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

}
</style>