<script setup>
import { ref, getCurrentInstance, onMounted, createApp } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import LogIn from '@/components/LogIn.vue';


const router = useRouter();
const formData = ref({
  username: '',
  email: '',
  password: '',
  password_confirm: ''
});

const instance = getCurrentInstance();

const handleRegister = async () => {
  try {
    const response = await axios.post('/register', {
      username: formData.value.username,
      email: formData.value.email,
      password: formData.value.password,
      password_confirm: formData.value.password_confirm
    });
    
    if (response.status === 200) {

      window.location.reload();
    }
  } catch (error) {
    window.location.reload();
  }
};

const unmountSelf = () => {
  const appElement = instance.vnode.el.parentElement; // Get the parent of the component's root element
  if (appElement) {
    appElement.removeChild(instance.vnode.el); // Remove the component's root element from its parent
  }
};

function createLogInPopup(){
    unmountSelf();

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
  <div id="background-wrapper" @click="unmountSelf()">
    <div id="login-bg" @click.stop.prevent>
      <div id="top">
        <h4 id="sign-in">Register</h4>
      </div>
      <div id="form-wrapper" class="wrapper">
        <form accept-charset="UTF-8" @submit="handleRegister()">
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

          <button type="submit" @click="handleRegister()">Register</button>
        </form>
      </div>
      <div id="bottom">
          <a id="register" @click="createLogInPopup()">Already a member? Sign In.</a>
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
  position: absolute;
  top: -100px;
  width: 100vw;
  height: calc(100vh + 100px);
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
