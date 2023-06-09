

<template>
  
  <header>
    <HeaderApp :patricio="tab" @changeLucas="changePato" />
  </header>
  <body v-if="tab!=0">
    <LoginModal v-if="tab==1" />
    <RegisterView v-else />

  </body>
  <button v-for="item in items" :key="item">
    {{ item }}
  </button>
</template>

<script setup>
  import { ref } from 'vue';
  import HeaderApp from './components/HeaderApp.vue'
  import LoginModal from './components/LoginModal.vue'
  import RegisterView from './components/RegisterView.vue'
  const tab = ref(0);

  const items = [1,2,3,4,5,6,7,8,9,0,12,23,3123,12,31,23,12,31,2,31,2,4,1,451,23,41,234,12,34,123,41,234,23];



  const changePato = (n) => {
    tab.value = n;
  }
  
</script>

<style scoped>

</style>
