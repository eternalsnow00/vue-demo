<template>
  <div>
    <vue-event-calendar :events="demoEvents">
      <template scope="props">
        <div v-for="(event, index) in props.showEvents" class="event-item">
          <!-- 这里拿到的是传入的单个event所有数据 -->
          {{event.date}}<br>{{event.title}}<br>{{event.meeting_time}}
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
    created:function(){
      var self = this;
      var today = moment().format('YYYY/MM/DD');
      self.axios.post('https://phichattest.phicomm.com/index.php/API/user/meetings',qs.stringify({
        user_id:window.localStorage.userId
      }),{
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      .then(function (response) {
        self.demoEvents = response.data.data.meetings;
        console.log(self.demoEvents);
      })
      .catch(function (error) {
      });
      var today = moment().format('YYYY/MM/DD');
      self.$EventCalendar.toDate(today);

    },
    methods:{

    }
  }
</script>

<style scoped>
</style>
