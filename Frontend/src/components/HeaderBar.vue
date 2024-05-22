<script setup>
import { ref, onMounted, createApp } from 'vue';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

function showDropdown() {
  document.getElementById("Dropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

</script>

<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/projects">Projects</router-link></li>
      <li><router-link to="/contacts">Contacts</router-link></li>
      <template v-if="!authStore.user">
        <li><router-link to="/login">Login</router-link></li>
      </template>
      <template v-else>
        <li><img id="logIn" class="dropbtn" src="../assets/picture-placeholder.png" alt="profile picture placeholder image" @click="showDropdown()" width="40" height="40" ></li>
        <div id="Dropdown" class="dropdown-content">
          <router-link to="/dashboard">Profile</router-link>
          <a @click="authStore.handleLogout()">Logout</a>
        </div>
      </template>

    </ul>
  </nav>
</template>

<style scoped>

.dropbtn {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.dropbtn:hover, .dropbtn:focus {
  background-color: rgba(200, 200, 200, 0.25);
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  top: 65px;
  right: 0px;
  background-color: #303030;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: rgb(120, 48, 201);
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #505050;
}

.show {
  display:block;
}

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
