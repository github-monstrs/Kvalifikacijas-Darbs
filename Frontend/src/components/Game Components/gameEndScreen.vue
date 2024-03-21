<script setup>
defineProps({

  score: {
    type: Number,
    required: true
  },

  resetFunction: {
    type: Function,
    required: false
  },
  
  saveScoreFunction: {
    type: Function,
    required: false
  }

});
</script>


<template>
  <div id="fail-background">
    <h1 id="title">Game Ended</h1>
    <h3 id="score-text">Your Score: {{ score }}</h3>
    <div id="button-wrapper">
      <button @click="resetFunction()">Reset</button>
      <button @click="saveScoreFunction()">Save Score</button>
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
