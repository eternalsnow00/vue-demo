<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',

//    created:function(){
//      var self = this;
//      self.axios.post('https://phichattest.phicomm.com/seller/api.php/base/info', {
//        user_id: 1,
//      },{
//        headers: {
//          "Content-Type": "application/x-www-form-urlencoded"
//        }
//      })
//      .then(function (response) {
//        console.log(response.data);
//        self.$router.push({ name: 'meun'});
//      })
//      .catch(function (error) {
//        alert(2);
//      });
//    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
