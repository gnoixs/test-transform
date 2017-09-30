<template>
  <div class="swiper-box">
  <swiper :options="swiperOption" ref="mySwiper" v-show="ready">
    <!-- 轮播图 -->
    <swiper-slide>
      <img src="../../../assets/images/index/banner1.jpg" @load="loadImg"/>
    </swiper-slide>
    <swiper-slide>
      <img src="../../../assets/images/index/banner2.jpg" @load="loadImg"/>
    </swiper-slide>
    <swiper-slide>
      <img src="../../../assets/images/index/banner3.jpg" @load="loadImg"/>
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
          loop: true
        },
        ready: false
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
    },
    methods:{
      loadImg(){
        if(this.ready){
          return
        }
        this.ready = true;
      }
    }
  }
</script>

<style lang="sass" scoped>
  .swiper-box
    width: 7.5rem
    height: 3rem
    overflow: hidden
    position: absolute
    top: 0.9rem
    img
      width: 100%
      height: 3rem
    .swiper-pagination-bullet
      width: 0.15rem
      height: 0.15rem
</style>
