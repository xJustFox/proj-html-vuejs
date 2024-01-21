<script>
export default {
    name: 'AppSection3',
    data() {
        return {
            activeCheck: 0,
            videoList: [
                {
                    name: 'Sword of the Stranger fight scene',
                    img: 'https://i.ytimg.com/vi/ebHd_3QJNBA/hqdefault.jpg',
                    link: 'https://www.youtube.com/embed/ebHd_3QJNBA?si=4dXbxJ-pGQi_LKzi',
                },
                {
                    name: "Sun's Out, Guns Out",
                    img: 'https://i.ytimg.com/vi/zlwQERpksnw/hqdefault.jpg',
                    link: 'https://www.youtube.com/embed/zlwQERpksnw?si=wILwX8mizgz9UPix',
                },
                {
                    name: 'Top 10 Vinland Saga Moments',
                    img: 'https://i.ytimg.com/vi/itQnUDMMhaU/hqdefault.jpg',
                    link: 'https://www.youtube.com/embed/itQnUDMMhaU?si=nNFtRO4fYeZ0Al9Q',
                },
                {
                    name: 'Everytime Sukuna Appears',
                    img: 'https://i.ytimg.com/vi/IrU2dklT11s/hqdefault.jpg',
                    link: 'https://www.youtube.com/embed/IrU2dklT11s?si=FjVxUs7rGY1ygOCm',
                },
                {
                    name: 'Wizard King (Julius) vs Licht (Patri) Full Fight',
                    img: 'https://i.ytimg.com/vi/H5qupR6YQpQ/hqdefault.jpg',
                    link: 'https://www.youtube.com/embed/H5qupR6YQpQ?si=fEP5I2oPc2CukDY3',
                },
                {
                    name: 'Vinland Saga | SHATTERED',
                    img: 'https://i.ytimg.com/vi/ICt1jYfucec/hqdefault.jpg',
                    link: 'https://www.youtube.com/embed/ICt1jYfucec?si=ZcVvAhM0IiVZCNH_',
                },
                {
                    name: 'Konan arranges',
                    img: 'https://i.ytimg.com/vi/CkC5CtabT1Y/hqdefault.jpg',
                    link: 'https://www.youtube.com/embed/CkC5CtabT1Y?si=5cPgdrw0Z7hRagtc',
                },
            ]
        }
    },


    methods: {
        getActiveCheck(active) {
            this.activeCheck = active;
        }
    },
}
</script>

<template lang="">
    
    <div>
        <div class="container-lg">
            <div class="row justify-content-center flex-wrap">

                <div class="col-8 p-0">
                    <div class="my-height">
                        <iframe class="rounded-start" width="100%" height="100%" :src="this.videoList[activeCheck].link" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                
                <div class="col-4 p-0">
                    <div class="my-height">
                        <div class="contPlaylist d-flex align-items-center">
                            <div>
                                <i class="fa-solid fa-play"></i>
                            </div>
                            <div>
                                <div class="fw-bolder">Video Playlist</div>
                                <div class="countNum fw-bolder">{{this.activeCheck + 1}}/{{this.videoList.length}}</div>
                            </div>
                            
                        </div>
                        <ul class="list-unstyled">
                            <li class="d-flex align-items-center py-3" v-for="(video, index) in this.videoList" :key="index" @click="getActiveCheck(index)">
                                <div :class="activeCheck == index ? 'activeNum' : 'noActiveNum' " class="my-num">{{index + 1}}</div>
                                <img class="rounded-4" :src="video.img" alt="">
                                <div :class="activeCheck == index ? 'activeText' : '' ">{{video.name}}</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    <div class="container-fluid pt-5 pb-2">
        <div class="row">
            <div class="col-2">
                <div class="box">
                    <img src="/src/assets/anime-fashion.webp" class="backImage" alt="anime fashion">
                    <div class="my-bg-red"></div>
                    <div class="card-bg"></div>
                    <div class="contentCard">
                        <h4 class="titleCard">FASHION</h4>
                        <span class="textCard">3 POST</span>
                    </div>
                    <div class="borderCard"></div>
                </div>
            </div>
            <div class="col-2">
                <div class="box">
                    <img src="/src/assets/success-story.webp" class="backImage" alt="...">
                    <div class="my-bg-red"></div>
                    <div class="card-bg"></div>
                    <div class="contentCard">
                        <h4 class="titleCard">FASHION</h4>
                        <span class="textCard">3 POST</span>
                    </div>
                    <div class="borderCard"></div>
                </div>
            </div>
            <div class="col-2">
                <div class="box">
                    <img src="/src/assets/healthy-foods.webp" class="backImage" alt="...">
                    <div class="my-bg-red"></div>
                    <div class="card-bg"></div>
                    <div class="contentCard">
                        <h4 class="titleCard">FASHION</h4>
                        <span class="textCard">3 POST</span>
                    </div>
                    <div class="borderCard"></div>
                </div>
            </div>
            <div class="col-2">
                <div class="box">
                    <img src="/src/assets/visit-france.webp" class="backImage" alt="...">
                    <div class="my-bg-red"></div>
                    <div class="card-bg"></div>
                    <div class="contentCard">
                        <h4 class="titleCard">FASHION</h4>
                        <span class="textCard">3 POST</span>
                    </div>
                    <div class="borderCard"></div>
                </div>
            </div>
            <div class="col-2">
                <div class="box">
                    <img src="/src/assets/travel-alone.webp" class="backImage" alt="...">
                    <div class="my-bg-red"></div>
                    <div class="card-bg"></div>
                    <div class="contentCard">
                        <h4 class="titleCard">FASHION</h4>
                        <span class="textCard">3 POST</span>
                    </div>
                    <div class="borderCard"></div>
                </div>
            </div>
            <div class="col-2">
                <div class="box">
                    <img src="/src/assets/best-places.webp" class="backImage" alt="...">
                    <div class="my-bg-red"></div>
                    <div class="card-bg"></div>
                    <div class="contentCard">
                        <h4 class="titleCard">FASHION</h4>
                        <span class="textCard">3 POST</span>
                    </div>
                    <div class="borderCard"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../style/generals.scss' as*;


.contPlaylist {
    color: white;
    height: 82px;
    background-color: #333333;
    border-radius: 0 5px 0 0;
}

.my-height {
    height: 500px;
}

.fa-play {
    margin: 0 20px;
    font-size: 25px;
}

.countNum {
    font-size: small;
}

ul {
    height: calc(100% - 82px);
    overflow-y: auto;
    background-color: #F3F3F3;
    border-radius: 0 0 5px 0;

    .activeText {
        color: #bf1d2e;
    }

    .activeNum {
        background-color: #bf1d2e;
    }

    .noActiveNum {
        background-color: #333333;
    }

    li {
        border-bottom: 0.5px solid black;

        &:hover {
            cursor: pointer;
            color: #bf1d2e;
        }

        &:hover .my-num {
            background-color: #bf1d2e;
        }

        img {
            max-width: 100px;
            margin: 0 10px 0 5px;
        }

        .my-num {
            color: white;
            margin-left: 10px;
            padding: 3px 10px;
            border-radius: 5px;
        }
    }
}


.box {
    width: 100%;
    height: 230px;
    position: relative;
    text-align: center;
    overflow: hidden;
    border-radius: 3%;

    .my-bg-red {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
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

    .backImage {
        position: absolute;
        top: 50%;
        left: 35%;
        transform: translate(-50%, -50%);
        height: calc(100% + 50px);
    }

    .contentCard {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 35px;
        color: white;
        border-radius: 20%;
    }

    .textCard {
        position: absolute;
        left: 0;
        color: transparent;
    }

    .borderCard {
        width: 0%;
        height: 80%;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-50%, -50%);
    }
}

.box:hover .borderCard,
.contentCard:hover .borderCard {
    cursor: pointer;
    width: 80%;
    left: 50%;
    border: 3px solid white;
    transition: 300ms;
}

.box:hover .textCard,
.contentCard:hover .textCard {
    cursor: pointer;
    color: white;
    left: 35%;
    transition: 300ms;
}

.box:hover .backImage,
.contentCard:hover .backImage {
    cursor: pointer;
    left: 60%;
    transition: 300ms;
}

.box:hover .my-bg-red,
.contentCard:hover .my-bg-red {
    cursor: pointer;
    transition: 300ms;
    background-color: rgba(255, 0, 0, 0.2);
}</style>