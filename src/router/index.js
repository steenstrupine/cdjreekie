import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Work from '@/components/Work'

Vue.use(Router)

const router =  new VueRouter({
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active"
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