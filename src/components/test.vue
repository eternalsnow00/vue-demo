<template>
  <div class="top">
    <p class="goback" v-on:click="goback">
      <i class="fa fa-angle-left" aria-hidden="true"></i>
      <span>返回</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'meeting',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top{
  background:black;
  color:white;
  text-align:left;
}
.goback{
  padding:10px;
  box-sizing:border-box;
  display:inline-block;
}
.fa-angle-left{
  font-size:25px;
}
.goback i,
.goback span{
  vertical-align:middle;
}
</style>
