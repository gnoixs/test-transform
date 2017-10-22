<template>
  <div>
    <app-header
      text="用户登录"
      :showSide=false>
    </app-header>
    <app-holder></app-holder>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  import AppHeader from '@/components/bases/common/Head'  //头部
  import AppHolder from '@/components/bases/common/Holder'  //占位
  export default {
    name: 'loginComp',
    data(){
      return {

      }
    },
    components: {
      AppHeader,
      AppHolder
    },
    created(){

    },
    methods: {

    }
  }
</script>

<style lang="sass" scoped>

</style>
