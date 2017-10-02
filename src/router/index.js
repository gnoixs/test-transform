import Vue from 'vue'
import Router from 'vue-router'
import Loading from '@/components/Loading'

import Index from '@/components/Index'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'load',
      component: Loading,
      meta:{
        requireAuth: false
      }
    }, {
      path: '/index',
      name: 'index',
      component: Index,
      meta: {
        requireAuth:false
      }
    }
  ]
})
