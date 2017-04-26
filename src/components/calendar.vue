<template>
  <div>
    <vue-event-calendar :events="demoEvents" style="margin-bottom: 20px">
      <template scope="props">
        <div v-for="(event, index) in props.showEvents" class="event-item">
          <!-- 这里拿到的是传入的单个event所有数据 -->
          {{event.date}}<br>{{event.title}}<br>{{event.start_time}}-{{event.end_time}}
        </div>
      </template>
    </vue-event-calendar>
  </div>

</template>

<script>
  import moment from 'moment'
  import  qs from 'qs'
  export default {
    data () {
      return {
        demoEvents: [
        ]
      }
    },
    mounted:function(){
      var self = this;
      var today = moment().format('YYYY/MM/DD');
      self.axios.post(global.URL+'/user/meetings',qs.stringify({
        user_id:global.USER_ID
      }),{
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      .then(function (response) {
        self.demoEvents = response.data.data.meetings;
        for(var i in self.demoEvents){
          self.demoEvents[i].start_time = self.demoEvents[i].start_time.substring(self.demoEvents[i].start_time.indexOf(" "));
        }
        for(var i in self.demoEvents){
          self.demoEvents[i].end_time = self.demoEvents[i].end_time.substring(self.demoEvents[i].end_time.indexOf(" "));
        }
        self.$nextTick(function () {
          var today = moment().format('YYYY/MM/DD');
          self.$EventCalendar.toDate(today);
        })
      })
      .catch(function (error) {
        alert("数据获取失败，请退出重试");
      });
    },
    methods:{

    }
  }
</script>

<style scoped>
</style>
