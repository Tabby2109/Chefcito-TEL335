

<template>
  
  <header>
    <HeaderApp :patricio="tab" @changeLucas="changePato" />
  </header>
  <body v-if="tab!=0">
    <LoginModal v-if="tab==1" />
    <RegisterView v-else />

  </body>
  
</template>

<script setup>
  import { ref } from 'vue';
  import HeaderApp from '../components/HeaderApp.vue'
  import LoginModal from '../components/LoginModal.vue'
  import RegisterView from '../components/RegisterView.vue'
  const tab = ref(0);

  const changePato = (n) => {
    tab.value = n;
  }
  
</script>

<style>

</style>
