import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from "@/views/LoginPage";
import Main from "@/views/Main";
import Layout from "@/layout/Layout";

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: '/main',
    children: [
      {
        path: '/main',
        name: 'Main',
        component: Main
      },
      // {
      //   path: '/main',
      //   name: 'main',
      //   component: Main
      // },
      // {
      //   path: '/main',
      //   name: 'main',
      //   component: Main
      // }
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
