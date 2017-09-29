<template>
  <div class="head">
    <h1>
      <img src="../../assets/images/logo.png" alt="logo"/>
      <!--<img v-lazy="logoImg" alt="logo"/>-->
    </h1>
    <ol>
      <li @click="onLogin">
        登陆注册
      </li>
      <li class="last"
          @click="onTestAccount">
            试玩
      </li>
    </ol>
  </div>
</template>
<script>
  export default {
    name: 'head',
    data(){
      return {
        logoImg: '@/assets/images/logo.png'
      }
    },
    created(){

    },
    mounted(){

    },
    methods: {
      //登陆界面
      onLogin(){
        this.$router.push('/login');
      },
      //试玩账号
      onTestAccount(){
        alert('test')
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import "../../assets/css/theme"
  .head
    width: 7.5rem
    height: 0.9rem
    background: $color-head-bg
    position: fixed
    h1
      width: 2.62rem
      height: 0.8rem
      position: relative
      top: 0.05rem
      left: 0.1rem
      img
        width: 100%
    ol
      max-width: 4.6rem
      height: 0.73rem
      position: absolute
      right: 0.1rem
      top: 0.085rem
      li
        max-width: 2.6rem
        padding: 0 0.2rem
        height: 0.73rem
        display: inline-block
        text-align: center
        font-size: 0.32rem
        line-height: 0.73rem
        color: $color-body
        background: $color-head-btn-bg
        border-radius: 0.15rem
        overflow: hidden
        &.last
          width: 0.9rem
          margin-left: 0.1rem
          float: right
</style>
