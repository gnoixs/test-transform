<template>
  <div class="swiper-box" :style="boxStyle">
    <swiper :options="swiperOption" ref="mySwiper" v-show="ready">
      <!-- 轮播图 -->
      <swiper-slide v-for="(item,index) in swiperList" key="index" :class="{'single-slide':showSingle}">
        <img :src="item.imgSrc" @load="loadImg" :style="imgStyle"/>
        <span v-text="item.text" v-if="item.text.length > 0"></span>
      </swiper-slide>
      <!--分页图标 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  // import images
  import Banner1 from '@/assets/images/index/banner1.jpg'
  import Banner2 from '@/assets/images/index/banner2.jpg'
  import Banner3 from '@/assets/images/index/banner3.jpg'

  require('swiper/dist/css/swiper.css')

  export default {
    name: 'slidesComp',
    props: {
      swiperOption: {     // swiper configuration
        type: Object,
        default: function () {
          return {
            autoplay: 3000,
            direction: 'horizontal',
            pagination: '.swiper-pagination',
            loop: true
          }
        }
      },
      swiperList: {    // images and text
        type: Array,
        default: function () {
          return [{
            imgSrc: Banner1,
            text: ''
          }, {
            imgSrc: Banner2,
            text: ''
          }, {
            imgSrc: Banner3,
            text: ''
          }]
        }
      },
      imgStyle : {      // images style
          type: Object,
          default: function(){
              return {
              }
          }
      },
      boxStyle: {       // container style
        type: Object,
        default: function(){
            return {

            }
        }
      },
      showSingle: {     // show single slide
          type: Boolean,
          default: false
      }
    },
    data() {
      return {
        ready: false
      }
    },
    components: {
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
    methods: {
      loadImg(){
        if (this.ready) {
          return
        }
        this.ready = true;
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import "../../../assets/css/theme"
  .swiper-box
    width: 7.5rem
    height: 3rem
    overflow: hidden
    img
      width: 100%
      height: 3rem
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
    .swiper-pagination-bullet
      width: 0.15rem
      height: 0.15rem
    .single-slide
      width: 3.3rem !important
      margin: 0 0.1rem
</style>
