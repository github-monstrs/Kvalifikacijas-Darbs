<script setup>
import { ref, getCurrentInstance, onMounted, createApp } from 'vue';
import { useAuthStore } from '@/stores/auth';


const authStore = useAuthStore();

const formData = ref({
  username: '',
  email: '',
  password: '',
  password_confirm: ''
});

const instance = getCurrentInstance();


</script>

<template>
  <div id="background-wrapper">
    <div id="login-bg">
      <div id="top">
        <h4 id="sign-in">Register</h4>
      </div>
      <div id="form-wrapper" class="wrapper">
        <form accept-charset="UTF-8" @submit.prevent="authStore.handleRegister(formData)">
          <div class="form-fields">
            <label for="username">Username</label>
            <input v-model="formData.username" type="text" id="username" name="username" required>
          </div>

          <div class="form-fields">
            <label for="email">Email</label>
            <input v-model="formData.email" type="email" id="email" name="email" required>
          </div>

          <div class="form-fields">
            <label for="password">Password</label>
            <input v-model="formData.password" type="password" id="password" name="password" required>
          </div>

          <div class="form-fields">
            <label for="confirm-password">Confirm Password</label>
            <input v-model="formData.password_confirm" type="password" id="confirm-password" name="confirm-password" required>
          </div>

          <button type="submit" @click="authStore.handleRegister(formData)">Register</button>
        </form>
      </div>
      <div id="bottom">
          <router-link to="/login" id="register">Already a member? Sign In.</router-link>
        </div>
    </div>
  </div>
</template>

<style scoped>

a{
  color: #303030;
  text-decoration: none;
}

a:hover{
  color: #7830c9;
  text-decoration: underline;
  cursor: pointer;
  transition: none;
  padding: 0;
  background-color: transparent;
}

#bottom{
  display: flex;
  width: inherit;
  flex-direction: row;
  justify-content: space-between;
}

#background-wrapper{
  width: 100vw;
  height: 100vh;
  background-color: rgba(35, 35, 35, 0.9);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

#login-bg{
  display: flex;
  width: 450px;
  height: 550px;
  background-color: white;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
}

#top{
  display: flex;
  width: inherit;
  height: 30%;
  justify-content: center;
  align-items: center;
}

#bottom{
  display: flex;
  width: 325px;
  flex-direction: row;
  justify-content: space-between;
}

#sign-in{
  font-size: 56px;
  font-weight: bold;
  color: #303030;
}

#form-wrapper{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 20px;
}

.form-fields {
  margin-bottom: 0.5rem;
}

label {
  display: block;
  margin-bottom: 4px; 
  font-weight: bold; 
  font-size: 0.9rem;
  color: #303030;
}

input[type="password"], input[type="email"], input[type="text"] {
  border: 1px solid #ccc;
  font-size: 1rem;
  padding: 6px 10px;
  border-radius: 4px;
}

button[type="submit"] { 
  background-color: #7830c9;
  color: #303030;
  font-size: 0.8rem;
  border: none;
  border-radius: 4px;
  padding: 10px 35px;
  font-weight: 600;
}

button[type="submit"]:hover{
  background-color: transparent;
  border: solid 3px;
  border-color: #7830c9;
  color: #303030;
  padding: 7px 32px;
  cursor: pointer;
}

.form-fields input{
  width: 325px;
}
</style>
