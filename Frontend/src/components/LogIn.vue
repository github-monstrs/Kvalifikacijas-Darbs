<script setup>
import { ref, getCurrentInstance, onMounted, createApp } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import Register from '@/components/Register.vue';


const router = useRouter();
const formData = ref({
  email: '',
  password: '',
});

const instance = getCurrentInstance();

const handleLogIn = async () => {
  try {
    const response = await axios.post('/login', {
      email: formData.value.email,
      password: formData.value.password
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

function createRegisterPopup(){
    unmountSelf();

    var mainEl = document.getElementById('mainEl');
    var popupRoot = document.createElement('div');

    popupRoot.style.position = 'absolute';
    popupRoot.style.top = '0px';  

    mainEl.appendChild(popupRoot);

    const RegisterPopup = createApp(Register);
    RegisterPopup.mount(popupRoot);
}

</script>

<template>
  <div id="background-wrapper" @click="unmountSelf()">
    <div id="login-bg" @click.stop.prevent>
      <div id="top">
        <h4 id="sign-in">Sign In</h4>
      </div>
      <div id="form-wrapper" class="wrapper">
        <form accept-charset="UTF-8">

          <div class="form-fields">
            <label for="email">Email</label>
            <input v-model="formData.email" type="email" id="email" name="email" required>
          </div>

          <div class="form-fields">
            <label for="password">Password</label>
            <input v-model="formData.password" type="password" id="password" name="password" required>
          </div>

          <button type="submit" @click="handleLogIn()">Login</button>
        </form>
        <div id="bottom">
          <a id="register" @click="createRegisterPopup()">Register</a>
          <a id="forgot-pwd">Forgot password?</a>
        </div>
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
  height: 45%;
  justify-content: center;
  align-items: center;
}

#bottom{
  display: flex;
  width: inherit;
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
</style>
