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

// Computed property to filter the leaderboard based on search query
const filteredLeaderboard = computed(() => {
  return leaderboard.value.filter(entry => {
    const playerMatch = entry.name.toLowerCase().includes(searchQuery.value.toLowerCase());
    const gameMatch = entry.game_title.toLowerCase().includes(searchQuery.value.toLowerCase());
    return playerMatch || gameMatch;
  });
});
</script>

<template>
  <div>
    <h1>Leaderboard</h1>
    
    <!-- Search bar -->
    <input type="text" v-model="searchQuery" placeholder="Search by player or game title">
    
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
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid black;
  padding: 8px;
  text-align: left;
}
</style>
