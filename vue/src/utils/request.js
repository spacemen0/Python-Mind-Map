import axios from 'axios'
import ElementUI from "element-ui";
import router from "@/router";

const request = axios.create({
    // baseURL: process.env.NODE_EVE === 'production' ? process.env.VUE_APP_BASE_API : '/api',
    baseURL: '/api',
    timeout: 5000
})

//设置axios请求头加入token
request.interceptors.request.use(config => {
        // console.log('config', config);
        // if (config.push === '/') {
        // } else {

        if (config.url !== '/api/login') {
            if (localStorage.getItem('token')) {
                //在请求头加入token，名字要和后端接收请求头的token名字一样
                let token = localStorage.getItem('token');
                // console.log('token', token);
                config.headers.Authorization = `Bearer ${token}`;
            } else
                console.log('no token');
        }
        // }
        return config;
    },
    error => {
        return Promise.reject(error);
    });

// 响应回来token是否过期
request.interceptors.response.use(response => {
        //和后端token失效返回码约定401
        // console.log('response', response);
        if (response.status === 401) {
            // 引用elementui message提示框
            ElementUI.Message('身份已失效');
            //清除token
            localStorage.removeItem('token');
            //跳转
            router.push({name: 'login'}).then(r => {});
        } else {
            return response
        }
    },
    error => {
        return Promise.reject(error);
    })


// request 拦截器
// 可以自请求发送前对请求做一些处理
// // 比如统一加token，对请求参数统一加密
// request.interceptors.request.use(config => {
//     config.headers['Content-Type'] = 'application/json;charset=utf-8';
//
//     // config.headers['token'] = user.token;  // 设置请求头
//     //取出sessionStorage里面缓存的用户信息
//     const userJson = sessionStorage.getItem("user")
//     if (!userJson) {
//         router.push("/login")
//     }
//
//     return config
// }, error => {
//     return Promise.reject(error)
// });

// response 拦截器
// 可以在接口响应后统一处理结果
// request.interceptors.response.use(
//     response => {
//         let res = response.data;
//         // 如果是返回的文件
//         if (response.config.responseType === 'blob') {
//             return res
//         }
//         // 兼容服务端返回的字符串数据
//         if (typeof res === 'string') {
//             res = res ? JSON.parse(res) : res
//         }
//         return res;
//     },
//     error => {
//         console.log('err' + error) // for debug
//         return Promise.reject(error)
//     }
// )


export default request

