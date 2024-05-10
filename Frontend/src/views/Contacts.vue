<template>
  <div id="background">
    <div id="top" class="wrapper">
      <h1 id="contact-me">Contact me</h1>
    </div>
    <div id="form-wrapper" class="wrapper">
        <form accept-charset="UTF-8" @submit.prevent="submitForm">
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
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios'; // Ensure Axios is imported

const formData = ref({
  name: '',
  email: '',
  message: '',
});

const submitForm = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/send-email', formData.value);
    alert('Message sent successfully!');
    formData.value = { name: '', email: '', message: '' };
  } catch (error) {
    console.error('There was an error sending the message', error);
    alert('Failed to send the message.');
  }
}

</script>


<style scoped>
.wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
}

#top{ 
  height: 160px;
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
  background-color: #303030;
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
</style>
