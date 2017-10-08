<template>
  <div class="footer">
    <img v-lazy="WayToPay" alt="支付方式"/>
    <p>COPYRIGHT © 2012-2017</p>
    <p>ALL RIGHTS RESERVED</p>
  </div>
</template>

<script>
  import WayToPay from '@/assets/images/index/ways-to-pay.png';
  export default {
      name: 'footerComp',
      data(){
          return {
            WayToPay: WayToPay
          }
      }
  }
</script>

<style lang="sass" scoped>
  @import "../../../assets/css/theme"
  .footer
    width: 7.5rem
    height: 2.0rem
    background: $color-footer-bg
    img
      width: 6.65rem
      height: 0.45rem
      margin-left: 0.42rem
      margin-top: 0.44rem
      margin-bottom: 0.1rem
    p
      text-align: center
      font-size: 0.24rem
      color: $color-footer-p
      line-height: 0.45rem


</style>
