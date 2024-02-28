<script setup>
import router from '../router'
</script>

<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/projects">Projects</router-link></li>
      <li><router-link to="/contacts">Contacts</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  position: absolute;
  right: 0px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
  padding: 15px;
}

</style>
