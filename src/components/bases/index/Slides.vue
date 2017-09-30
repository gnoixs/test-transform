<template>
  <div class="slides">
    <h1>优惠活动<span>更多>></span></h1>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide class="single-slide">
        <img src="../../../assets/images/rw2.jpg" @load="loadImg"/>
        <span>礼惠国庆情满中秋</span>
      </swiper-slide>
      <swiper-slide  class="single-slide">
        <img src="../../../assets/images/rw2.jpg" @load="loadImg"/>
        <span>礼惠国庆情满中秋</span>
      </swiper-slide>
      <swiper-slide  class="single-slide">
        <img src="../../../assets/images/rw2.jpg" @load="loadImg"/>
        <span>礼惠国庆情满中秋</span>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  require('swiper/dist/css/swiper.css')
  export default {
      name: 'slideComp',
      components: {
        swiper,
        swiperSlide
      },
      data(){
          return {
            swiperOption: {
              direction : 'horizontal',
              slidesPerView: 2,
              loop: false,
              paginationClickable: true,
              spaceBetween: 0,
              freeMode: true
            }
          }
      },
      methods: {
        loadImg(){
          //console.log(1);
        }
      }
  }
</script>

<style lang="sass" scoped>
  @import "../../../assets/css/theme"
  .slides
    width: 7.5rem
    height: 3.6rem
    position: absolute
    top: 11.97rem
    background: $color-ads-bg
    h1
      width: 7.5rem
      height: 0.7rem
      box-sizing: border-box
      padding: 0 0.1rem
      line-height: 0.7rem
      background: $color-ads-bg
      font-size: 0.28rem
      font-weight: bold
      span
        float: right
        width: auto
        height: 0.7rem
        line-height: 0.7rem
        border: none
    img
      width: 3.3rem
      height: 2.2rem
      border-top-left-radius: 0.1rem
      border-top-right-radius: 0.1rem
    span
      display: inline-block
      text-align: center
      font-size: 0.24rem
      color: $color-ads-span
      width: 3.3rem
      height: 0.35rem
      line-height: 0.35rem
      border: 1px solid $color-ads-span-border
      border-top: none
      margin-top: -0.01rem
      box-sizing: border-box
      border-bottom-left-radius: 0.05rem
      border-bottom-right-radius: 0.05rem
    .single-slide
      width: 3.3rem !important
      margin: 0 0.1rem
</style>
