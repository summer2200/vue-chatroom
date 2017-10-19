import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Home from '@/components/home'
import VeeValidate from 'vee-validate'

Vue.use(Router)
Vue.use(VeeValidate)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
