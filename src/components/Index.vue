<template>
  <div>
    <!--<app-head></app-head>-->
    <index-slide></index-slide>
    <index-marquee></index-marquee>
    <index-grid></index-grid>
    <!--<app-slide-second></app-slide-second>-->

  </div>
</template>

<script>
  import IndexSlide from './bases/slides'     // 轮播图
  import IndexMarquee from './bases/Marquee'  // 跑马灯
  import IndexGrid from './bases/Grid'

//  import AppSlideSecond from './bases/slides2'
//


//  import Marquee from "./bases/Marquee.vue";

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
      IndexSlide,
      IndexMarquee,
      IndexGrid
    },
    methods: {
      loadImage(){
        //console.log(1);
      }
    }
  }
</script>

<style lang="sass" scoped>

</style>
