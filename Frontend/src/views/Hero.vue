<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';

const user = ref();
onMounted(async () => {
  const data = await axios.get('/api/user');
  console.log(data);
});

const getToken = async () => {
  await axios.get("/sanctum/csrf-cookie");
}

</script>

<template>
  
  <div id="hero-wrapper">
    <div id="hero-text">
      <h1 id="hero-title">Minigame Arcade</h1>
      <div id="base-text">The perfect haven for gaming enthusiasts! From thrilling puzzles to dynamic action adventures, our platform promises endless entertainment and challenge. Engage, explore, and emerge victorious in various game genres that promise to keep you entertained for hours.</div>
      <router-link to="/projects" tag="button" id="play-now" class="btn">Play now</router-link>
    </div>
  </div>

</template>

<style scoped>
#hero-wrapper{
  background-image: url(../assets/arcade-background.jpg);
  height: 100%;
}

#hero-text{
  position: relative;
  color: white;
  background-color: rgba(48, 48, 48, 1);
  top: 50%;
  width: 550px;
  height: 290px;
  padding: 25px;
  border-radius: 0px 10px 10px 0px;
}

#play-now{
  display: flex;
  width: 125px;
  height: 40px;
  background-color: #7830c9;
  color: #ffffff;
  padding: 5px;
  border-radius: 2px;
  border: none;
  align-items: center;
  justify-content: center;
  transition: 0ms;
}

#play-now:hover{
  display: flex;
  background-color: transparent;
  border: solid 3px;
  border-color: #7830c9;
  align-items: center;
  justify-content: center;
}

#hero-title{
  padding: 5px 0;
  font-weight: bold;
}

#base-text{
  font-weight: 475;
  font-size: 17px;
  line-height: 1.5;
  width: 500px;
  margin-bottom: 15px;
}

@media (max-width: 600px) {
  #hero-text{
    width: 100%;
    background-color: rgba(48, 48, 48, 1);
    height: 50vh;
    top: 30%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
    border-radius: 0;
  }
}
</style>
