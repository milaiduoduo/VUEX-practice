<template>
  <div>
    <h2>简易的计数器</h2>
    <div>
      <input type="button" value="-">
      <span>{{num}}</span>
      <input type="button" value="+">
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
  export default{
    data(){
      return {num: 0}
    }
  }

</script>
<style lang='scss' rel="stylesheet/scss">

</style>
