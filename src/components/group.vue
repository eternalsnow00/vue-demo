<template>
  <div style="position: relative">
    <div class="group container_left">
      <p class="grouptitle">我的群组<span v-on:click="newGourp" class="new">新建群组</span></p>
      <ul>
        <li v-for="(item, index) in group" >
          <p class="groupname" >{{item.group_name}}<i class="fa fa-pencil-square-o" aria-hidden="true" v-on:click="editgroup(index)"></i><i class="fa fa fa-times delete" aria-hidden="true" v-on:click="deletegroup(index)"></i></p>
        </li>
      </ul>
    </div>

    <!--修改-->
    <div class="container_right" v-bind:class="[isActive ? 'classA' : 'classB']">
      <div class="top" v-bind:class="[isActive ? 'classA' : 'classB']">
        <p class="goback" v-on:click="goback">
          <i class="fa fa-angle-left" aria-hidden="true"></i>
          <span>返回</span>
        </p>
      </div>
      <div class="editgroup">
        <input tpye="text" class="meetingName" placeholder="群组名称" v-model="meetingName">
        <div style="position: relative;margin-top: 20px;">
          <input class="search" placeholder="搜索人名" id="search" v-on:input="change"/>
          <i class="fa fa-search" aria-hidden="true"></i>
          <ul class="searchResult" v-if="isShow">
            <li v-for="(item, index) in searchResult" v-on:click="add(index)">
              {{ item.user_name }}-{{ item.user_id }}
              <!--<i class="fa fa-check" aria-hidden="true"></i>-->
            </li>
          </ul>
        </div>
        <div class="selectUser">
          <div v-if="selectUsers.length==0">请添加组员</div>
          <div class="selectUserChild" v-if="selectUsers.length>0" v-on:click="deleteUser(index)" v-for="(item, index) in selectUsers">
            {{ item.user_name }}<i class="fa fa-times deleteuser" aria-hidden="true"></i>
          </div>
        </div>
        <button class="form_submit form_submit2" v-on:click="sure" v-if="isNew">新增</button>
        <button class="form_submit form_submit2" v-on:click="sure" v-if="!isNew">修改</button>
      </div>
    </div>
  </div>
</template>

<script>
  import qs from 'qs'
  export default {
    name: 'group',
    data () {
      return {
        group:[],
        isActive:false,
        meetingName:'',
        selectgroupid:null,
        selectUsers:[],
        searchResult:[],
        isShow:false,
        isNew:true
      }
    },
    created:function(){
      var self = this;
      self.axios.post(global.URL+'/user/groups',qs.stringify({
        user_id:window.localStorage.userId
      }),{
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      .then(function (response) {
        self.group = response.data.data.groups;
        console.log(self.group)
      })
      .catch(function (error) {
        alert("数据获取失败，请退出重试");
      });
    },
    methods:{
      change:function () {
        var keyword = document.getElementById("search").value;
        var self = this;
        self.axios.post(global.URL+'/user/search',qs.stringify({
          search:keyword
        }),{
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        })
          .then(function (response) {
            self.searchResult = response.data.data.users;
            console.log(response.data.data.users)
            self.isShow = true;
          })
          .catch(function (error) {
            alert("数据获取失败，请退出重试");
          });
      },
      goback:function () {  //返回
        this.isActive = false;
      },
      newGourp:function(){
        var self = this;
        self.isNew = true;
        self.selectgroupid = null;
        self.isActive = true;
        self.meetingName = '';
        self.selectUsers = [];
      },
      deletegroup:function (index) {
        var self =this;
        self.$confirm("是否删除当前组？",{
          title:"提示",
          yes:"是",
          no:"否"
        }).then(function(success){
          self.axios.post(global.URL+'/user/groupdel',qs.stringify({
            group_id:self.group[index].group_id
          }),{
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          })
            .then(function (response) {
              console.log(response.data)
              if(response.data.status){
                self.group.splice(index,1);
              }
            })
            .catch(function (error) {
              alert("数据获取失败，请退出重试");
            });
        })
      },
      editgroup:function (index) {
        var self = this;
        self.isNew = false;
        self.axios.post(global.URL+'/user/groupview',qs.stringify({
          group_id:self.group[index].group_id
        }),{
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        })
          .then(function (response) {
            console.log(response.data);
            self.selectgroupid = self.group[index].group_id;
            self.selectUsers = response.data.data.users;
            console.log(self.selectUsers)
            self.meetingName = response.data.data.group_name;
            self.isActive = true;
          })
          .catch(function (error) {
            alert("数据获取失败，请退出重试");
          });
      },
      deleteUser:function (index) {
        this.selectUsers.splice(index,1);
      },
      add:function(index){  //搜索带出人添加到选框
        var selected = this.searchResult[index];
        for(var i in this.selectUsers){
          if(selected.user_id == this.selectUsers[i].user_id){
            this.isShow = false;
            document.getElementById("search").value='';
            return;
          }
        }
        this.selectUsers.push(selected);
        this.isShow = false;
        document.getElementById("search").value='';
      },
      sure:function () {
        var self = this;
        var ids=[];
        for(var i in self.selectUsers){
          ids.push(self.selectUsers[i].user_id);
        }
        if(self.meetingName.length == 0){
          self.$alert("群组名称不能为空",{
            title:""
          });
          return;
        }
        self.axios.post(global.URL+'/user/groupadd',qs.stringify({
          group_id:self.selectgroupid,
          groupname:self.meetingName,
          user_id:window.localStorage.userId,
          user_ids:ids
        }),{
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        })
          .then(function (response) {
            console.log(response.data)
            if(self.selectgroupid){
              if(response.data.status){
                alert("修改成功");
                for(var i in self.group){
                  if(self.selectgroupid == self.group[i].group_id){
                    self.group[i].group_name = response.data.data.group_name;
                  }
                }
              }else{
                alert("修改失败");
              }
            }else{
              if(response.data.status){
                alert("添加成功");
                self.group.push(response.data.data);
              }else{
                alert("添加失败");
              }
            }
            self.isActive = false;
          })
          .catch(function (error) {
            alert("数据获取失败，请退出重试");
          });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container_right{
    height: 100%;
    width: 100%;
    overflow-y: auto;
    background: white;
    position: fixed;
    top: 0px;
    left: 100%;
    transition:left 0.3s;
    -webkit-transition:left 0.3s;
    color: #8a8a8a;
  }
  .fa-pencil-square-o{
    color: #ff8000;
    position: absolute;
    right: 45px;
    top: 12px;
  }
  .delete{
    color: red;
    position: absolute;
    right: 15px;
    top: 11px;
  }
  .group{
    text-align: left;
  }
  .grouptitle{
    padding: 10px 15px;
    background: #f1f1f1;
    color:#333;
    font-size: 14px;
  }
  .groupname{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-right: 30px;
    position: relative;
    padding: 10px 70px 10px 15px;
    border-bottom: 1px solid #efefef;
  }
  .classA{
    left:0%
  }
  .classB{
    left:100%
  }
  .editgroup{
    padding: 50px 15px 15px 15px;
    box-sizing: border-box;
  }
  .meetingName{
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    width: 100%;
    padding: 8px 10px;
    border-radius: 5px;
    box-shadow: none;
    border: 1px solid #dcdcdc;
    -webkit-appearance: none;
  }
  .selectUser{
    margin-top: 15px;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    min-height: 50px;
    overflow: hidden;
  }
  .selectUserChild{
    margin-right: 10px;
    margin-bottom: 5px;
    float: left;
    border: 1px solid #ccc;
    padding: 5px;
  }
  .deleteuser{
    margin-left: 5px;
  }
  .search{
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    width: 100%;
    padding: 8px 10px;
    border-radius: 5px;
    box-shadow: none;
    border: 1px solid #dcdcdc;
  }
  .fa-search{
    position: absolute;
    top: 8px;
    right: 10px;
    color: #8a8a8a;
  }
  .searchResult{
    text-align: left;
    position: absolute;
    width: 100%;
    background: white;
    font-size: 14px;
    z-index: 2;
  }
  .searchResult li{
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #dcdcdc;
    margin-top: -1px;
  }
  .new{
    color: red;
    float: right;
  }
  .form_submit{
    width: 80%;
    margin: auto;
    background: #ff8000;
    color: white;
    border-radius: 5px;
    border: none;
    padding: 10px;
    font-size: 18px;
    margin-bottom: 50px;
  }
  .form_submit2{
    margin-top: 20px;
  }
</style>
