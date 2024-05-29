import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        authUser: null,
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
                await axios.post('api/send-email', {
                    name: data.name,
                    email: data.email,
                    message: data.message,
                });

            }
            catch (error) {
                console.error('There was an error sending the message', error);
            }
        },
    }
});