<template>
  <div class="grids" :gridList="gridList">
    <ul>
      <li v-for="item in gridList" @click="onLiClick">
        <div>
          <img v-lazy="item.src" alt="item.text">
        </div>
        <span v-text="item.text"></span>
      </li>
    </ul>
  </div>
</template>

<script>
  // import images
  import PK10 from '@/assets/images/index/pk10.png'
  import Cqssc from '@/assets/images/index/cqssc.png'
  import LiuHeCai from '@/assets/images/index/liuhecai.png'
  import PcDanDan from '@/assets/images/index/pcdandan.png'
  import Hppay10 from '@/assets/images/index/hppay10.png'
  import LuckyBoat from '@/assets/images/index/lucky-boat.png'
  import LuckyFarm from '@/assets/images/index/lucky-farm.png'
  import Ag from '@/assets/images/index/ag.png'
  import CustomService from '@/assets/images/index/custom-service.png'

  export default {
    name: 'grid',
    data(){
      return {}
    },
    props: {
      gridList: {
        type: Array,
        default: function () {
          return [{
            src: PK10,
            text: '北京PK拾'
          }, {
            src: Cqssc,
            text: '重庆时时彩'
          }, {
            src: LiuHeCai,
            text: '香港六合彩'
          }, {
            src: PcDanDan,
            text: 'PC蛋蛋'
          }, {
            src: Hppay10,
            text: '广东快乐十分'
          }, {
            src: LuckyBoat,
            text: '幸运飞艇'
          }, {
            src: LuckyFarm,
            text: '重庆幸运农场'
          }, {
            src: Ag,
            text: '真人视讯'
          }, {
            src: CustomService,
            text: '在线客服'
          }]
        }
      }
    },
    methods: {
      onLiClick(){
          console.log();
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import "../../../assets/css/theme"
  .grids
    width: 7.5rem
    height: 7.4rem
    overflow: hidden
    border-left: 1px solid $color-marquee-border-bottom-bg
    border-right: 1px solid $color-marquee-border-bottom-bg
    box-sizing: border-box
    ul
      li
        margin: 0
        width: 1/3*100%
        height: 2.46rem
        display: inline-block
        border-right: 1px solid $color-marquee-border-bottom-bg
        border-bottom: 1px solid $color-marquee-border-bottom-bg
        box-sizing: border-box
        float: left
        &:nth-child(3n)
          border-right: none
        &:nth-child(-n+3)
          border-top: 1px solid $color-marquee-border-bottom-bg
        div
          width: 1.25rem
          height: 1.25rem
          margin: 0.4rem auto
          overflow: hidden
          margin-bottom: 0.1rem
          img
            width: 1.25rem
            height: 1.26rem
        span
          display: inline-block
          text-align: center
          width: 100%
          height: 0.6rem
          font-size: 0.3rem


</style>
