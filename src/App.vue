<template>
  <div id="app" ref="app">
    <app-header></app-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import AppHeader from '@/components/bases/Head'
export default {
  name: 'appComp',
  data(){
    return {

    }
  },
  components:{
    AppHeader
  },
  created(){

  },
  mounted(){

  }
}
</script>

<style lang="sass" scoped>

</style>
