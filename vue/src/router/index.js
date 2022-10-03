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
    {
        path: '/answer',
        name: 'answer',
        component: Answer
    }

]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
//to到哪儿 from从哪儿离开 next跳转 为空就是放行
    if (to.path === '/login') {
        //如果跳转为登录，就放行
        next();
    } else {
        //取出localStorage判断
        let token = localStorage.getItem('token');
        if (token == null || token === '') {
            console.log('请先登录')
            next({name: 'login'});
        } else {
            next();
        }
    }});


export default router
