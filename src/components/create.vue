<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="container">
    <div class="container_left">
      <div class="form_content">
        <p class="title_n"><i class="fa fa-user" aria-hidden="true"></i>申请人</p>
        <input type="text" class="form_input" placeholder="申请人" readonly v-model="userinfo.name"/>
      </div>
      <div class="form_content">
        <p class="title_n"><i class="fa fa-university" aria-hidden="true"></i>申请部门</p>
        <input type="text" class="form_input" placeholder="申请部门" readonly v-model="userinfo.department"/>
      </div>
      <div class="form_content">
        <p class="title_n"><i class="fa fa-money" aria-hidden="true"></i>成本中心</p>
        <input type="text" class="form_input" placeholder="成本中心" readonly v-model="userinfo.cost_dep"/>
      </div>
      <div class="form_content">
        <p class="title_n"><i class="fa fa-money" aria-hidden="true"></i>会议主题</p>
        <input type="text" class="form_input" placeholder="会议主题" v-model="formdata.meeting_name"/>
      </div>
      <div class="form_content">
        <p class="title_n"><i class="fa fa-calendar" aria-hidden="true"></i>会议日期</p>
        <date-picker :date="startTime" :option="option" :limit="limit" v-model="formdata.date"></date-picker>
      </div>
      <div class="form_content">
        <p class="title_n"><i class="fa fa-calendar-times-o" aria-hidden="true"></i>会议时间</p>
        <div class="meetingTime">
            <select v-model="formdata.start">
              <option value="00:30">00:30</option>
              <option value="01:00">01:00</option>
              <option value="01:30">01:30</option>
              <option value="02:00">02:00</option>
              <option value="02:30">02:30</option>
              <option value="03:00">03:00</option>
              <option value="03:30">03:30</option>
              <option value="04:00">04:00</option>
              <option value="04:30">04:30</option>
              <option value="05:00">05:00</option>
              <option value="05:30">05:30</option>
              <option value="06:00">06:00</option>
              <option value="06:30">06:30</option>
              <option value="07:00">07:00</option>
              <option value="07:30">07:30</option>
              <option value="08:00">08:00</option>
              <option value="08:30">08:30</option>
              <option value="09:00">09:00</option>
              <option value="09:30">09:30</option>
              <option value="10:00">10:00</option>
              <option value="10:30">10:30</option>
              <option value="11:00">11:00</option>
              <option value="11:30">11:30</option>
              <option value="12:00">12:00</option>
              <option value="12:30">12:30</option>
              <option value="13:00">13:00</option>
              <option value="13:30">13:30</option>
              <option value="14:00">14:00</option>
              <option value="14:30">14:30</option>
              <option value="15:00">15:00</option>
              <option value="15:30">15:30</option>
              <option value="16:00">16:00</option>
              <option value="16:30">16:30</option>
              <option value="17:00">17:00</option>
              <option value="17:30">17:30</option>
              <option value="18:00">18:00</option>
              <option value="18:30">18:30</option>
              <option value="19:00">19:00</option>
              <option value="19:30">19:30</option>
              <option value="20:00">20:00</option>
              <option value="20:30">20:30</option>
              <option value="21:00">21:00</option>
              <option value="21:30">21:30</option>
              <option value="22:00">22:00</option>
              <option value="22:30">22:30</option>
              <option value="23:00">23:00</option>
              <option value="23:30">23:30</option>
          </select>
        </div>
        <div style="float: left;height: 35px;line-height: 35px;padding: 0px 5px">至</div>
        <div class="meetingTime">
          <select v-model="formdata.end">
            <option value="01:00">01:00</option>
            <option value="01:30">01:30</option>
            <option value="02:00">02:00</option>
            <option value="02:30">02:30</option>
            <option value="03:00">03:00</option>
            <option value="03:30">03:30</option>
            <option value="04:00">04:00</option>
            <option value="04:30">04:30</option>
            <option value="05:00">05:00</option>
            <option value="05:30">05:30</option>
            <option value="06:00">06:00</option>
            <option value="06:30">06:30</option>
            <option value="07:00">07:00</option>
            <option value="07:30">07:30</option>
            <option value="08:00">08:00</option>
            <option value="08:30">08:30</option>
            <option value="09:00">09:00</option>
            <option value="09:30">09:30</option>
            <option value="10:00">10:00</option>
            <option value="10:30">10:30</option>
            <option value="11:00">11:00</option>
            <option value="11:30">11:30</option>
            <option value="12:00">12:00</option>
            <option value="12:30">12:30</option>
            <option value="13:00">13:00</option>
            <option value="13:30">13:30</option>
            <option value="14:00">14:00</option>
            <option value="14:30">14:30</option>
            <option value="15:00">15:00</option>
            <option value="15:30">15:30</option>
            <option value="16:00">16:00</option>
            <option value="16:30">16:30</option>
            <option value="17:00">17:00</option>
            <option value="17:30">17:30</option>
            <option value="18:00">18:00</option>
            <option value="18:30">18:30</option>
            <option value="19:00">19:00</option>
            <option value="19:30">19:30</option>
            <option value="20:00">20:00</option>
            <option value="20:30">20:30</option>
            <option value="21:00">21:00</option>
            <option value="21:30">21:30</option>
            <option value="22:00">22:00</option>
            <option value="22:30">22:30</option>
            <option value="23:00">23:00</option>
            <option value="23:30">23:30</option>
          </select>
        </div>
      </div>
      <div class="form_content" v-on:click="inviter">
        <p class="title_n"><i class="fa fa-users" aria-hidden="true"></i>邀请人</p>
        <p class="users"><span v-for="(item, index) in sureUsers">{{ item.user_name }}</span><span v-for="(item, index) in sureGroup">{{ item.group_name }}</span><i class="fa fa-angle-right" aria-hidden="true"></i></p>
      </div>
      <div class="form_content">
        <p class="title_n"><i class="fa fa-pencil" aria-hidden="true"></i>备注</p>
        <textarea type="text" class="form_textarea" placeholder="备注" rows="4" v-model="formdata.note"/>
      </div>
      <p class="note">如您要创建大型电话会议，使用录音、静音、点名等功能，请通过PC登录“会畅电话会议管理控制台”进行创建。
      </p>
      <button class="form_submit" v-on:click="createMeeting">提交</button>
    </div>
    <div class="container_right" v-bind:class="[isActive ? 'classA' : 'classB']">
      <div class="top" v-bind:class="[isActive ? 'classA' : 'classB']">
        <p class="goback" v-on:click="goback">
          <i class="fa fa-angle-left" aria-hidden="true"></i>
          <span>返回</span>
        </p>
      </div>
      <div class="selectContainer">
        <div class="selectchild">
          <div class="selectUser">
            <div class="selectUserChild" v-on:click="deleteUser(index)" v-for="(item, index) in selectUsers">
              {{ item.user_name }}<i class="fa fa-times" aria-hidden="true"></i>
            </div>
            <div class="selectUserChild"  v-on:click="deleteGroup(index)" v-for="(item, index) in selectGroup">
              {{ item.group_name }}<i class="fa fa-times" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div class="selectchild">
          <div style="position: relative;margin-top: 20px;">
            <input class="search" placeholder="搜索参会的人员" id="search" v-on:input="change"/>
            <i class="fa fa-search" aria-hidden="true" ></i>
            <ul class="searchResult" v-if="isShow">
              <li v-for="(item, index) in searchResult" v-on:click="add(index)">
                {{ item.user_name }}-{{ item.user_id }}
                <!--<i class="fa fa-check" aria-hidden="true"></i>-->
              </li>
            </ul>
          </div>
        </div>
        <div class="group">
          <p class="grouptitle">我的群组<router-link to="/group" class="management">群组管理</router-link></p>
          <ul>
            <li v-for="(item, index) in group" v-on:click="addGroups(index)">
              <p class="groupname">{{item.group_name}}<i class="fa fa-check" aria-hidden="true" style="display: none"></i></p>
            </li>
          </ul>
        </div>
        <button class="form_submit form_submit2" v-on:click="sure">完成</button>
      </div>
    </div>
    <div v-show="layer" class="layer"><p>正在创建，请稍后...</p></div>
  </div>
</template>

<script>
  import myDatepicker from 'vue-datepicker'
  import moment from 'moment'
  import qs from 'qs'
  export default {
    name: 'create',
    data () {
      return {
        layer:false,  //遮罩层
        searchResult:[],   //搜索人
        group:[],  //我的群组
        selectUsers:[],//  被选人
        selectGroup:[],  //被选群组
        sureUsers:[], //  完成后的被选人
        sureGroup:[], //  完成后的被选组
        userinfo:{
          name:'',
          department:'',
          cost_dep:''
        },
        formdata:{
          start:"00:30",
          end:"01:00",
          note:''
        },
        isActive:false,
        isShow: true,
        startTime: {
          time: ''
        },
        option: {
          type: 'day',
          week: ['一', '二', '三', '四', '五', '六', '日'],
          month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
          format: 'YYYY-MM-DD',
          placeholder: '会议日期',
          inputStyle: {
            "box-sizing": "border-box",
            "-webkit-box-sizing": "border-box",
            "width": "100%",
            "padding": "8px 10px",
            "border-radius": "5px",
            "box-shadow": "none",
            "border": "1px solid #dcdcdc",
            "-webkit-appearance":"none"
          },
          color: {
            header: '#ff8000',
            headerText: '#fff'
          },
          buttons: {
            ok: '确认',
            cancel: '取消'
          },
          overlayOpacity: 0.5,
          dismissible: true
        },
        limit: [{
          type: '',
          available: [1, 2, 3, 4, 5,6,7]
        },
          {
            type: 'fromto',
            from: moment().subtract(1, 'days').format('YYYY/MM/DD'),
            to: '2055-12-31'
          }]
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
      })
      .catch(function (error) {
        alert("数据获取失败，请退出重试");
      });

      self.axios.post(global.URL+'/user/info',qs.stringify({
        user_id:window.localStorage.userId
      }),{
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      .then(function (response) {
        self.userinfo = response.data.data;
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
            self.isShow = true;
          })
          .catch(function (error) {
            alert("数据获取失败，请退出重试");
          });
      },
      inviter:function(){  //点击邀请人
        this.isActive = true;
      },
      goback:function () {  //返回
        this.isActive = false;
      },
      sure:function () {  //确认邀请人
        this.isActive = false;
        this.sureUsers = this.selectUsers;
        this.sureGroup = this.selectGroup;
      },
      deleteUser:function(index){  //删除人
        this.selectUsers.splice(index,1);
      },
      deleteGroup:function(index){  //删除组
        var deleteGroupName = this.selectGroup[index];
        this.selectGroup.splice(index,1);
        for(var i in this.group){
          if(this.group[i] == deleteGroupName){
            document.getElementsByClassName("fa-check")[i].style.display = "none";
            break;
          }
        }
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
      addGroups:function (index) { //添加组到选框
        var that = this;
        var styleText = document.getElementsByClassName("fa-check")[index].style.display;
        var len = document.getElementsByClassName("fa-check").length;
        if(styleText == "none"){
          document.getElementsByClassName("fa-check")[index].style.display = "block";
        }else{
          document.getElementsByClassName("fa-check")[index].style.display = "none";
        }
        that.selectGroup = [];
        for(var i=0;i<len;i++){
          if(document.getElementsByClassName("fa-check")[i].style.display == "block"){
            that.selectGroup.push(that.group[i]);
          }
        }
      },
      createMeeting:function () {  //提交表单
        var self = this;
        var obj = {}
        obj.meeting_name = self.formdata.meeting_name
        obj.meeting_start= self.startTime.time+" "+self.formdata.start;
        obj.meeting_end = self.startTime.time+" "+self.formdata.end;
        obj.user_id = window.localStorage.userId;
        obj.cost_dep = self.userinfo.cost_dep;
        obj.remark = self.formdata.note;
        var userids = [];
        var usergroups = [];
        for(var i in self.sureUsers){
          userids.push(self.sureUsers[i].user_id)
        }
        for(var i in self.sureGroup){
          usergroups.push(self.sureGroup[i].group_id)
        }
        if(!obj.meeting_name){
          self.$alert("会议主题不能为空",{
            title:""
          });
          return;
        }
        if(!self.startTime.time){
          self.$alert("会议时间不能为空",{
            title:""
          });
          return;
        }
        if(userids.length ==0 && usergroups.length == 0){
          self.$alert("邀请人不能为空",{
            title:""
          });
          return;
        }

        obj.users = {user_ids:userids,groups:usergroups};
        self.layer = true;
        self.axios.post(global.URL+'/meeting/add',qs.stringify(obj),{
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        })
        .then(function (response) {
          self.layer = false;
          console.log(response.data)
          if(response.data.status){
            self.$alert("创建成功").then(function(success){
              self.$router.push({ name: 'meun', params: { user_id: window.localStorage.userId }})
            })
          }else{
            self.$alert(response.data.data.message);
          }
        })
        .catch(function (error) {
          alert("数据获取失败，请退出重试");
          self.$router.push({ name: 'meun', params: { user_id: window.localStorage.userId }})
        });
      }
    },
    components: {
      'date-picker': myDatepicker
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../../static/css/create.css">

</style>
