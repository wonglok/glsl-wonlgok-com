import Vue from 'vue'
import Router from 'vue-router'
import HeroKitty from './views/HeroKitty.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HeroKitty
    },
    {
      path: '/login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    },
    {
      path: '/register',
      component: () => import(/* webpackChunkName: "register" */ './views/Register.vue')
    },
    {
      path: '/about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
