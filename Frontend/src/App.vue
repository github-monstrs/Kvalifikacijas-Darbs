<script setup>
import { RouterView } from 'vue-router';
import HeaderBar from '@/components/HeaderBar.vue'
</script>

<template>
  <HeaderBar />
  
  <main id="mainEl">
    <RouterView />
  </main>
</template>

<style scoped>

main{
  position: relative;
  width: 100%;
  height: 100%;
  left: 0px;
}

@media (min-width: 1024px) {
  
}
</style>
