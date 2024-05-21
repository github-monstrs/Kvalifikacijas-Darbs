<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();

onMounted(async () => {
  await authStore.getUser();
});


</script>


<template>
    <div id="main">
        <div v-if="authStore.user">
            <h1>{{ authStore.user.name }}</h1>
            <p>{{ authStore.user.email }}</p>
        </div>
        <div v-else>
            <h1> LOG IN  </h1>
        </div>
    </div>
</template>


<style scoped>
#main {
    color: white;
}
</style>
