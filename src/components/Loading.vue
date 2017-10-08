<template>
  <div class="loading">
    <h1 ref="h1">
        <span>加载中</span>
        <span v-text="loadingText" class="span2"></span>
    </h1>
  </div>
</template>

<script>
  import { mapGetters,mapMutations } from 'vuex'
export default {
  name: 'loadComp',
  data () {
    return {
      loadingText : '...',
      interval : null,
      header_state:{
        type: 'loading',
        title: '',
        dropDown: false
      }
    }
  },
  created(){
    this.changeHeader(this.header_state)
  },
  computed:{
    ...mapGetters(['headerState'])
  },
  methods:{
    ...mapMutations({
      changeHeader: 'CHANGE_HEADER'
    })
  },
  mounted(){
    // 三个点样式
    this.interval = setInterval(()=>{
      switch (this.loadingText.length){
        case 1:
          this.loadingText= '..';
          break;
        case 2:
          this.loadingText = '...';
          break;
        case 3:
          this.loadingText = '';
          break;
        default:
          this.loadingText = '.';
      }
    },500);
    //模拟1.5秒后跳到index
    setTimeout(()=>{
      this.$router.push('/index');
    },1500);
  },
  destroyed(){
    clearInterval(this.interval);
  }
}
</script>

<style scoped lang="sass">
  .loading
    width: 100%
    text-align: center
    box-sizing: border-box
    padding-top: 5rem
    h1
      width: 1.44rem
      height: 0.60rem
      line-height: 0.60rem
      font-size: 0.36rem
      margin: 0 auto
      overflow: hidden
      display: inline-block
      span
        display: inline-block
        font-size: 0.36rem
        height: 0.6rem
        line-height: 0.6rem
        float: left
        font-weight: bold

</style>
