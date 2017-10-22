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
  import ('@/components/pages/auth/Register').then(module => {
    resolve(module);
  })
}
// login
const Login = resolve => {
  import ('@/components/pages/auth/Login').then(module => {
    resolve(module);
  })
}
// profile
const Profile = resolve => {
  import ('@/components/pages/profile/Profile').then(module => {
    resolve(module);
  })
}
// gridlist
const GridList = resolve => {
  import ('@/components/pages/profile/GridList').then(module => {
    resolve(module);
  })
}
// personalInfo
const Info = resolve => {
  import ('@/components/pages/profile/PersonalInfo').then(module => {
    resolve(module);
  })
}
// change password router
const ChangePwd = resolve => {
  import ('@/components/pages/profile/ChangePwd').then(module => {
    resolve(module);
  })
}
// change password list
const ChangePwdList = resolve => {
  import ('@/components/pages/profile/ChangePwdList').then(module => {
    resolve(module);
  })
}
// change login password
const ChangeLoginPwd = resolve => {
  import ('@/components/pages/profile/ChangeLoginPwd').then(module => {
    resolve(module);
  })
}
// change pay password
const ChangePayPwd = resolve => {
  import ('@/components/pages/profile/ChangePayPwd').then(module => {
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
    }, {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requireAuth: false
      }
    }, {
      path: '/profile',
      component: Profile,
      meta: {
        requireAuth: true
      },
      children: [{
        path: '',
        name: 'gridlist',
        component: GridList,
        meta: {
          requireAuth: true
        }
      },{
        path: 'info',
        name: 'info',
        component: Info,
        meta: {
          requireAuth: true
        }
      },{
        path: 'changepwd',
        component: ChangePwd,
        meta: {
          requireAuth: true
        },
        children: [{
          path: '',
          name: 'changepwdlist',
          component: ChangePwdList,
          meta: {
            requireAuth: true
          }
        },{
          path: 'loginpwd',
          name: 'loginpwd',
          component: ChangeLoginPwd,
          meta: {
            requireAuth: true
          }
        },{
            path: 'paypwd',
            name: 'paypwd',
            component: ChangePayPwd,
            meta: {
              requireAuth: true
            }
          }]
      }]
    }
  ]
})
