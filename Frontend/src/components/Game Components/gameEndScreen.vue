<script setup>
import { onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth';
import axios from 'axios';
import router from '@/router/index';

const authStore = useAuthStore();

onMounted(async () => {
  await authStore.getUser();
});

defineProps({

  score: {
    type: Number,
    required: true
  },

  gameID: {
    type: Number,
    required: true
  },

  resetFunction: {
    type: Function,
    required: false
  }

});

const saveScore = async (score, gameID, authStore, resetFunction) => {
  try {
    const response = await axios.post('/api/save-score', {
      score: score,
      gameID: gameID,
      userID: authStore.user.id
    });
    console.log(response.data.message);
    resetFunction();

  } catch (error) {
    console.error('Error saving score:', error);
  }
};

const redirectToLogin = () => {
  router.push('/login')
}

</script>


<template>
  <div id="fail-background">
    <h1 id="title">Game Ended</h1>
    <h3 id="score-text">Your Score: {{ score }}</h3>
    <div id="button-wrapper">
      <button @click="resetFunction()">Reset</button>
      <template v-if="authStore.user">
        <button @click="saveScore(score, gameID, authStore, resetFunction)">Save Score</button>
      </template>
      <template v-else>
        <button @click="redirectToLogin">Save Score</button>
      </template>
    </div>
  </div>
</template>


<style scoped>
#fail-background{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(30, 30, 30, 0.8);
  width: 720px;
  height: 450px;
  border-radius: 9px;
  color: white;
  flex-direction: column;
}

#title{
  font-weight: 600;
}

#score-text{
  font-weight: 500;
  margin: 10px;
}

button{
  cursor: pointer;
  width: 90px;  
  height: 30px;
  background-color: #41b883;
  border: none;
  border-radius: 3px;
  margin: 5px;
}

button:hover{
  background-color: #2e845e;
}
</style>
