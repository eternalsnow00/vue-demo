<template>
  <div>
    <carousel :autoplay="true" :perPage="1">
      <slide>
        <img src="../assets/banner.jpg" width="100%"/>
      </slide>
    </carousel>
    <div class="meun">
      <div class="meunlist">
        <router-link to="/create" class="tab"><img src="../assets/icon1.png" width="40px"/>新建会议</router-link>
      </div>
      <div class="meunlist2">
        <router-link to="/calendar" class="tab"><img src="../assets/icon2.png" width="40px"/>日历</router-link>
      </div>
      <div class="meunlist2">
        <router-link to="/create" class="tab"><img src="../assets/icon3.png" width="40px"/>通讯录</router-link>
      </div>
      <div class="meunlist">
        <router-link to="/create" class="tab"><img src="../assets/icon4.png" width="40px"/>用户手册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'meun',
  data () {
    return {

    }
  },
  created:function(){
//    var self = this;
//    self.axios.get('https://phichattest.phicomm.com/index.php/API/base/info',{
//      headers: {
//        "Content-Type": "application/x-www-form-urlencoded"
//      }
//    })
//    .then(function (response) {
//      console.log(response.data);
//    })
//    .catch(function (error) {
//      alert(2);
//    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .meun{
    overflow: hidden;
    padding: 15px;
    box-sizing: border-box;
  }
  .meun>div{
    font-size: 18px;
    float: left;
    width: 50%;
  }
  .tab{
    color:white;
    display: block;
    padding: 40px 0px;
  }
  .meun img{
    display: block;
    margin: auto;
  }
  .meunlist{
    background: rgb(91,155,213);
  }
  .meunlist2{
    background: rgb(242,133,133);
  }

</style>
