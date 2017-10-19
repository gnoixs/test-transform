<template>
  <div class="head" v-if="headerState.type != 'loading'">
    <!-- 首页的头部样式 -->
    <div class="indexDiv" v-if="headerState.type == 'index'">
      <h1>
        <img v-lazy="imagesList.Logo" alt="logo"/>
      </h1>
      <ol :class="{'margin72': init.showAvator}">
        <li @click="onLogin">
          <img v-lazy="imagesList.User" alt="user" v-if="init.showAvator"/>{{init.loginText}}
        </li>
        <li class="last"
            @click="onTestAccount">
          {{init.demoText}}
        </li>
      </ol>
    </div>
    <!-- 普通 title-->
    <div class="normalDiv" v-if="headerState.type == 'normal'">
      <span @click.stop="onGoBack">
        <img v-lazy="imagesList.Back" alt="back"/>
      </span>
      <h1>{{ headerState.title }}
        <img v-lazy="imagesList.DropDown"
             alt="dropdown"
             @click.stop="onGameList"
              v-if="headerState.dropDown"/>
      </h1>
    </div>
    <!-- 右侧弹出菜单icon -->
    <ul v-if="(headerState.type == 'normal' && headerState.dropDown) || headerState.type == 'index'">
      <li class="menu"
          @click="toggleMenu"
          v-if="init.showAvator">
        <img v-lazy="imagesList.SideMenu" alt="menu">
      </li>
    </ul>
  </div>
</template>
<script>
  import getDemo from '@/api/demo'
  import { getStorage, setStorage } from '@/assets/scripts/storage'
  import { mapGetters,mapActions,mapMutations } from 'vuex'

  import Logo from '@/assets/images/logo.png'
  import User from '@/assets/images/icons/user.png'
  import SideMenu from '@/assets/images/icons/side-menu.png'
  import DropDown from '@/assets/images/icons/dropdown.png'
  import Back from '@/assets/images/icons/back.png'

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
          SideMenu: SideMenu,
          DropDown: DropDown,
          Back: Back
        }
      }
    },
    computed:{
      ...mapGetters(['headerState'])
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
      ...mapMutations({
        changeTitle: 'CHANGE_TITLE'
      }),
      //登陆界面
      onLogin() {
        if (this.init.state == 'demoOut') {   // 登录按钮
          this.$router.push('/login');
        } else {    // 用户名显示按钮
          // 变成显示用户名的框
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
      },
      // 后退
      onGoBack(){
        this.$router.go(-1);
      },
      // 显示游戏选择菜单
      onGameList(){
        console.log('show game list...')
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
        right: .1rem
        top: .085rem
        &.margin72
          margin-right: .72rem
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
            width: .39rem
            height: .45rem
            margin: .14rem .05rem
            float: left
          &.last
            width: .9rem
            margin-left: .1rem
            float: right
    .normalDiv
      span
        display: inline-block
        width: .9rem
        height: .9rem
        position: absolute
        left: 0
        top: 0
        z-index: 2
        img
          width: .22rem
          height: .37rem
          margin: .265rem .34rem
      h1
        width: 7.5rem
        height: .9rem
        line-height: .9rem
        position: absolute
        top: 0
        left: 0
        text-align: center
        font-size: .33rem
        color: $color-body
        font-weight: bold
        img
          display: inline-block
          width: .4rem
          height: .4rem
          position: relative
          top: .09rem
          left: .1rem
          border-radius: .05rem
    ul
      .menu
        width: .73rem
        height: .73rem
        float: right
        padding: 0
        background: none
        margin-left: .1rem
        position: absolute
        top: .1rem
        right: .05rem
        z-index: 2
        img
          width: .43rem
          height: .35rem
          margin: .18rem 0.15rem

</style>
