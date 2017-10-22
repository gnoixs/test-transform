<template>
  <div class="head">
    <!-- 首页的头部样式 -->
    <div class="indexDiv">
      <h1>
        <img v-lazy="imagesList.Logo" alt="logo"/>
      </h1>
      <ol :class="{'right2': init.state == 'demoOut'}">
        <li @click="onLogin">
          <img v-lazy="imagesList.User"
               alt="user"
               v-if="init.showAvator"/>
          {{init.loginText}}
        </li>
        <li class="menu"
            @click="toggleMenu"
            v-if="init.showAvator">
          <img v-lazy="imagesList.SideMenu"
               alt="menu">
        </li>
        <li @click="onTestAccount">
          {{init.demoText}}
        </li>
      </ol>
    </div>
  </div>
</template>
<script>
  import getDemo from '@/api/demo'
  import { getStorage, setStorage } from '@/assets/scripts/storage'
  import { mapGetters,mapActions,mapMutations } from 'vuex'

  import Logo from '@/assets/images/logo.png'
  import User from '@/assets/images/icons/user.png'
  import SideMenu from '@/assets/images/icons/side-menu.png'

  export default {
    name: 'headComp',
    data() {
      return {
        init: {
          state: 'demoOut',          // 试玩登录前
          showAvator: false,
          loginText: '登录注册',
          demoText: '试玩'
        },
        imagesList: {
          Logo: Logo,
          User: User,
          SideMenu: SideMenu
        }
      }
    },
    created() {
      let user = getStorage(sessionStorage, 'userInfo');
      if (user) {
        this.init = {
          state: 'demoIn',
          showAvator: true,
          loginText: user.username,
          demoText: '注册'
        }
      }
    },
    methods: {
      ...mapActions({
        toggleMenu: 'toggleMenu'
      }),
      //登陆界面
      onLogin() {
        if (this.init.state == 'demoOut') {   // 登录按钮
          this.$router.push('/login');
        } else {    // 用户名显示按钮
          // 变成显示用户名的框
          this.$router.push('/profile')
        }
      },
      //试玩账号
      onTestAccount() {
        if (this.init.state == 'demoOut') {   // 试玩按钮
          getDemo().then((res) => {
            // 存储对象
            let userInfo = {
              username: res.data.username,
              money: res.data.money,
              oid: res.data.oid
            }
            // 重写显示对象
            this.init = {
              state: 'demoIn',       // 试玩登录后
              showAvator: true,
              loginText: userInfo.username,   // 登录按钮变成现实用户名
              demoText: '注册'                 // 试玩按钮变成注册按钮
            }
            // 存在sessionStorage里
            setStorage(sessionStorage, 'userInfo', userInfo);
          });
        } else {      //注册按钮
          this.$router.push('/register')
        }
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import "../../../assets/css/theme"
  .head
    width: 7.5rem
    height: .9rem
    background: $color-head-bg
    position: fixed
    z-index: 10
    .indexDiv
      h1
        width: 2.62rem
        height: .8rem
        position: relative
        top: .05rem
        left: .1rem
        overflow: hidden
        img
          width: 100%
          height: 100%
      ol
        max-width: 4.6rem
        height: .73rem
        position: absolute
        right: 0
        top: .085rem
        &.right2
          right: .2rem
        li
          max-width: 2.6rem
          padding: 0 .1rem
          height: .73rem
          display: inline-block
          text-align: center
          font-size: .32rem
          line-height: .73rem
          color: $color-body
          background: $color-head-btn-bg
          border-radius: .15rem
          overflow: hidden
          img
            width: .3rem
            height: .3rem
            margin: .21rem .05rem
            float: left
          &.menu
            float: right
            background: none
            border: none
            img
              width: .43rem
              height: .35rem
              margin: .18rem 0.15rem
</style>
