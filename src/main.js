// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// 解决ie浏览器不支持promise等问题
import 'babel-polyfill'

import Vue from 'vue'       // vue库
import App from './App'
import router from './router'   // 路由
import store from './store/index'   // store

// 移动适配
//import '@/assets/scripts/adapter.js'
import Adapter from '@/assets/scripts/adapter'
Adapter(window, window.document);

// 解决手机端点击延迟300毫秒的问题
import fastclick from 'fastclick'
fastclick.attach(document.body);

// 图片懒加载
import vLazy  from 'vue-lazyload'
Vue.use(vLazy,{
  loading: require('@/assets/logo.png')
})

// Axios异步请求
import Axios from '@/assets/scripts/asyncAxios'
Vue.prototype.$http = Axios


// 加载基础css
import '@/assets/css/base.sass'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

// 路由切换检查
router.beforeEach((to, from, next) => {
  // 需要登录才可以访问的页面
  if(to.meta.requireAuth){
    //sessionStorage.getItem('user')
  }
  next();
});
