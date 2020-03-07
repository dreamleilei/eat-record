// index.js
// 需 npm i vue --save
import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router';
import router from './router.js';


Vue.use(VueRouter);
// import './index.scss'

// 注册路由
new Vue({
    el: '#app',
    router,
    render: h => h(App),
});
