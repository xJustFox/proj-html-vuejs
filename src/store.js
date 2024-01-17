import { reactive } from "vue";

export const store = reactive({
animeList: [
    {
        img: '/src/assets/best-places.webp',
        title: 'Place For A Road Trip',
        date: 'December 25, 2022',
        genre: ['Lifestyle','Stories','Travel'],
        demo: 'demo',
    },
    {
        img: '/src/assets/healthy-foods.webp',
        title: 'The Best Healthy Foods',
        date: 'December 26, 2022',
        time: '05:32',
        genre: ['Food'],
        demo: 'demo',
    },
    {
        img: '/src/assets/ideas-anime.webp',
        title: 'Live Ideas You Might Be Anime',
        date: 'December 26, 2022',
        genre: ['Culture','Stories'],
        demo: 'demo',
    },
    {
        img: '/src/assets/music-love.webp',
        title: 'Music The Love Of My Life',
        date: 'December 25, 2022',
        time: '05:34',
        genre: ['Culture','Lifestyle'],
        demo: 'demo',
    },
    {
        img: '/src/assets/photographers-mistakes.webp',
        title: "Beginner Photographer's Mistakes",
        date: 'December 26, 2022',
        genre: ['Fashion'],
        demo: 'demo',
    },
    {
        img: '/src/assets/rice-ball.webp',
        title: "Hygenic Receipe To Prepare Rice",
        date: 'December 26, 2022',
        time: '05:37',
        genre: ['Food'],
        demo: 'demo',
    },
    {
        img: '/src/assets/success-story.webp',
        title: "The Best Success Stories",
        date: 'December 26, 2022',
        genre: ['Culture'],
        demo: 'demo',
    },
    {
        img: '/src/assets/travel-alone.webp',
        title: "Traveling Alone Is Awesome",
        date: 'December 26, 2022',
        genre: ['Stories'],
        demo: 'demo',
    },
    {
        img: '/src/assets/visit-france.webp',
        title: "Reasons To Visit France",
        date: 'December 26, 2022',
        genre: ['Lifestyle','Travel'],
        demo: 'demo',
    },
    {
        img: '/src/assets/winter.webp',
        title: "The Best Winter Outfits",
        date: 'December 26, 2022',
        time: '05:29',
        genre: ['Fashion'],
        demo: 'demo',
    },
]
});