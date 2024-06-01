<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';

const leaderboard = ref([]);
const searchQuery = ref('');

const fetchLeaderboard = async () => {
  try {
    const response = await axios.get('/api/leaderboard');
    leaderboard.value = response.data;
  } catch (error) {
    console.error("There was an error fetching the leaderboard!", error);
  }
};

onMounted(() => {
  fetchLeaderboard();
});

const filteredLeaderboard = computed(() => {
  return leaderboard.value.filter(entry => {
    const playerMatch = entry.name.toLowerCase().includes(searchQuery.value.toLowerCase());
    const gameMatch = entry.game_title.toLowerCase().includes(searchQuery.value.toLowerCase());
    return playerMatch || gameMatch;
  });
});
</script>

<template>
  <div id="leaderboard-wrapper">

    <div id="header">
      <h1>Leaderboard</h1>
      <input id="searchbar" type="text" v-model="searchQuery" placeholder="Search by player or game title">
    </div>

    <table>
      <thead>
        <tr>
          <th>Game Title</th>
          <th>Username</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="entry in filteredLeaderboard" :key="entry.id">
          <td>{{ entry.game_title }}</td>
          <td>{{ entry.name }}</td>
          <td>{{ entry.value }}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<style scoped>
#leaderboard-wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
}

#header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
  height: 65px;
  padding: 15px 0px;
}

#searchbar {
  width: 45%;
}

table {
  width: 50%;
  background-color: #303030;
  border-collapse: collapse !important;
  border:solid black 1px;
}

thead, th{
  background-color: #571aa9;
  color: black;
}

th {
  font-weight: bold;
}

th, td {
  border: 1px solid black;
  padding: 8px;
  text-align: left;
}

@media (max-width: 1300px) {
  table{
    width: 70%;
  }

  #header {
    width: 70%;
  }
}

@media (max-width: 855px) {
  table{
    width: 90%;
  }

  #header {
    width: 90%;
  }
}

</style>
