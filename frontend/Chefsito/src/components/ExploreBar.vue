<template>
    <div>
        <CarouselComp class="carousel" v-slot="{ currentSlide }">
            <SlideComp v-for="(vid, index) in videos" :key="index">
                <div v-show="currentSlide === index + 1" class="slide-info">

                    <video :src="getVidUrl(vid)" controls loop muted autoplay height="850" width="480" />

                </div>
            </SlideComp>
        </CarouselComp>
    </div>
</template>

<script setup>

import CarouselComp from './CarouselComp.vue';
import SlideComp from './SlideComp.vue';

const videos = [
    "papa.mp4",
    "pollo.mp4"
]

const getVidUrl = (name) => {
    return new URL('../assets/videos/' + name, import.meta.url).href
}
</script>

<style lang="scss" scoped>
.carousel {
    position: relative;
    max-height: 100vh;
    height: 100vh;
    

    .slide-info {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        max-height: 100%;
        height: 100%;
    }
}
</style>