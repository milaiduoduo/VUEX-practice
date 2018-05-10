<template>
  <div>
    <h2>使用辅助函数mapState,mapGetter,mapMutations,mapActions做的简易的计数器</h2>
    <div>
      <input type="button" value="-" @click="reduceHandle({num2:2})">
      <span>{{num}}</span>
      <input type="button" value="+" @click="addHandle({num:6})">
      <h3>超过120我就停下来了：{{num2}}</h3>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
  import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';
  export default{
    computed: {
      ...mapState({num: 'count'}),
      ...mapGetters({num2: 'filterCount'})
    },
    methods: {
      ...mapActions({addHandle: 'addAction'}),
      ...mapMutations({reduceHandle: 'decrement'})
    }
  }
</script>
<style lang='scss' rel="stylesheet/scss">

</style>
