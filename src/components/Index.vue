<template>
  <div>
    <index-banner></index-banner>
    <index-marquee></index-marquee>
    <index-grid></index-grid>
    <index-slide></index-slide>
    <index-footer></index-footer>
  </div>
</template>

<script>
  import IndexBanner from './bases/index/Banner'     // 轮播图
  import IndexMarquee from './bases/index/Marquee'   // 跑马灯
  import IndexGrid from './bases/index/Grid'         // 九宫格
  import IndexSlide from './bases/index/Slides'      // 优惠活动
  import IndexFooter from './bases/index/Footer'      // 优惠活动



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
      IndexBanner,
      IndexMarquee,
      IndexGrid,
      IndexSlide,
      IndexFooter
    },
    methods: {

    }
  }
</script>

<style lang="sass" scoped>

</style>
