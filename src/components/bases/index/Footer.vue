<template>
  <div class="footer">
   <!-- <div>-->
      <img src="../../../assets/images/index/ways-to-pay.png" alt="支付方式"/>
    <!--</div>-->
    <p>COPYRLGHT © 2012阿里彩票ALCP66.COM</p>
    <p>ALL RLGHTS RESEVERD</p>
  </div>
</template>

<script>
  export default {
      name: 'footerComp',
      data(){
          return {

          }
      }
  }
</script>

<style lang="sass" scoped>
  @import "../../../assets/css/theme"
  .footer
    width: 7.5rem
    height: 2.0rem
    position: absolute
    top: 15.6rem
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
