<script setup>
import { RouterView } from 'vue-router';
import HeaderBar from '@/components/HeaderBar.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.png" width="40" height="40" />
    <HeaderBar />
  </header>

  <main id="mainEl">
    <RouterView />
  </main>
</template>

<style scoped>

header {
  left: 0px;
  top: 0px;
  line-height: 1.5;
  width: 100vw;
  height: 65px;
  background-color: #303030;
  overflow: hidden !important;
  z-index: 9999;
}

main{
  width: 100%;
  height: 100%;
  top: 50px;
  left: 0px;
  overflow-y: hidden !important;
}

header img {
  left: 0px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0 15px;
  }
}
</style>
