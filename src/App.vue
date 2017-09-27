<template>
  <div id="app" ref="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      _zoom: 0
    }
  },
  created(){
    this._zoom = window.innerWidth / 750;
  },
  mounted(){
    let _app = this.$refs.app;
    _app.style.transform = 'scale('+this._zoom + ')';
    _app.style.transformOrigin = '0 0 0';
    _app.style.webkitTransform = 'scale('+this._zoom + ')';
    _app.style.webkitTransformOrigin = '0 0 0';
    _app.style.oTransform = 'scale('+this._zoom + ')';
    _app.style.oTransformOrigin = '0 0 0';
    _app.style.msTransform = 'scale('+this._zoom + ')';
    _app.style.msTransformOrigin = '0 0 0';
    _app.style.mozTransform = 'scale('+this._zoom + ')';
    _app.style.mozTransformOrigin = '0 0 0';
  }
}
</script>

<style lang="sass">
#app
  position: relative
  width: 750px
  top: 0px
  left: 0px
</style>
