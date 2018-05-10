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
        // 提交mutation的三种写法
//        this.$store.commit('addIncrement', 5);
//        this.$store.commit('addIncrement', {num: 5});
//        this.$store.commit({
//          type: 'addIncrement',
//          num: 5
//        });
        //当有异步操作的时候，不能直接使用mutation.需要定义一个action，在action中触发mutation
        this.$store.dispatch('addAction');
      },
      reduceHandle(){
        this.$store.commit({
          type: 'decrement',
          num: 5,
          num2: 10
        });
      }
    }
  }

</script>
<style lang='scss' rel="stylesheet/scss">

</style>
