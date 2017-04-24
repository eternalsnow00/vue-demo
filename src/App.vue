<template>
  <div id="app">
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    beforeCreate:function(){
      var self = this;
      self.axios.get(global.URL+'/base/info',{
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      .then(function (response) {
        console.log(response.data);
        if(response.data.status== true){
          window.localStorage.userId = response.data.user_id;
        }else{
          self.$router.push({ name: 'error'});
        }
      })
      .catch(function (error) {
        self.$router.push({ name: 'error'});
      });
    }
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to{
  opacity: 0
}
</style>
