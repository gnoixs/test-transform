<template>
  <div class="head">
    <!-- 普通 title-->
    <div class="normalDiv">
      <span @click.stop="onGoBack">
        <img v-lazy="imagesList.Back"
             alt="back"/>
      </span>
      <h1>{{ text }}
        <img v-lazy="imagesList.DropDown"
             alt="dropdown"
             @click.stop="onGameList"
             v-if="showSide">
      </h1>
    </div>
    <!-- 右侧弹出菜单icon -->
    <ul v-if="showSide">
      <li class="menu"
          @click="toggleMenu">
        <img v-lazy="imagesList.SideMenu"
             alt="menu">
      </li>
    </ul>
  </div>
</template>
<script>
  import getDemo from '@/api/demo'
  import { getStorage, setStorage } from '@/assets/scripts/storage'
  import { mapActions } from 'vuex'

  import SideMenu from '@/assets/images/icons/side-menu.png'
  import DropDown from '@/assets/images/icons/dropdown.png'
  import Back from '@/assets/images/icons/back.png'

  export default {
    name: 'headComp',
    data() {
      return {
        imagesList: {
          SideMenu: SideMenu,
          DropDown: DropDown,
          Back: Back
        }
      }
    },
    props:{
      text: {
        type: String,
        default: '标题'
      },
      showSide: {
          type: Boolean,
          default: false
      }
    },
    created() {

    },
    methods: {
      ...mapActions({
        toggleMenu: 'toggleMenu'
      }),
      // 后退
      onGoBack(){
        this.$router.go(-1);
      },
      // 显示游戏选择菜单
      onGameList(){
        console.log('show game list...')
      }

    }
  }
</script>

<style lang="sass" scoped>
  @import "../../../assets/css/theme"
  .head
    width: 7.5rem
    height: .9rem
    background: $color-head-bg
    position: fixed
    z-index: 10
    .normalDiv
      span
        display: inline-block
        width: .9rem
        height: .9rem
        position: absolute
        left: 0
        top: 0
        z-index: 2
        img
          width: .22rem
          height: .37rem
          margin: .265rem .34rem
      h1
        width: 7.5rem
        height: .9rem
        line-height: .9rem
        position: absolute
        top: 0
        left: 0
        text-align: center
        font-size: .33rem
        color: $color-body
        font-weight: bold
        img
          display: inline-block
          width: .4rem
          height: .4rem
          position: relative
          top: .09rem
          left: .1rem
          border-radius: .05rem
    ul
      .menu
        width: .73rem
        height: .73rem
        float: right
        padding: 0
        background: none
        margin-left: .1rem
        position: absolute
        top: .1rem
        right: .05rem
        z-index: 2
        img
          width: .43rem
          height: .35rem
          margin: .18rem 0.15rem

</style>
