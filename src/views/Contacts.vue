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

const formData = ref({
  name: '',
  email: '',
  message: '',
});

const submitForm = () => {
  formData.name = formData.name;
  formData.email = formData.email;
  formData.message = formData.message;

  const data = {
    name: formData.value.name,
    email: formData.value.email,
    message: formData.value.message,
  };

  fetch('http://localhost:3000/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Failed to send the email');
    })
    .then((data) => {
      console.log(data.message);
    })
    .catch((error) => {
      console.error(error);
    });
};
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
  color: #41b883;
}

#background{
  background-color: #303030;
  height: 800px;
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
  background-color: rgb(65, 184, 131);
  color: #303030;
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
  background-color: rgb(35, 92, 65);
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
