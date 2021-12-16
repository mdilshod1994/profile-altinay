import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Goals from '../components/Goals.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      const options = {
        top: document.querySelector(to.hash).offsetTop,
        behavior: 'smooth',
      }
      window.scrollTo(options)
    }else{
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/goals',
      name: 'goals',
      component: Goals
    }
  ]
})
