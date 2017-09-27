<template>
  <div class="head">
    <h1><img src="../../assets/images/logo.png" alt="logo"/></h1>
    <ol>
      <li @click="onLogin">登陆注册</li>
      <li class="last" @click="onTestAccount">试玩</li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'head',
    data(){
      return {
        logoImg: ''
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
  @import "../../assets/css/color.sass"
  .head
    width: 750px
    height: 90px
    background: $c-head-bg
    h1
      width: 262px
      height: 80px
      position: relative
      top: 5px
      left: 10px
    ol
      width: 288px
      height: 73px
      position: absolute
      right: 10px
      top: 8.5px
      li
        width: 177px
        height: 73px
        display: inline-block
        text-align: center
        font-size: 32px
        line-height: 73px
        color: $c-white
        background: $c-login-btn-bg
        border-radius: 15px
        &.last
          width: 90px
          margin-left: 10px
</style>
