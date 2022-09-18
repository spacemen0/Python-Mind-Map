import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Main.vue'
import LoginPage from "@/views/LoginPage";
import Main from "@/views/Main";

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/',
    name: 'main',
    component: Main
  },

]

const router = new VueRouter({
  routes
})

export default router
