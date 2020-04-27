import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import personRevise from '@/components/personRevise'
import index from '@/components/index'
import register from '@/components/register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/personRevise',
      name: 'personRevise',
      component: personRevise
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
