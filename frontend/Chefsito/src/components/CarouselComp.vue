<template>
    <div class="carousel">
        <slot :currentSlide="currentSlide"/>      
        <div class="navigate">
            <div @click="()=>prevSlide()" class="toggle-page left">
                <img src = "../assets/icons/chevron-left-solid.svg"/>
            </div>
            <div @click="()=>nextSlide()" class="toggle-page right">
                <img src = "../assets/icons/chevron-right-solid.svg" height="10" width="10"/>
            </div>
        </div>
    </div>
</template>

<script setup>

    import { ref, onMounted } from 'vue';
    
    const currentSlide = ref(1);
    const getSlideCount = ref(null);

    //next slide
    const nextSlide = () => {
        if(currentSlide.value === getSlideCount.value){
            currentSlide.value = 1;
            return;
        }
        currentSlide.value += 1;
    }

    //prev slide
    const prevSlide = () => {
        if(currentSlide.value === 1){
            currentSlide.value = 1;
            return;
        }
        currentSlide.value -= 1;
    }

    onMounted(()=>{
        getSlideCount.value = document.querySelectorAll(".slide").length;
    })
</script>

<style lang="scss" scoped>

    .navigate {
        padding: 0 16px;
        height: 100%;
        width: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .toggle-page {
        display: flex;
        flex: 1;
    }
    
    .right{
        justify-content: flex-end;
    }

    img {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        background-color: rgb(255, 145, 43);
    }
    

</style>