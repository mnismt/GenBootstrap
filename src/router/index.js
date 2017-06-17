import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Alert from '@/components/component/Alert'
import Badges from '@/components/component/Badges'
import Breadcrumb from '@/components/component/Breadcrumb'
import Buttons from '@/components/component/Button'
import Collapse from '@/components/component/Collapse'
import Jumbotron from '@/components/component/Jumbotron'
import Progress from '@/components/component/Progress'
import Pagination from '@/components/component/Pagination'
import Developing from '@/components/component/Developing'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/alert',
      name: 'alert',
      component: Alert
    },
    {
      path: '/badges',
      name: 'badges',
      component: Badges
    },
    {
      path: '/breadcrumb',
      name: 'breadcrumb',
      component: Breadcrumb
    },
    {
      path: '/buttons',
      name: 'buttons',
      component: Buttons
    },
    {
      path: '/collapse',
      name: 'collapse',
      component: Collapse
    },
    {
      path: '/jumbotron',
      name: 'jumbotron',
      component: Jumbotron
    },
    {
      path: '/progress',
      name: 'progress',
      component: Progress
    },
    {
      path: '/pagination',
      name: 'pagination',
      component: Pagination
    },
    {
      path: '/:components',
      name: 'com',
      component: Developing
    }]
})
