<template>
  <div class="menu">
    <p></p>
    <ul>
      <li><img src="../../../assets/images/icons/greet.png" alt="hello user"/><span>你好,<strong>demodemodemodemodemodemo</strong></span></li>
      <li><img src="../../../assets/images/icons/balacne.png" alt="balance"/><span>账户余额<i>￥2000</i></span></li>
      <li><img src="../../../assets/images/icons/load.png" alt="load"/><span>我要充值</span></li>
      <li><img src="../../../assets/images/icons/deposit.png" alt="deposit"/><span>我要提现</span></li>
      <li><img src="../../../assets/images/icons/order-records.png" alt="order records"/><span>下注记录</span></li>
      <li><img src="../../../assets/images/icons/open-records.png" alt="open records"/><span>开奖记录</span></li>
      <li><img src="../../../assets/images/icons/game-rule.png" alt="game rule"/><span>游戏规则</span></li>
      <li><img src="../../../assets/images/icons/profile.png" alt="profile"/><span>个人中心</span></li>
      <li><img src="../../../assets/images/icons/contact-us.png" alt="custom sevice"/><span>联系我们</span></li>
      <li><img src="../../../assets/images/icons/logout.png" alt="logout"/><span>退出</span></li>
    </ul>
  </div>
</template>

<script>
  export default {
      name: 'menuComp',
      data(){
          return {

          }
      }
  }
</script>

<style lang="sass" scoped>
  @import "../../../assets/css/theme"
  .menu
    position: fixed
    left: 0
    right: 0
    top: .9rem
    bottom: 0
    background: $color-mask-bg
    z-index: 12
    p
      width: .5rem
      height: .5rem
      position: absolute
      top: 0
      right: .22rem
      background: $color-body
      transform: rotate(45deg)
    ul
      width: 4rem
      height: auto
      background: $color-body
      position: absolute
      right: .1rem
      top: .1rem
      border-radius: 0.1rem
      li
        width: 4rem
        height: .84rem
        border-bottom: 1px solid $color-ads-span-border
        overflow: hidden
        &:last-child
          border-bottom: none
        &:first-child
          span
            color: $color-menu-money
            white-space: nowrap
            overflow: hidden
            text-overflow: ellipsis
        img
          width: .6rem
          height: .6rem
          margin: .12rem .1rem
          float: left
        span
          display: inline-block
          line-height: .84rem
          width: 3.2rem
          font-size: .28rem
          color: $color-menu
          strong
          i
            float: right
            padding-right: .3rem
            color: $color-menu-money
            font-style: normal
</style>
