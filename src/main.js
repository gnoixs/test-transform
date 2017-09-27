// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// 解决ie浏览器不支持promise等问题
import 'babel-polyfill'

import Vue from 'vue'       // vue库
import App from './App'
import router from './router'   // 路由

// 解决手机端点击延迟300毫秒的问题
import fastclick from 'fastclick'
fastclick.attach(document.body);

// 图片懒加载
import vLazy  from 'vue-lazyload'
Vue.use(vLazy,{
  loading: require('@/assets/logo.png')
})

// 加载基础css
import '@/assets/css/base.sass'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
