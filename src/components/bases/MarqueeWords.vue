<template>
  <div class="box">
    <span></span>
    <marquee scrollamount="3">{{marqueeText}}</marquee>
    <span></span>
  </div>
</template>

<script>
  export default {
    name: 'marquee',
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
    background: #f7f7f7
    span
      display: inline-block
      width: 70px
      height: 70px
      background: red
    p
      width: 595px
      height: 70px
      display: inline-block
      font-size: 30px
</style>
