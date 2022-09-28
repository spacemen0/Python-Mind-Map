import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from "@/views/LoginPage";
import Main from "@/views/Main";
import Layout from "@/layout/Layout";
import gragh from '@/views/gragh'
import ranking from '@/views/ranking'
import personal from '@/views/personal'
import helloWorld from "@/components/HelloWorld";

const Answer = () => import('@/views/AnswerCar');

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
                component: Main,
            },
            {
                path: '/gragh',
                name: 'gragh',
                component: gragh
            },
            {
                path: '/answer',
                name: 'answer',
                component: Answer
            },
            {
                path: '/ranking',
                name: 'ranking',
                component: ranking
            },
            {
                path: '/personal',
                name: 'personal',
                component: personal
            }

        ]
    },

]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
