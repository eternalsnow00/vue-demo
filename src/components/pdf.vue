<template>
  <div style="padding: 10px 0px">
    <a href="note.pdf" class="download">下载</a>
    <img src="../assets/pdf/1.jpg" width="100%">
    <img src="../assets/pdf/2.jpg" width="100%">
    <img src="../assets/pdf/3.jpg" width="100%">
    <img src="../assets/pdf/4.jpg" width="100%">
    <img src="../assets/pdf/5.jpg" width="100%">
  </div>
</template>

<script>
  export default {
    name: 'pdf'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.download{
  padding: 10px 30px;
  background: rgb(91,155,213);
  color: white;
  float: left;
  display: inline-block;
  margin-bottom: 10px;
  margin-left: 10px;
  border-radius: 5px;
}
</style>
