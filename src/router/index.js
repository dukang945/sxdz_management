import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/page/Welcome'
import Login from '@/components/page/login'
import SkillColumn from '@/components/page/SkillColumn'
import SkillDetail from '@/components/page/SkillDetail'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/Welcome',
      component: Welcome,
    },
    {
      path: '/',
      redirect: '/Welcome'
    },
    {
      path: '/skillColumn',
      component: SkillColumn
    },
    {
      path: '/skillDetail',
      component: SkillColumn
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
