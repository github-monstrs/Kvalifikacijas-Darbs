<script setup>
import { ref, getCurrentInstance, onMounted, createApp } from 'vue';
import { useAuthStore } from '@/stores/auth';
import router from '@/router/index';

const authStore = useAuthStore();

onMounted(async () => {
});

const formData = ref({
  email: '',
});

</script>

<template>
  <div id="background-wrapper" >
    <div id="login-bg">
      <div id="top">
        <h4 id="sign-in">Forgot password</h4>
      </div>
      <div id="form-wrapper" class="wrapper">
        <form accept-charset="UTF-8" @submit.prevent="">

          <div class="form-fields">
            <label for="email">Email</label>
            <input v-model="formData.email" type="email" id="email" name="email" required>
          </div>

          <button type="submit" @click="authStore.handleForgotPassword(formData);">Submit</button>
        </form>
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

#background-wrapper{
  width: 100vw;
  height: 100vh;
  background-color: rgba(35, 35, 35, 0.9);
  overflow: hidden;
  display: flex;
  justify-content: center;
}

#login-bg{
  display: flex;
  width: 450px;
  height: 225px;
  background-color: white;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
}

#top{
  display: flex;
  width: inherit;
  justify-content: left;
  align-items: center;
  margin-top: 3%;
  padding-left: 60px;
}

#bottom{
  display: flex;
  width: inherit;
  flex-direction: row;
  justify-content: space-between;
}

#sign-in{
  font-size: 30px;
  font-weight: bold;
  color: #303030;
}

#form-wrapper{
  display: flex;
  flex-direction: column;
  height: 50%;
  justify-content: space-around;
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

input[type="password"], input[type="email"] {
  border: 1px solid #ccc;
  font-size: 1rem;
  padding: 6px 10px;
  border-radius: 4px;
}

button[type="submit"] { 
  background-color: #7830c9;
  color: #fff;
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

@media (max-width: 500px) {
  #login-bg{
    scale: 0.9;
  }
}

@media (max-width: 450px) {
  #login-bg{
    transform-origin: top;
    scale: 0.8;
  }
}

@media (max-width: 400px) {
  #login-bg{
    transform-origin: top;
    scale: 0.7;
  }
}

</style>
