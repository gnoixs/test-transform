<template>
  <div class="index">
<!-- 顶部轮播图 -->
    <index-banner></index-banner>
<!-- 跑马灯单行 -->
    <index-one-line>
      <span><img v-lazy="imagesList.Alarm"/></span>
      <marquee scrollamount="3">{{ marqueeText }}</marquee>
      <span class="right"><img v-lazy="imagesList.ArrowRight"/></span>
    </index-one-line>
<!-- 九宫格 -->
    <index-grid></index-grid>
<!-- 优惠活动单行 -->
    <index-one-line>
      <h1>优惠活动</h1>
      <p>更多>></p>
    </index-one-line>
<!-- 底部轮播图 -->
    <index-banner
      :swiperOption="swiperOption"
      :swiperList="swiperList"
      :imgStyle="imgStyle"
      :boxStyle="boxStyle"
      :showSingle="showSingle">
    </index-banner>
<!-- 底部单行-->
    <index-one-line :boxMargin="boxMargin">
      <ol>
        <li><a href="#" title="app下载">APP下载</a></li>
        <li><a href="#" title="触屏版" class="active">触屏版</a></li>
        <li><a href="#" title="电脑版">电脑版</a></li>
      </ol>
    </index-one-line>
<!-- 页脚 -->
    <index-footer></index-footer>
<!-- 右侧菜单选项栏-->
    <app-menu></app-menu>
  </div>
</template>

<script>
  import IndexBanner from './bases/index/Banner'     // 轮播图
  import IndexOneLine from './bases/index/OneLine'   // 跑马灯
  import IndexGrid from './bases/index/Grid'         // 九宫格
  import IndexFooter from './bases/index/Footer'      // 底部
  import AppMenu from './bases/common/Menu'          // 右侧导航栏

  import { mapGetters } from 'vuex'

  import AdBaner from '@/assets/images/rw2.jpg';
  import Alarm from '@/assets/images/icons/alarm.png'
  import ArrowRight from '@/assets/images/icons/arrow-right.png'

  export default {
    name: 'IndexComp',
    data(){
      return {
          // 底部swiper 参数配置
        swiperOption: {
          direction : 'horizontal',
          slidesPerView: 2,
          loop: false,
          paginationClickable: true,
          spaceBetween: 0,
          freeMode: true
        },
        // 底部swiper的图片及文案
        swiperList: [{
          imgSrc: AdBaner,
          text: '礼惠国庆情满中秋'
        }, {
          imgSrc: AdBaner,
          text: '礼惠国庆情满中秋'
        }, {
          imgSrc: AdBaner,
          text: '礼惠国庆情满中秋'
        }],
        // 底部swiper的图片样式
        imgStyle: {
          'width': '3.3rem',
          'height': '2.2rem',
          'border-top-left-radius': '0.1rem',
          'border-top-right-radius': '0.1rem',
        },
        // 底部swiper的容器样式
        boxStyle: {
          'height': '2.56rem',
          'top': '12.85rem'
        },
        // 每个swiper的个体样式是否显示
        showSingle:true,
        // 图片文件
        imagesList:{
          Alarm: Alarm,
          ArrowRight: ArrowRight
        },
        // 底部marginTop的值
        boxMargin: {
            'margin-top': '0.1rem'
        },
        marqueeText: '尊敬的会员：您好，为了回馈广大会员长期以来对阿理彩票的支持，平台已上调双面盘赔率为1.998，上调定位胆赔率为9.98。其他赔率均保持不变。请各位新老会员相互转达积极参与体验，谢谢尊敬的会员:您好,由于近期部分QQ及QQ群被停用，给您带来不便，敬请谅解。为方便更好的为您提供服务，请添加客服QQ:513339990或QQ群:551669630，方便您随时咨询。若有变动会及时更新公告，敬请关注。尊敬的会员：您好，对于我司近期域名被劫持给您造成的困扰，我们深感抱歉。此问题现已解决，如发现打开平台网址后，跳转到非阿理彩票官网页面，请使用https://alcp88.com或https://alcp99.com等https防劫持线路进行游戏。给您带来不便，敬请谅解。尊敬的会员：为防止玩家恶意刷水平台禁止同一IP同期同种玩法累计投注超过总注单70%，两面盘不可同时投注大小/单双/龙虎。冠亚和最高只能够下注12个和值. 若发现违规且警告无效游戏平台将给予封号，并没收账户资金。感谢您的理解与配合。如有疑问请咨询客服！'
      }
    },
    created(){

    },
    mounted(){

    },
    components: {
      IndexBanner,
      IndexOneLine,
      IndexGrid,
      IndexFooter,
      AppMenu
    },
    methods: {

    }
  }
</script>

<style lang="sass" scoped>
.index
  position: relative
  padding-top: .9rem
  box-sizing: border-box
</style>
