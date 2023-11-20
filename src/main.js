import {createRouter, createWebHistory} from 'vue-router';

import Inscription from './components/Inscription.vue';
import User from './components/User.vue';
import QuestCraft from "./components/QuestCraft.vue";
import App from './App.vue';
import * as Vue from 'vue';
import './assets/main.css'

const routes = [
    {
        path:'/sign',
        component: Inscription
    },
    {
        path: '/profile',
        component: User
    },
    {
        path: '/questcraft',
        component: QuestCraft
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes,
});

const app = Vue.createApp(App);
app.use(router);
app.mount('#app');