<template>
  <div class="box" :style="boxMargin">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'marqueeComp',
    data(){
      return {}
    },
    props: {
      boxMargin: {
        type: Object,
        default: function () {
          return {}
        }
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import "../../../assets/css/theme"
  .box
    width: 7.5rem
    height: .7rem
    background: $color-marquee-bg
    box-sizing: border-box
    overflow: hidden
    span
      display: inline-block
      width: .7rem
      height: .7rem
      float: left
      img
        width: .27rem
        height: .32rem
        margin: .215rem .19rem
      &.right
        float: right
        img
          width: .14rem
          height: .24rem
          margin: .28rem .23rem
    marquee
      width: 5.95rem
      height: .7rem
      display: inline-block
      font-size: .3rem
      line-height: .7rem
    h1
      font-size: .3rem
      line-height: .7rem
      padding-left: .1rem
      float: left
      font-weight: bold
      font-family: '微软雅黑'
    p
      float: right
      line-height: .7rem
      font-size: .2rem
      padding-right: .1rem
    ol
      width: 70%
      margin: 0 auto
      height: .7rem
      li
        float: left
        width: 1/3*100%
        a
          display: inline-block
          width: 100%
          height: .7rem
          line-height: .7rem
          font-size: .2rem
          text-align: center
          color: $color-down-text
          &.active
            color: $color-down-active-text

</style>
