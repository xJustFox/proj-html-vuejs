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
    <div class="bg-red relative">
    <div class="container-lg ">
        <div class="row ">
            <div class="col-6"> 
                <span class="news-up px-3">NEWS UPDATES</span> 
                <img class="pic" src="../assets/healthy-foods-150x150.webp" alt="">
                <span class="news p-1">0:37</span>
                <span class="news p-1 X">THE BEST HEALTHY FOOD</span>
            </div>
            <div class="col-4 d-flex justify-content-end align-items-center ">
          <div><i class="fa-solid fa-chevron-left fa-lg social px-3"></i></div>
          <div><i class="fa-solid fa-chevron-right fa-lg social"></i></div>

            </div>
            <div class="col-2 d-flex justify-content-end align-items-center">
                <i class="fa-brands fa-facebook fa-xl p-2 social"></i>
                <i class="fa-brands fa-twitter fa-xl p-2 social"></i>
<i class="fa-brands fa-instagram fa-xl p-2 social"></i>
<i class="fa-brands fa-youtube fa-xl p-2 social"></i>
            </div>
        </div>
    </div>
</div>
    <div class="container-lg">
        <div class="row p-3">
            <div class="col-4 "> 
                <img src="../assets/anime-logo-300x89.webp" alt="">
             </div>
                <div class="col-8 d-flex justify-content-end">
                    <img src="../assets/header-banner.webp" alt="">
              
            </div>
        </div>
    </div>
    <hr>
    <div class="container-lg ">
        <div class="row">
        <div class="col-2 show">
            <i class="fa-solid fa-bars fa-2xl "></i>
        </div>
        <div class="col-8">
            <ul class="d-flex justify-content-around list">
                <li class="show"> <i class="fa-solid fa-house-chimney  "></i> HOME</li>
                <li class="show"> <i class="fa-solid fa-user"></i> ABOUT US</li>
                <li class="show"> <i class="fa-solid fa-suitcase "></i> LIFESTYLE <i class="fa-solid fa-angle-down"></i></li>
                <div class="bg-grey none">
    <div class="container">
        <div class="row px-5 py-4">
            <div class="col-3 ">
                <div class="card border-0" style="width: 18rem;">
  <img src="../assets/visit-france.webp" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text text-card">Reasons To Visit France</p>
  </div>
</div>

            </div>
            <div class="col-3 ">
                <div class="card border-0" style="width: 18rem;">
  <img src="../assets/best-places.webp" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text text-card">Traveling Alone Is Awesome</p>
  </div>
</div>

            </div>
            <div class="col-3 ">
                <div class="card border-0" style="width: 18rem;">
  <img src="../assets/music-love.webp" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text text-card">The Best Success Stories</p>
  </div>
</div>

            </div>
            <div class="col-3">
                <div class="card border-0" style="width: 18rem;">
  <img src="../assets/anime-fashion.webp" class="card-img-top" alt="...">
  <div class="card-body body-card">
    <p class="card-text text-card">Places For A Road Trip</p>
  </div>
</div>

            </div>
        </div>
    </div>
    </div>
                <li class="show"> <i class="fa-solid fa-book-open-reader"></i> STORIES <i class="fa-solid fa-angle-down"></i></li>
                <div class="bg-grey none">
    <div class="container">
        <div class="row px-5 py-4">
            <div class="col-3 ">
                <div class="card border-0" style="width: 18rem;">
  <img src="../assets/ideas-anime.webp" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text text-card">Live Ideas You Might Be Anime</p>
  </div>
</div>

            </div>
            <div class="col-3 ">
                <div class="card border-0" style="width: 18rem;">
  <img src="../assets/travel-alone.webp" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text text-card">Places For a Road Trip</p>
  </div>
</div>

            </div>
            <div class="col-3 ">
                <div class="card border-0" style="width: 18rem;">
  <img src="../assets/success-story.webp" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text text-card">Music The Love Of My Life</p>
  </div>
</div>

            </div>
            <div class="col-3">
                <div class="card border-0" style="width: 18rem;">
  <img src="../assets/best-places.webp" class="card-img-top" alt="...">
  <div class="card-body body-card">
    <p class="card-text text-card">Fashion Trend Now a Days</p>
  </div>
</div>

            </div>
            </div>
            </div>
        </div>
                <li class="show"><div class="dropdown">
  <button class=" list show" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <i class="fa-solid fa-book show"></i> PAGES
  </button>
  <ul class="dropdown-menu">
    <li class="show"><button class="dropdown-item" type="button"> <i class="fa-solid me-2 fa-sm  fa-magnifying-glass show"></i> <span class="text-drop show"> SEARCH RESULT</span></button></li>
    <li class="show"><button class="dropdown-item" type="button"> <i class="fa-solid me-2 fa-sm  fa-box-archive show"></i> <span class="text-drop show"> CATEGORY ARCHIVE</span></button></li>
    <li class="show"><button class="dropdown-item" type="button"> <i class="fa-solid me-2 fa-sm  fa-circle-user show"></i> <span class="text-drop show"> AUTHOR ARCHIVE</span></button></li>
    <li class="show"><button class="dropdown-item" type="button"> <i class="fa-solid me-2 fa-sm  fa-calendar-days show"></i> <span class="text-drop show"> DATE ARCHIVE</span></button></li>
    <li class="show"><button class="dropdown-item" type="button"> <i class="fa-solid me-2 fa-sm  fa-bug show"></i> <span class="text-drop show"> ERRORE 404</span></button></li>

  </ul>
</div>  </li>
            
                <li class="show"> <i class="fa-solid fa-envelope"></i> CONTACT US</li>

            </ul>
       
        </div>
        <div class="col-2 d-flex justify-content-end pt-3 show">
            <i class="fa-solid fa-magnifying-glass fa-2xl"></i>
        </div>
    </div></div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.pic {
    width: 43px;
}

.relative {
    position: relative;
}

.show:hover {
    color: $my_red;
}

.none {
    display: none;
    position: absolute;
    z-index: 1;
    top: 240px;
    left: 0;
    width: 100%;

}

.show:hover+.none {
    display: flex;
}

.bg-red {
    background-color: $my_red;
}

.bg-grey {
    background-color: $my_lightgray;
}

.news-up {
    background-color: $my_black;
    color: white;
    font-weight: bolder;
    padding: 12px;
}

.news {
    color: white;
    font-weight: 650
}

.svg {
    color: white;
    margin: 0px 20px;
}

.social {
    color: white;

}

.social:hover {
    color: rgba(0, 0, 0, 0.666);
    font-weight: bold;
    cursor: pointer;
}

.list {
    list-style: none;
    color: rgba(0, 0, 0, 0.666);
    font-weight: bold;
    cursor: pointer;
    border: none;
    background-color: white;

}


.news.p-1.X:hover {
    color: rgba(0, 0, 0, 0.666);
    font-weight: bold;
    cursor: pointer;
}

.dropdown:hover .dropdown-menu {
    display: block;
}

.dropdown-menu {
    display: none;
}

.text-drop {
    font-size: 13px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.666);

}

.text-card {
    text-align: center;
    font-weight: 600
}

.body-card {
    border: none;
}</style>