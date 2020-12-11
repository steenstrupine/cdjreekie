import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter);

// import views you want to serve up in `router-view`
import Home from './components/Home.vue'
import About from './components/About.vue'
import Work from './components/Work.vue'

const routes = [{
    path: '/cdjreekie',
    component: Home
  },
  {
    path: '/cdjreekie/About',
    component: About
  },
   {
    path: '/cdjreekie/Work',
    component: Work
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  render: h => h(App), // mount the base component
  router
}).$mount('#app')