import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Work form '@/components/Work'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/cdjreekie/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cdjreekie/about',
      name: 'About',
      component: About
    },
    {
      path: '/cdjreekie/work',
      name: 'Work',
      component: Work
    }
  ]
})