<template>
  <div class="grids">
    <ul>
      <li>
        <div>
          <img src="../../assets/images/index/pk10.png" alt="北京PK拾">
        </div>
        <span>北京PK拾</span>
      </li>
      <li><div><img src="../../assets/images/index/cqssc.png" alt="重庆时时彩"></div><span>重庆时时彩</span></li>
      <li><div><img src="../../assets/images/index/liuhecai.png" alt="香港六合彩"></div><span>香港六合彩</span></li>
      <li><div><img src="../../assets/images/index/pcdandan.png" alt="PC蛋蛋"></div><span>PC蛋蛋</span></li>
      <li><div><img src="../../assets/images/index/hppay10.png" alt="广东快乐十分"></div><span>广东快乐十分</span></li>
      <li><div><img src="../../assets/images/index/lucky-boat.png" alt="幸运飞艇"></div><span>幸运飞艇</span></li>
      <li><div><img src="../../assets/images/index/lucky-farm.png" alt="重庆幸运农场"></div><span>重庆幸运农场</span></li>
      <li><div><img src="../../assets/images/index/ag.png" alt="真人视讯"></div><span>真人视讯</span></li>
      <li><div><img src="../../assets/images/index/custom-service.png" alt="在线客服"></div><span>在线客服</span></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'grid',
    data(){
      return {

      }
    },
    created(){

    },
    mounted(){

    },
    methods:{

    }
  }
</script>

<style lang="sass" scoped>
  @import "../../assets/css/theme"
  .grids
    width: 7.5rem
    height: 7.5rem
    overflow: hidden
    border-left: 0.01px solid $color-marquee-border-bottom-bg
    border-right: 0.01px solid $color-marquee-border-bottom-bg
    box-sizing: border-box
    position: absolute
    top: 4.6rem
    ul
      li
        margin: 0
        width: 2.46rem
        height: 2.46rem
        display: inline-block
        border-right: 0.01px solid $color-marquee-border-bottom-bg
        border-bottom: 0.01px solid $color-marquee-border-bottom-bg
        box-sizing: border-box
        &:nth-child(3n)
          border-right: none
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
