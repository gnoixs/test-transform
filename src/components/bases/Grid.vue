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
  .grids
    width: 750px
    height: 750px
    overflow: hidden
    border-left: 1px solid #d3d3d3
    border-right: 1px solid #d3d3d3
    box-sizing: border-box
    ul
      li
        margin: 0
        width: 246px
        height: 246px
        display: inline-block
        border-right: 1px solid #d3d3d3
        border-bottom: 1px solid #d3d3d3
        box-sizing: border-box
        &:nth-child(3n)
          border-right: none
        div
          width: 125px
          height: 125px
          margin: 40px auto
          overflow: hidden
          margin-bottom: 10px
        span
          display: inline-block
          text-align: center
          width: 100%
          height: 60px
          font-size: 30px


</style>
