import Vue from 'vue'
import Router from 'vue-router'
// loading
const Loading = resolve => {
  import ('@/components/Loading').then(module => {
    resolve(module);
  })
}
// index
const Index = resolve => {
  import ('@/components/Index').then(module => {
    resolve(module);
  })
}
// register
const Register = resolve => {
  import ('@/components/Register').then(module => {
    resolve(module);
  })
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'load',
      component: Loading,
      meta: {
        requireAuth: false
      }
    }, {
      path: '/index',
      name: 'index',
      component: Index,
      meta: {
        requireAuth: false
      }
    }, {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        requireAuth: false
      }
    }
  ]
})
