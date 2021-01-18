import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter);

// import views you want to serve up in `router-view`
import Home from './components/Home.vue'
import About from './components/About.vue'
import Work from './components/Work.vue'

const routes = [{
    path: '/cdjreekie',
    component: Home,
    name: "home"
  },
  {
    path: '/cdjreekie/About',
    component: About,
    name: "about"
  },
   {
    path: '/cdjreekie/Work',
    component: Work,
    name: "work"
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