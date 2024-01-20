<script>
export default {
    name: 'AppSection3',
    data() {
        return {
            activeCheck: 0,
            videoList : [
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
        getActiveCheck(active){
            this.activeCheck = active;
        }
    },
}
</script>

<template lang="">
    
    <main>
        <div class="container-lg">
            <div class="row justify-content-center flex-wrap">

                <div class="col-8 p-0">
                    <div class="my-height">
                        <iframe width="100%" height="100%" :src="this.videoList[activeCheck].link" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                
                <div class="col-4 p-0">
                    <div class="my-height">
                        <div class="contPlaylist">
                            <div><i class="bi bi-play-fill"></i></div>
                            <h5 class="m-3 text-white">Video Playlist</h5>
                            <span></span>
                        </div>
                        <ul class="list-unstyled">
                            <li class="d-flex align-items-center p-3" v-for="(video, index) in this.videoList" :key="index" @click="getActiveCheck(index)">
                                <div class="btn btn-dark m-2">{{index + 1}}</div>
                                <img class="px-2 " :src="video.img" alt="">
                                <span>{{video.name}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main> 
    <div class="container-fluid">
        <div class="row my-5">
            <div class="col-2">
                <div class="text-center hover2 position-relative">
                    <img src="/src/assets/anime-fashion.webp" class="rounded img-thumbnail border-light" alt="anime fashion">
                    <h4 class="position-absolute top-50 start-50 translate-middle">FASHION</h4>
                    <span class="position-absolute bottom-0 start-50 translate-middle-x p-4">3 POST</span>
                </div>
            </div>
            <div class="col-2">
                <div class="text-center hover2 position-relative">
                    <img src="/src/assets/success-story.webp" class="rounded img-thumbnail border-light" alt="...">
                    <h4 class="position-absolute top-50 start-50 translate-middle">CULTURE</h4>
                    <span class="position-absolute bottom-0 start-50 translate-middle-x p-4">3 POST</span>
                </div>
            </div>
            <div class="col-2">
                <div class="text-center hover2 position-relative">
                    <img src="/src/assets/healthy-foods.webp" class="rounded img-thumbnail border-light" alt="...">
                    <h4 class="position-absolute top-50 start-50 translate-middle">FOOD</h4>
                    <span class="position-absolute bottom-0 start-50 translate-middle-x p-4">3 POST</span>
                </div>
            </div>
            <div class="col-2">
                <div class="text-center hover2 position-relative">
                    <img src="/src/assets/visit-france.webp" class="rounded img-thumbnail border-light" alt="...">
                    <h4 class="position-absolute top-50 start-50 translate-middle">LIFESTYLE</h4>
                    <span class="position-absolute bottom-0 start-50 translate-middle-x p-4">3 POST</span>
                </div>
            </div>
            <div class="col-2">
                <div class="text-center hover2 position-relative">
                    <img src="/src/assets/travel-alone.webp" class="rounded img-thumbnail border-light" alt="...">
                    <h4 class="position-absolute top-50 start-50 translate-middle">STORIES</h4>
                    <span class="position-absolute bottom-0 start-50 translate-middle-x p-4">3 POST</span>
                </div>
            </div>
            <div class="col-2">
                <div class="content text-center overflow-hidden  hover2 position-relative">
                    <img src="/src/assets/best-places.webp" class=" img-thumbnail border-light" alt="...">
                    <h4 class="position-absolute top-50 start-50 translate-middle">TRAVEL</h4>
                    <span class="middle position-absolute bottom-0 start-50 translate-middle-x p-4">3 POST</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../style/generals.scss' as*;

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}
.content:hover .middle {
  opacity: 1;
}
    .contPlaylist{
    height: 82px;
    background-color: #333333;
}
    .my-height{
        height: 500px;
    }
    img{
        max-width: 100px;
        backface-visibility: hidden;
    }

    ul{
        height: calc(100% - 82px);
        overflow-y: scroll;
        background-color: #F3F3F3;
    }

    ul li{
        border-bottom: 0.5px solid black;

        &:hover{
            cursor: pointer;
            background-color: lightgray;
        }
    }

    img{
        
        padding: 0;
        background-color: rgba(0,0,0,0.5);
        opacity: 0.7;
    }
    .hover2 img {
    margin-left: 0px; 
    transition: margin 0.35s ease;
    z-index: 0;
    }

    .hover2 img:hover {
    margin-right: -20px;
    z-index: 1;
    
    background-color: rgb(191, 29, 45, 0.8);
    
        
    
    }
    span{
        color: white;
    }

    h4{
        font-weight: 700;
        color: white;
    }
    .contPlaylist{
    height: 82px;
    background-color: #333333;
}

</style>