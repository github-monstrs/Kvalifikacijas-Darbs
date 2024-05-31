<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useAuthStore } from '@/stores/auth'; // Adjust the path to your store as necessary

const authStore = useAuthStore();

onMounted(async () => {
  await authStore.getUser();
});

const formData = ref({
  name: '',
  email: '',
  message: '',
});

const rating = ref({
  stars: 0,
});

async function submitForm() {
  try {
    await authStore.handleEmail(formData.value);
    clearFormData();
  } catch (error) {
  }
};

function clearFormData() {
  formData.value.name = '';
  formData.value.email = '';
  formData.value.message = '';
};

async function submitRating() {
  try {
    await authStore.handleRating(rating.value);
    resetRating();
  } catch (error) {
  }
};

function resetRating() {
  rating.value.stars = 0;
};

</script>

<template>
  <div id="background">
    <div id="top" class="wrapper">
      <h1 id="contact-me">Contact me</h1>
    </div>
    <div id="form-wrapper" class="wrapper">
      <form accept-charset="UTF-8" @submit.prevent="submitForm();">
        <div class="form-fields">
          <label for="name">Name</label>
          <input v-model="formData.name" type="text" id="name" name="name" required>
        </div>
        <div class="form-fields">
          <label for="email">Email</label>
          <input v-model="formData.email" type="email" id="email" name="email" required>
        </div>
        <div class="form-fields">
          <label for="message">Message</label>
          <textarea v-model="formData.message " id="message" name="message" required></textarea>
        </div>
        <button type="submit">Send message</button>
      </form>
    </div>
    <div id="bottom" class="wrapper">
      <!-- Star rating design from: https://codepen.io/neilpomerleau/pen/wzxzQM -->
      <form class="rating">
        <label>
          <input v-model="rating.stars" type="radio" name="stars" value="1" @change="submitRating()"/>
          <span class="icon">★</span>
        </label>
        <label>
          <input v-model="rating.stars" type="radio" name="stars" value="2" @change="submitRating()"/>
          <span class="icon">★</span>
          <span class="icon">★</span>
        </label>
        <label>
          <input v-model="rating.stars" type="radio" name="stars" value="3" @change="submitRating()"/>
          <span class="icon">★</span>
          <span class="icon">★</span>
          <span class="icon">★</span>   
        </label>
        <label>
          <input v-model="rating.stars" type="radio" name="stars" value="4" @change="submitRating()"/>
          <span class="icon">★</span>
          <span class="icon">★</span>
          <span class="icon">★</span>
          <span class="icon">★</span>
        </label>
        <label>
          <input v-model="rating.stars" type="radio" name="stars" value="5" @change="submitRating()"/>
          <span class="icon">★</span>
          <span class="icon">★</span>
          <span class="icon">★</span>
          <span class="icon">★</span>
          <span class="icon">★</span>
        </label>
      </form>
    </div>
  </div>
</template>

<style scoped>
.wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
}

#top{ 
  height: 160px;
}

#form-wrapper{
  margin-bottom: 75px;
}

#contact-me{
  font-size: 56px;
  font-weight: bold;
  color: #7830c9;
}

#message{
  resize: none;
}

#background{
  background-color: #181818;
  height: 100%;
}
.form-fields {
  margin-bottom: 0.5rem;
}

label { 
  display: block; 
  margin-bottom: 4px; 
  font-weight: bold; 
  font-size: 0.9rem;
  color: white;
}

input[type="text"], input[type="email"], textarea {
  border: 1px solid #ccc;
  font-size: 1rem;
  padding: 6px 10px;
  border-radius: 4px;
}
body { display: block }

button[type="submit"] { 
  background-color: #7830c9;
  color: #ffffff;
  font-size: 0.8rem;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  font-weight: 600;
}

button[type="submit"]:hover {
  background-color: lightgray;
}

button[type="submit"]:active {
  background-color: #7830c9;
  color: white;
}
.form-fields input{
  width: 400px;
}
.form-fields textarea{
  width: 400px;
  min-height: 150px;
}


/* Star rating design from: https://codepen.io/neilpomerleau/pen/wzxzQM */
.rating {
  display: inline-block;
  position: relative;
  height: 50px;
  line-height: 50px;
  font-size: 50px;
  scale: 5;
}

.rating label {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  cursor: pointer;
}

.rating label:last-child {
  position: static;
}

.rating label:nth-child(1) {
  z-index: 5;
}

.rating label:nth-child(2) {
  z-index: 4;
}

.rating label:nth-child(3) {
  z-index: 3;
}

.rating label:nth-child(4) {
  z-index: 2;
}

.rating label:nth-child(5) {
  z-index: 1;
}

.rating label input {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}

.rating label .icon {
  float: left;
  color: transparent;
}

.rating label:last-child .icon {
  color: #000;
}

.rating:not(:hover) label input:checked ~ .icon,
.rating:hover label:hover input ~ .icon {
  color: #571aa9;
}

.rating label input:focus:not(:checked) ~ .icon:last-child {
  color: #000;
}
</style>
