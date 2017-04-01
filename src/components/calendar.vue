<template>
  <div>
    <vue-event-calendar :events="demoEvents">
      <template scope="props">
        <div v-for="(event, index) in props.showEvents" class="event-item">
          <!-- 这里拿到的是传入的单个event所有数据 -->
          {{event.date}}{{event.title}}
        </div>
      </template>
    </vue-event-calendar>
  </div>

</template>

<script>
  import moment from 'moment'
  export default {
    data () {
      return {
        demoEvents: [{
          date: '2017/03/31',
          title: '我生日test'
        },{
          date: '2017/03/28',
          title: '我生日'
        },{
          date: '1990/03/28',
          title: '我生日'
        }]
      }
    },
    created:function(){
      var today = moment().format('YYYY/MM/DD');
      console.log(today)
      this.$EventCalendar.toDate(today);
    },
    methods:{
      goback:function(){
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>
</style>
