<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();

onMounted(async () => {
  await authStore.getUser();
  if (authStore.authUser.is_admin) {
    await authStore.getAllUsers();
  }
});

async function deleteCurrentUser() {
  await authStore.getUser();
  var current_userID = authStore.authUser.id;

  await authStore.handleLogout();
  await authStore.deleteCurrentUser(current_userID);
}

</script>

<!-- User profile dashboard design from: https://bbbootstrap.com/snippets/social-profile-container-63944396 -->

<template>
  <div v-if="authStore.user">
    <!-- loads if user is admin -->
    <div v-if="authStore.user.is_admin" class="page-content page-container" id="page-content">
      <div class="padding">
        <div class="row container d-flex justify-content-center">
          <div class="col-xl-6 col-md-12">
            <div class="card user-card-full">
              <div class="row m-l-0 m-r-0">
                <div class="col-sm-4 bg-c-lite-green user-profile">
                  <div class="card-block text-center text-white">
                    <div class="m-b-25">
                      <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image">
                    </div>
                    <h6>{{ authStore.user.name }}</h6>
                    <p>Administrator</p>
                    <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                  </div>
                </div>
                <div class="col-sm-8">
                  <div class="card-block">
                    <h6 class="m-b-20 p-b-5 b-b-default f-w-600 small-font">Information</h6>
                    <div class="row">
                      <div class="col-sm-6">
                        <p class="m-b-10 f-w-600">Email</p>
                        <p class="text-muted f-w-400">{{ authStore.user.email }}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- user list -->
                <div class="user-card-full">
                  <div class="card-block">
                    <h6 class="m-b-20 p-b-5 b-b-default f-w-600 small-font">All Users</h6>
                    <table>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Is Admin</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="user in authStore.userList" :key="user.id">
                          <td>{{ user.id }}</td>
                          <td>{{ user.name }}</td>
                          <td>{{ user.email }}</td>
                          <td>{{ user.is_admin ? 'Yes' : 'No' }}</td>
                          <td>
                            <div id="admin-btn-wrapper">
                              <button class="admin-btn" @click="authStore.deleteUser(user.id)" v-if="authStore.user.is_admin">Delete</button>
                              <button class="admin-btn" @click="authStore.toggleAdmin(user.id)" v-if="authStore.user.is_admin">
                                {{ user.is_admin ? 'Remove Admin' : 'Make Admin' }} 
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <!-- end of user list -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- loads if user is regular user -->
    <div v-else class="page-content page-container" id="page-content">
      <div class="padding">
        <div class="row container d-flex justify-content-center">
          <div class="col-xl-6 col-md-12">
            <div class="card user-card-full">
              <div class="row m-l-0 m-r-0">
                <div class="col-sm-4 bg-c-lite-green user-profile">
                  <div class="card-block text-center text-white">
                    <div class="m-b-25">
                      <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image">
                    </div>
                    <h6>{{ authStore.user.name }}</h6>
                    <p>User</p>
                    <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                  </div>
                </div>
                <div class="col-sm-8">
                  <div class="card-block">
                    <h6 class="m-b-20 p-b-5 b-b-default f-w-600 small-font">Information</h6>
                    <div class="row">
                      <div class="col-sm-6">
                        <p class="m-b-10 f-w-600">Email</p>
                        <p class="text-muted f-w-400">{{ authStore.user.email }}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button id="delete-btn" @click="deleteCurrentUser()">Delete User</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- loads if user is not logged in -->
  <div v-else>
    <h1>TO VIEW THIS PAGE PLEASE LOG IN</h1>
  </div>
</template>


<style scoped>
*{
    font-weight: bold;
}

#prompt {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60%;
}

body {
    background-color: #f9f9fa;
}

.small-font {
    font-size: 16px;
}

.padding {
    padding: 3rem !important
}

.user-card-full {
    overflow: hidden;
}

.card {
    border-radius: 5px;
    -webkit-box-shadow: 0 1px 20px 0 rgba(69,90,100,0.08);
    box-shadow: 0 1px 20px 0 rgba(69,90,100,0.08);
    border: none;
    margin-bottom: 30px;
}

.m-r-0 {
    margin-right: 0px;
}

.m-l-0 {
    margin-left: 0px;
}

.user-card-full .user-profile {
    border-radius: 5px 0 0 5px;
}

.bg-c-lite-green {
        background: -webkit-gradient(linear, left top, right top, from(#7830c9), to(#2c3e50));
    background: linear-gradient(to right, #7830c9, #2c3e50);
}

.user-profile {
    padding: 20px 0;
    color: #000;
}

.card-block {
    padding: 1.25rem;
    font-weight: bold !important;
}

.m-b-25 {
    margin-bottom: 25px;
}

.img-radius {
    border-radius: 5px;
}

table{
  border-collapse: collapse;
  width: 750px;
}

th, td {
  border: 1px solid black;
  padding: 8px;
  text-align: center;
}

#admin-btn-wrapper {
  display: flex;
  justify-content: space-around;
}

.admin-btn {
  height: 25px;
  border-radius: 5px;
  border: none;
}

.admin-btn:hover {
  background-color: #7830c9;
  border-radius: 5px;
}
 
h6 {
    font-size: 34px;
}

.card .card-block p {
    line-height: 25px;
}

.card-block {
    padding: 1.25rem;
}

.b-b-default {
    border-bottom: 1px solid #e0e0e0;
}

.m-b-20 {
    margin-bottom: 20px;
}

.p-b-5 {
    padding-bottom: 5px !important;
}

.card .card-block p {
    line-height: 25px;
}

.m-b-10 {
    margin-bottom: 10px;
}

.text-muted {
    color: #919aa3 !important;
}

.b-b-default {
    border-bottom: 1px solid #e0e0e0;
}

.f-w-600 {
    font-weight: 600;
}

.m-b-20 {
    margin-bottom: 20px;
}

.m-t-40 {
    margin-top: 20px;
}

.p-b-5 {
    padding-bottom: 5px !important;
}

.m-b-10 {
    margin-bottom: 10px;
}

.m-t-40 {
    margin-top: 20px;
}

.user-card-full .social-link li {
    display: inline-block;
}

.user-card-full .social-link li a {
    font-size: 20px;
    margin: 0 10px 0 0;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

#delete-btn {
  color: black;
  font-weight: bold !important;
  background-color: red;
  border: none;
  width: 150px;
  height: 35px;
  border-radius: 5px;
}

#delete-btn:hover {
  background-color: transparent;
  border: solid 3px;
  border-color: red;
  color: #fff;
  padding: 7px 32px;
  cursor: pointer;
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

}

@media (max-width: 1030px) {
  table{
    width: 100%;
  }
}

@media (max-width: 705px) {
  .padding {
    padding: 1rem !important;
  }
}

@media (max-width: 650px) {
  #admin-btn-wrapper {
    flex-direction: column;
  }

  .admin-btn{
    height: 40px;
    margin: 5px;
  }
}

@media (max-width: 530px) {
  table{
    transform-origin: top left;
    scale: 0.85;
  }
}

@media (max-width: 450px) {
  table{
    transform-origin: top left;
    scale: 0.75;
  }
}

@media (max-width: 415px) {
  table{
    transform-origin: top left;
    scale: 0.65;
  }
}

@media (max-width: 350px) {
  table{
    transform-origin: top left;
    scale: 0.58;
  }
}

</style>
