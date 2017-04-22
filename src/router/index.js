import Vue from 'vue'
import Router from 'vue-router'
import meun from '@/components/meun'
import calendar from '@/components/calendar'
import create from '@/components/create'
import group from '@/components/group'
import error from '@/components/error'

Vue.use(Router);

const router =  new Router({
  // mode:"history",
  routes: [
    {
      path: '/',
      name: 'meun',
      component: meun,
      meta:{title:'菜单'}
    },
    {
      path:"/calendar",
      name:"calendar",
      component:calendar,
      meta:{title:'日历'}
    },
    {
      path:"/create",
      name:"create",
      component:create,
      meta:{title:'新建会议'}
    },
    {
      path:"/group",
      name:"group",
      component:group,
      meta:{title:'群组管理'}
    },
    {
      path:"/error",
      name:"error",
      component:error,
      meta:{title:'错误'}
    }
  ]
});
router.beforeEach((to,from,next) => {
  var ua = navigator.userAgent.toLowerCase();
  if(ua.match(/MicroMessenger/i)=="micromessenger") {
    next();
  } else {
    if(to.name == 'error'){
      next();
    }else{
      next({ path: '/error' })
    }

  }

});
router.afterEach(route => {
  document.title = route.meta.title
});

export default router
