<template>
  <div class="container">
    <div class="container_left">
      <div class="form_content">
        <i class="fa fa-user-o" aria-hidden="true"></i>
        <p class="title_n">申请人</p>
        <input type="text" class="form_input" placeholder="申请人" readonly/>
      </div>
      <div class="form_content">
        <i class="fa fa-user-o" aria-hidden="true"></i>
        <p class="title_n">申请部门</p>
        <input type="text" class="form_input" placeholder="申请部门" readonly/>
      </div>
      <div class="form_content">
        <i class="fa fa-user-o" aria-hidden="true"></i>
        <p class="title_n">成本中心</p>
        <input type="text" class="form_input" placeholder="成本中心" readonly/>
      </div>
      <div class="form_content">
        <i class="fa fa-user-o" aria-hidden="true"></i>
        <p class="title_n">会议日期</p>
        <date-picker :date="startTime" :option="option" :limit="limit"></date-picker>
      </div>
      <div class="form_content">
        <i class="fa fa-user-o" aria-hidden="true"></i>
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
        <i class="fa fa-user-o" aria-hidden="true"></i>
        <p class="title_n">邀请人</p>
        <p class="users"><span v-for="(item, index) in sureUsers">{{ item }}</span><i class="fa fa-angle-right" aria-hidden="true"></i></p>
      </div>
      <div class="form_content">
        <i class="fa fa-user-o" aria-hidden="true"></i>
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
        <div class="selectUser">
          <div class="selectUserChild" v-on:click="deleteUser(index)" v-for="(item, index) in selectUsers">
            {{ item }}<i class="fa fa-times" aria-hidden="true"></i>
          </div>
        </div>
        <div style="position: relative;margin-top: 20px;">
          <input class="search" placeholder="搜索人名"/>
          <i class="fa fa-search" aria-hidden="true"></i>
          <ul class="searchResult" v-if="isShow">
            <li v-for="(item, index) in searchResult" v-on:click="add(index)">
              {{ item }}
              <!--<i class="fa fa-check" aria-hidden="true"></i>-->
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
  import '../../static/css/create.css'
  export default {
    name: 'create',
    data () {
      return {
        selectUsers:["蒋平易","姚志伟","刘丹"],
        searchResult:["林伟华","汪敏"],
        sureUsers:[],
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
    methods:{
      telephone:function(){
        this.isActive = true;
      },
      gettel:function () {
        this.isActive = false;
      },
      sure:function () {
        this.isActive = false;
        this.sureUsers = this.selectUsers;
      },
      deleteUser:function(index){
        this.selectUsers.splice(index,1);
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
