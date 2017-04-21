<template>
  <div>
    111111111
  </div>
</template>

<script>
  import qs from 'qs'
  export default {
    name: 'group',
    data () {
      return {

      }
    },
    created:function(){
      var self = this;
      self.axios.post('https://phichattest.phicomm.com/index.php/API/user/groupadd',
        qs.stringify({"groupname":"新建通信组","user_id":"fx008032"}),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        alert(2);
      });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
