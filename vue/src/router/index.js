import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from "@/views/LoginPage";
import Main from "@/views/Main";
import Layout from "@/layout/Layout";
import gragh from '@/views/gragh'
import ranking from '@/views/ranking'
import personal from '@/views/personal'
import store from '@/store/index';

import request from "@/utils/request";
import ElementUI from "element-ui";


const Answer = () => import('@/views/AnswerCar');
const studentInfoList = () => import('@/components/StuInfoList');

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
            },
            {
                path: '/studentInfoList',
                name: 'StuInfoList',
                component: studentInfoList
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
    if (to.name === 'login') {
        //如果跳转为登录，就放行
        next();
    } else {
        //取出localStorage判断
        let token = localStorage.getItem('token');
        if (token === null || token === '') {
            console.log('请先登录')
            next({name: 'login'});
        } else {
            // 获取用户信息
            request.get('/user/getuser').then(res => {
                if (res.status === 200) {
                    // 将用户信息存储到store里
                    let user = res.data.data.user;
                    // console.log('user', user);
                    store.state.userInfo.userID = user.StudentID;
                    store.state.userInfo.name = user.StudentName;
                    store.state.userInfo.isAdmin = user.Admin;

                    // 若访问的是StuInfoList，则判断是否是管理员
                    if (to.name !== 'StuInfoList' || user.Admin === true)
                        next();
                }
            }).catch(error => {
                console.log('error', error);
                ElementUI.Message('获取用户信息错误');
                next({name: 'login'});
            });

        }
    }
});

export default router
