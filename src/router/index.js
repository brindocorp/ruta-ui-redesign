import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import History from '@/components/History'
import Documents from '@/components/Documents'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/documents',
      name: 'Documents',
      component: Documents
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
  ]
})
