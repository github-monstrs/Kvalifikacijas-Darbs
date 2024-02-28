<script setup>

</script>

<template>
  <div class="game-row">
    <div class="row-item"></div>
    <div class="row-item"></div>
    <div class="row-item"></div>
    <div class="row-item"></div>
    <div class="row-item"></div>
    <div class="row-item"></div>
    <div class="row-item"></div>
    <div class="row-item"></div>
  </div>
  <div class="game-row">
    <div class="row-item"></div>
    <div class="row-item"></div>
    <div class="row-item"></div>
    <div class="row-item"></div>
    <div class="row-item"></div>
    <div class="row-item"></div>
    <div class="row-item"></div>
    <div class="row-item"></div>
  </div>
  <div class="game-row">
    <div class="row-item"></div>
    <div class="row-item"></div>
    <div class="row-item"></div>
    <div class="row-item"></div>
    <div class="row-item"></div>
    <div class="row-item"></div>
    <div class="row-item"></div>
    <div class="row-item"></div>
  </div>
  <div class="game-row">
    <div class="row-item"></div>
    <div class="row-item"></div>
    <div class="row-item"></div>
    <div class="row-item"></div>
    <div class="row-item"></div>
    <div class="row-item"></div>
    <div class="row-item"></div>
    <div class="row-item"></div>
  </div>
  <div class="game-row">
    <div class="row-item"></div>
    <div class="row-item"></div>
    <div class="row-item"></div>
    <div class="row-item"></div>
    <div class="row-item"></div>
    <div class="row-item"></div>
    <div class="row-item"></div>
    <div class="row-item"></div>
  </div>
</template>

<style scoped>
.row-item.ingame:hover{
    cursor: pointer;
    color: lightgrey;
    border: 40px solid lightgrey;
}
.row-item.ingame{
    color: gray;
    border: 40px solid grey;
    font-size: 50px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    line-height: 1;
}
.row-item.active:hover{
    cursor: pointer;
    border: 5px solid lightgrey;
}
.row-item.active{
    color: grey;
    border: 5px solid grey;
    font-size: 50px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    line-height: 1;
}
.row-item{
    width: 80px;
    height: 80px;
    margin: 5px;
    border-radius: 10px;
}
.game-row{
    display: flex;
}
</style>
