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

<style lang="sass">
  .box
    width: 750px
    height: 70px
    background: #f5f5f5
    border: 1px solid #d3d3d3
    box-sizing: border-box
    span
      display: inline-block
      width: 70px
      height: 70px
      background: red
      float: left
      background: url(../../assets/images/index/alarm.png) no-repeat center center
      text-indent: -9999px
      &.right
        float: right
        background: url(../../assets/images/index/arrow-right.png) no-repeat center center
        background-size: 33%
    marquee
      width: 595px
      height: 70px
      display: inline-block
      font-size: 30px
      line-height: 70px
</style>
