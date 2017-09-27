<template>
  <div>
    <app-head></app-head>
    <app-slide></app-slide>
    <app-grid></app-grid>

  </div>
</template>

<script>
  import AppHead from './bases/Head'
  import AppSlide from './bases/slides'
//  import AppMarqueeWords from './bases/MarqueeWords'
  import AppGrid from './bases/Grid'
  import Marquee from "./bases/MarqueeWords.vue";

  export default {
    name: 'index',
    data(){
      return {

      }
    },
    created(){

    },
    mounted(){

    },
    components: {
      Marquee,
      AppHead,
      AppSlide,
      AppGrid
//      AppMarqueeWords
    },
    methods: {
      loadImage(){
        console.log(1);
      }
    }
  }
</script>

<style lang="sass" scoped>
  swiper
    width: 750px
    height: 300px
    background: red
    display: inline-block
</style>
