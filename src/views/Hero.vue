<script setup>

</script>

<template>
  
  <div id="hero-wrapper"></div>

  <div id="hero-text">
    <h1 id="hero-title">Minigame Arcade</h1>
    <div id="base-text">The perfect haven for gaming enthusiasts! From thrilling puzzles to dynamic action adventures, our platform promises endless entertainment and challenge. Engage, explore, and emerge victorious in various game genres that promise to keep you entertained for hours.</div>
    <router-link to="/projects" tag="button" id="play-now" class="btn">Play now</router-link>
  </div>
</template>

<style scoped>
#hero-wrapper{
  background-image: url(../assets/arcade-background.jpg);
  height: 100%;
}

#hero-text{
  position: absolute;
  color: white;
  background-color: #303030;
  top: 350px;
  width: 550px;
  height: 290px;
  padding: 25px;
  border-radius: 0px 10px 10px 0px;
}

#play-now{
  display: flex;
  width: 125px;
  height: 35px;
  background-color: #7830c9;
  color: #ffffff;
  padding: 5px;
  border-radius: 2px;
  border: none;
  margin-top: 10px;
  text-align: center;
  justify-content: center;
  transition: 0ms;
}

#play-now:hover{
  background-color: transparent;
  border: solid 3px;
  border-color: #7830c9;
  padding: 3px;
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
}
</style>
