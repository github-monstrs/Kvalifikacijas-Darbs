<script setup>
import LogIn from '@/components/LogIn.vue';
import { ref, onMounted, createApp } from 'vue';

function createLogInPopup(){
    var mainEl = document.getElementById('mainEl');
    var popupRoot = document.createElement('div');

    popupRoot.style.position = 'absolute';
    popupRoot.style.top = '0px';  

    mainEl.appendChild(popupRoot);

    const logInPopup = createApp(LogIn);
    logInPopup.mount(popupRoot);
}
</script>

<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/projects">Projects</router-link></li>
      <li><router-link to="/contacts">Contacts</router-link></li>
      <li><img id="logIn" src="../assets/picture-placeholder.png" alt="profile picture placeholder image" @click="createLogInPopup()" width="40" height="40" ></li>
    </ul>
  </nav>
</template>

<style scoped>
#logIn {
  border-radius: 50%;
}

#logIn:hover {
  cursor: pointer;
  padding: 0px;
  border-radius: 50%;
}

nav {
  position: absolute;
  right: 0px;
  height: 65px;
}

ul {
  height: 100%;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  height: 100%;
  float: left;
  display: flex;
  align-items: center;
}

</style>
