<template>
  <div class="container">
    <div class="container_left">
      <div class="form_content">
        <i class="fa fa-user" aria-hidden="true"></i>
        <p class="title_n">申请人</p>
        <input type="text" class="form_input" placeholder="申请人" readonly v-model="userinfo.name"/>
      </div>
      <div class="form_content">
        <i class="fa fa-university" aria-hidden="true"></i>
        <p class="title_n">申请部门</p>
        <input type="text" class="form_input" placeholder="申请部门" readonly v-model="userinfo.department"/>
      </div>
      <div class="form_content">
        <i class="fa fa-money" aria-hidden="true"></i>
        <p class="title_n">成本中心</p>
        <input type="text" class="form_input" placeholder="成本中心" readonly v-model="userinfo.cost_dep"/>
      </div>
      <div class="form_content">
        <i class="fa fa-calendar" aria-hidden="true"></i>
        <p class="title_n">会议日期</p>
        <date-picker :date="startTime" :option="option" :limit="limit"></date-picker>
      </div>
      <div class="form_content">
        <i class="fa fa-calendar-times-o" aria-hidden="true"></i>
        <p class="title_n">会议时间</p>
        <div class="meetingTime">
            <select>
            <option value=" ">00:00</option>
            <option value=" ">00:30</option>
            <option value=" ">01:00</option>
            <option value=" ">01:30</option>
            <option value=" ">02:00</option>
            <option value=" ">02:30</option>
            <option value=" ">03:00</option>
            <option value=" ">03:30</option>
            <option value=" ">04:00</option>
            <option value=" ">04:30</option>
            <option value=" ">05:00</option>
            <option value=" ">05:30</option>
            <option value=" ">06:00</option>
            <option value=" ">06:30</option>
            <option value=" ">07:00</option>
            <option value=" ">07:30</option>
            <option value=" ">08:00</option>
            <option value=" ">08:30</option>
            <option value=" ">09:00</option>
            <option value=" ">09:30</option>
            <option value=" ">10:00</option>
            <option value=" ">10:30</option>
            <option value=" ">11:00</option>
            <option value=" ">11:30</option>
            <option value=" ">12:00</option>
            <option value=" ">12:30</option>
            <option value=" ">13:00</option>
            <option value=" ">13:30</option>
            <option value=" ">14:00</option>
            <option value=" ">14:30</option>
            <option value=" ">15:00</option>
            <option value=" ">15:30</option>
            <option value=" ">16:00</option>
            <option value=" ">16:30</option>
            <option value=" ">17:00</option>
            <option value=" ">17:30</option>
            <option value=" ">18:00</option>
            <option value=" ">18:30</option>
            <option value=" ">19:00</option>
            <option value=" ">19:30</option>
            <option value=" ">20:00</option>
            <option value=" ">20:30</option>
            <option value=" ">21:00</option>
            <option value=" ">21:30</option>
            <option value=" ">22:00</option>
            <option value=" ">22:30</option>
            <option value=" ">23:00</option>
            <option value=" ">23:30</option>
          </select>
        </div>
        <div class="meetingTime">到
          <select>
            <option value=" ">00:00</option>
            <option value=" ">00:30</option>
            <option value=" ">01:00</option>
            <option value=" ">01:30</option>
            <option value=" ">02:00</option>
            <option value=" ">02:30</option>
            <option value=" ">03:00</option>
            <option value=" ">03:30</option>
            <option value=" ">04:00</option>
            <option value=" ">04:30</option>
            <option value=" ">05:00</option>
            <option value=" ">05:30</option>
            <option value=" ">06:00</option>
            <option value=" ">06:30</option>
            <option value=" ">07:00</option>
            <option value=" ">07:30</option>
            <option value=" ">08:00</option>
            <option value=" ">08:30</option>
            <option value=" ">09:00</option>
            <option value=" ">09:30</option>
            <option value=" ">10:00</option>
            <option value=" ">10:30</option>
            <option value=" ">11:00</option>
            <option value=" ">11:30</option>
            <option value=" ">12:00</option>
            <option value=" ">12:30</option>
            <option value=" ">13:00</option>
            <option value=" ">13:30</option>
            <option value=" ">14:00</option>
            <option value=" ">14:30</option>
            <option value=" ">15:00</option>
            <option value=" ">15:30</option>
            <option value=" ">16:00</option>
            <option value=" ">16:30</option>
            <option value=" ">17:00</option>
            <option value=" ">17:30</option>
            <option value=" ">18:00</option>
            <option value=" ">18:30</option>
            <option value=" ">19:00</option>
            <option value=" ">19:30</option>
            <option value=" ">20:00</option>
            <option value=" ">20:30</option>
            <option value=" ">21:00</option>
            <option value=" ">21:30</option>
            <option value=" ">22:00</option>
            <option value=" ">22:30</option>
            <option value=" ">23:00</option>
            <option value=" ">23:30</option>
          </select>
        </div>
      </div>
      <div class="form_content" v-on:click="telephone">
        <i class="fa fa-users" aria-hidden="true"></i>
        <p class="title_n">邀请人</p>
        <p class="users"><span v-for="(item, index) in sureUsers">{{ item.user_name }}</span><span v-for="(item, index) in suregroup">{{ item.group_name }}</span><i class="fa fa-angle-right" aria-hidden="true"></i></p>
      </div>
      <div class="form_content">
        <i class="fa fa-pencil" aria-hidden="true"></i>
        <p class="title_n">备注</p>
        <textarea type="text" class="form_textarea" placeholder="备注"/>
      </div>
      <p class="note">如您要创建大型电话会议，使用录音、静音、点名等功能，请通过PC登录“会畅电话会议管理控制台”进行创建。
      </p>
      <button class="form_submit">提交</button>
    </div>
    <div class="container_right" v-bind:class="[isActive ? 'classA' : 'classB']">
      <div class="top" v-bind:class="[isActive ? 'classA' : 'classB']">
        <p class="goback" v-on:click="gettel">
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
            <input class="search" placeholder="搜索人名" id="search"/>
            <i class="fa fa-search" aria-hidden="true" v-on:click="search()"></i>
            <ul class="searchResult" v-if="isShow">
              <li v-for="(item, index) in searchResult" v-on:click="add(index)">
                {{ item.user_name }}
                <!--<i class="fa fa-check" aria-hidden="true"></i>-->
              </li>
            </ul>
          </div>
        </div>
        <div class="group">
          <div class="meunlist">
            <router-link to="/group" class="tab">群组管理</router-link>
          </div>
          <p class="grouptitle">我的群组</p>
          <ul>
            <li v-for="(item, index) in group" v-on:click="addGroups(index)">
              <p class="groupname">{{item.group_name}}<i class="fa fa-check" aria-hidden="true" style="display: none"></i></p>
            </li>
          </ul>
        </div>
        <button class="form_submit form_submit2" v-on:click="sure">完成</button>
      </div>
    </div>
  </div>
</template>

<script>
  import myDatepicker from 'vue-datepicker'
  import qs from 'qs'
  import '../../static/css/create.css'
  export default {
    name: 'create',
    data () {
      return {
        searchResult:[],   //搜索人
        group:[],  //我的群组
        selectUsers:[],//  被选人
        selectGroup:[],  //被选群组
        sureUsers:[], //  完成后的被选人
        suregroup:[], //  完成后的被选组
        userinfo:null,
        isActive:false,
        isShow: true,
        startTime: {
          time: ''
        },
        endtime: {
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
          overlayOpacity: 0.5, // 0.5 as default
          dismissible: true // as true as default
        },
        limit: [{
          type: 'weekday',
          available: [1, 2, 3, 4, 5,6,7]
        },
          {
            type: 'fromto',
            from: '2016-01-01',
            to: '2055-12-31'
          }]
      }
    },
    created:function(){
      var self = this;
      self.axios.post('https://phichattest.phicomm.com/index.php/API/user/groups',qs.stringify({
        user_id:"FX008032"
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
        alert(2);
      });

      self.axios.post('https://phichattest.phicomm.com/index.php/API/user/info',qs.stringify({
        user_id:window.localStorage.userId
      }),{
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      .then(function (response) {
        self.userinfo = response.data.data;
        console.log(self.userinfo)
      })
      .catch(function (error) {
        alert(2);
      });
    },
    methods:{
      search:function(){
        var keyword = document.getElementById("search").value;
        var self = this;
        self.axios.post('https://phichattest.phicomm.com/index.php/API/user/search',qs.stringify({
          search:keyword
        }),{
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        })
        .then(function (response) {
          self.searchResult = response.data.data.users;
          console.log(self.group)
        })
        .catch(function (error) {
        });
      },
      telephone:function(){
        this.isActive = true;
      },
      gettel:function () {
        this.isActive = false;
      },
      sure:function () {
        this.isActive = false;
        this.sureUsers = this.selectUsers;
        this.suregroup = this.selectGroup;
        console.log(this.selectUsers)
      },
      deleteUser:function(index){
        this.selectUsers.splice(index,1);
      },
      deleteGroup:function(index){
        var deleteGroupName = this.selectGroup[index]
        this.selectGroup.splice(index,1);
        for(var i in this.group){
          if(this.group[i] == deleteGroupName){
            document.getElementsByClassName("fa-check")[i].style.display = "none";
            break;
          }
        }
      },
      add:function(index){
        var selected = this.searchResult[index];
        for(var i in this.selectUsers){
          if(selected == this.selectUsers[i]){
            return;
          }
        }
        this.selectUsers.push(selected);
        this.isShow = false
      },
      addGroups:function (index) {
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
      }
    },
    components: {
      'date-picker': myDatepicker
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
