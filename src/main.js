import { createApp } from 'vue'
import App from './App.vue'
import store from "@/common/store";
import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/pages/Home.vue";
import Login from "@/pages/Login.vue";

const routes = [
    {path:'/', component : Home},
    {path:'/login', component : Login},
]

const router = createRouter({
    history: createWebHistory(),
    routes : routes
})

createApp(App).use(store).use(router).mount('#app')
