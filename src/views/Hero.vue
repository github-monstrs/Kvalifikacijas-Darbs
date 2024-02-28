<script setup>

</script>

<template>
  
  <div id="hero-wrapper"></div>

  <div id="hero-text">
    <h1 id="hero-title">Lorem ipsum</h1>
    <div id="base-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perspiciatis rerum doloribus unde quis harum maiores magnam assumenda facere neque ipsa distinctio molestias earum minima, voluptatibus expedita nihil vitae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam iure labore dolores sint excepturi magnam nihil fugiat sapiente odit minus.</div>
  </div>
</template>

<style scoped>
#hero-wrapper{
  background-image: url(../assets/ForrestBackground.jpg);
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}

#hero-text{
  position: absolute;
  color: white;
  background-color: #303030;
  top: 350px;
  width: 550px;
  height: 250px;
  padding: 10px;
  border-radius: 0px 10px 10px 0px;
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
