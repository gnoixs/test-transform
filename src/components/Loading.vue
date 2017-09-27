<template>
  <div class="loading">
    <h1>
        <span>加载中</span>
        <span v-text="loadingText" class="span2"></span>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'loading',
  data () {
    return {
      loadingText : '...',
      interval : null
    }
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
    padding-top: 500px
    h1
      width: 144px
      height: 60px
      line-height: 60px
      font-size: 36px
      margin: 0 auto
      overflow: hidden
      display: inline-block
      span
        display: inline-block
        font-size: 36px
        height: 60px
        line-height: 60px
        float: left
        font-weight: bold

</style>
