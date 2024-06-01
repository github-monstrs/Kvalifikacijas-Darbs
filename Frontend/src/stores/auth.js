import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        authUser: null,
        userList: null,
        csrfToken: null,
    }),
    getters: {
        user: (state) => state.authUser,
    },
    actions: {
        async getToken() {
            await axios.get("/sanctum/csrf-cookie");
        },
        async getUser() {
            await this.getToken();
            const data = await axios.get('/api/user');
            this.authUser = data.data;
        },
        async getAllUsers() {
            await this.getToken();
            const users = await axios.get('/api/users');
            this.userList = users.data;
        },
        async handleLogIn(data) {
            try {
                await this.getToken();
                await axios.post('/login', {
                    email: data.email,
                    password: data.password,
                });

                window.location = '/';
                this.router.push('/');

            } catch (error) {
                window.location = '/';
                this.router.push('/');
                console.log(error);
            }
        },
        async handleRegister(data) {
            try {
                await this.getToken();
                await axios.post('/register', {
                    name: data.username,
                    email: data.email,
                    password: data.password,
                    password_confirmation: data.password_confirm,
                });
                window.location = '/';
                this.router.push('/');

            } catch (error) {
                window.location = '/';
                this.router.push('/');
                console.log(error);
            }
        },
        async handleLogout() {
            await axios.post('/logout');
            this.authUser = null;
        },
        async handleEmail(data) {
            try {
                await this.getToken();
                await axios.post('api/submit-rating', {
                    stars: data.stars,
                });

            }
            catch (error) {
                console.error('There was an error sending the message', error);
            }
        },
        async handleRating(data) {
            try {
                await this.getToken();
                await axios.post('api/submit-rating', {
                    stars: data.stars,
                });

            }
            catch (error) {
                console.error('There was an error sending the message', error);
            }
        },
        async deleteUser(id) {
            try {
                await this.getToken();
                await axios.delete(`/api/users/${id}`);
                await this.getAllUsers();
            } catch (error) {
                console.error('Error deleting user:', error);
            }
        },
        async toggleAdmin(id) {
            try {
                await this.getToken();
                await axios.patch(`/api/users/${id}/toggle-admin`);
                await this.getAllUsers();
            } catch (error) {
                console.error('Error toggling admin status:', error);
            }
        },
    }
});