<template>
  <div class="swiper-box1">
    <h1>优惠活动</h1>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- 轮播图 -->
    <swiper-slide class="over-width">
      <img src="../../assets/images/index/side.jpg"/>
    </swiper-slide>
    <swiper-slide class="over-width">
      <img src="../../assets/images/index/side.jpg"/>
    </swiper-slide>
    <swiper-slide class="over-width">
      <img src="../../assets/images/index/side.jpg"/>
    </swiper-slide>
    <!--分页图标 -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  require('swiper/dist/css/swiper.css')
  export default {
    name: 'slidesComp',
    data() {
      return {
        swiperOption: {
          autoplay: 3000,
          direction : 'horizontal',
          pagination : '.swiper-pagination',
        }
      }
    },components: {
      swiper,
      swiperSlide
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
    }
  }
</script>

<style lang="sass" scoped="">
  .swiper-box1
    width: 750px!important
    height: 220px
    overflow: hidden
    box-sizing: border-box
    h1
      width: 750px
      height: 70px
      line-height: 70px
      font-size: 32px
      box-sizing: border-box
      padding-left: 20px
      font-weight: bold
    .over-width
      width: 330px!important
      margin: 10px
      height: 220px!important

      img
        width: 100% 
        height: 100%


</style>
