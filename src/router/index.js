import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import auth from '@/components/Authentication/Index.vue'

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: auth
    },
    {
      path: '/auth',
      component: auth
    }
  ]
})

export default router