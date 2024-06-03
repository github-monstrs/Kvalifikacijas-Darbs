<script setup>

</script>

<template>
  <div id="main-wrapper">
    <router-link to="projects/memory-game" class="game-card">
      <img class="game-img" src="../assets/memory_game_thumbnail.png" width="150" height="150">
      <div class="game-text-wrapper">
        <h3 class="game-title">Memory Game</h3>
        <p class="game-text">'Memory Game' is a cognitive challenge inspired by chimp memory tests. Following the same rules as its primate counterpart, this game evaluates working memory. Start with 4 digits and face increasing difficulty. Succeed to level up, but fail and you'll start over.</p>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
a{
  margin: 20px;
  text-decoration: inherit;
  color: inherit;
  transition: transform 0.2s;
}

a:hover {
  cursor: pointer;
  background-color: #252525;
  transform: scale(1.03);
  border-radius: 0;
  padding: inherit;
}

#main-wrapper{
  display: flex;
  justify-content: center;
  height: 100%;
  background-color: #181818;
}

.game-card{
  color: white;
  display: flex;
  width: 650px;
  height: 150px;
}
.game-title{
  padding: 0px 10px;
}
.game-text{
  padding: 0px 10px;
}
.game-text-wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (max-width: 590px){
  .game-card {
    flex-direction: column;
    align-items: center;
    width: 70%;
    height: 500px;
  }

  img {
    margin: 15px;
  }
}
</style>
