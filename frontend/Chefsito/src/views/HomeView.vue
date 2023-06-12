<template>
    <header><HeaderComp /></header>
    <body>
        <div>
            

            <div class="container-fluid margenless">
                <div class="row">
                    <div class="col">
                        <LeftBar />
                    </div>
                    <div class="col-8">
                        <MainBar />
                    </div>
                    <div class="col">
                        <RightBar />
                    </div>
                </div>
            </div>

        </div>
    </body>
</template>

<script setup>
import HeaderComp from '../components/HeaderComp.vue';
import LeftBar from '../components/LeftBar.vue'
import MainBar from '../components/MainBar.vue'
import RightBar from '../components/RightBar.vue'
</script>

<style scoped>
.margenless {
    padding: 0%;
}
body{
    min-height: 100vh;
}
</style>