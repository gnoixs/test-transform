<template>
  <div class="box">
    <span>alarm</span>
    <marquee scrollamount="3">{{marqueeText}}</marquee>
    <span class="right">right</span>
  </div>
</template>

<script>
  export default {
    name: 'marqueeComp',
    data(){
      return {

      }
    },
    props:{
      marqueeText:{
        type: String,
        default: '请输入跑马灯文字...'
      }
    },
    created(){

    },
    mounted(){
      //this.isReady =  true
    },
    methods:{

    }
  }
</script>

<style lang="sass" scoped>
  @import "../../../assets/css/theme"
  .box
    width: 7.5rem
    height: 0.7rem
    background: $color-marquee-bg
    /*border: 0.01rem solid $color-marquee-border-bottom-bg*/
    box-sizing: border-box
    position: absolute
    top: 3.9rem
    span
      display: inline-block
      width: 0.7rem
      height: 0.7rem
      float: left
      background: url(../../../assets/images/index/alarm.png) no-repeat center center
      text-indent: -999rem
      background-size: 50%
      &.right
        float: right
        background: url(../../../assets/images/index/arrow-right.png) no-repeat center center
        background-size: 33%
    marquee
      width: 5.95rem
      height: 0.7rem
      display: inline-block
      font-size: 0.3rem
      line-height: 0.7rem
</style>
