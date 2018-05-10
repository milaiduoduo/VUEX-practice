<template>
  <div>
    <h2>简易的计数器</h2>
    <div>
      <input type="button" value="-" @click="reduceHandle">
      <span>{{num}}</span>
      <input type="button" value="+" @click="addHandle">
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
  export default{
    computed: {
      num(){
        return this.$store.state.count;
      }
    },
    methods: {
      addHandle(){
        this.$store.commit('addIncrement');
      },
      reduceHandle(){
        this.$store.commit('decrement');
      }
    }
  }

</script>
<style lang='scss' rel="stylesheet/scss">

</style>
