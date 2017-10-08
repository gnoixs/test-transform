<template>
  <div>
    this is register
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  export default {
    name: 'registerComp',
    data(){
      return {
        header_state:{
          type: 'normal',
          title: '用户注册',
          dropDown: false
        }
      }
    },
    computed:{

    },
    created(){
      this.changeHeader(this.header_state);
    },
    methods: {
      ...mapMutations({
        changeHeader: 'CHANGE_HEADER'
      })
    }
  }
</script>

<style lang="sass" scoped>

</style>
