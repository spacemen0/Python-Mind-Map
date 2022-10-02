import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import request from "@/utils/request";

Vue.config.productionTip = false
Vue.use(ElementUI);
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
}).$mount('#app')

//设置axios请求头加入token
request.interceptors.request.use(config => {
        if (config.push === '/') {
        } else {
            if (localStorage.getItem('token')) {
                //在请求头加入token，名字要和后端接收请求头的token名字一样
                config.headers.token=localStorage.getItem('token');
            }
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    });

//响应回来token是否过期
request.interceptors.response.use(response => {
        //和后端token失效返回码约定403
        if (response.data.code === 403) {
            // 引用elementui message提示框
            ElementUI.Message({
                message: '身份已失效',
                type: 'err'
            });
            //清除token
            localStorage.removeItem('token');
            //跳转
            router.push({name: 'login'});
        } else {
            return response
        }
    },
    error => {
        return Promise.reject(error);
    })

