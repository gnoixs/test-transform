<template>
  <div id="app" ref="app">
    <!--<keep-alive>-->
      <router-view></router-view>
    <!--</keep-alive>-->
  </div>
</template>

<script>
export default {
  name: 'appComp'
}
</script>

<style lang="sass" scoped>
  #app
    box-sizing: border-box
    position: relative
</style>
