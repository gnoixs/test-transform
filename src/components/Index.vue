<template>
  <div>
    <app-head></app-head>
    <app-slide></app-slide>
    <app-marquee-words></app-marquee-words>
    <app-grid></app-grid>
    <app-slide-second></app-slide-second>

  </div>
</template>

<script>
  import AppHead from './bases/Head'
  import AppSlide from './bases/slides'

  import AppSlideSecond from './bases/slides2'

  import AppMarqueeWords from './bases/MarqueeWords'
  import AppGrid from './bases/Grid'
  import Marquee from "./bases/MarqueeWords.vue";

  export default {
    name: 'IndexComp',
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
      AppGrid,
      AppMarqueeWords,
      AppSlideSecond
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
