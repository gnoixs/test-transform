<template>
  <div class="swiper-box">
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- 轮播图 -->
    <swiper-slide>
      <img src="../../assets/images/index/banner1.jpg" width="100%" height="300"/>
    </swiper-slide>
    <swiper-slide>
      <img src="../../assets/images/index/banner2.jpg"/>
    </swiper-slide>
    <swiper-slide>
      <img src="../../assets/images/index/banner3.jpg"/>
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
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          autoplay: 3000,
          direction : 'horizontal',
          pagination : '.swiper-pagination',
          loop: true
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

<style lang="sass" scoped>
  .swiper-box
    width: 750px
    height: 300px
    overflow: hidden
    .swiper-pagination-bullet
      width: 15px
      height: 15px

</style>
