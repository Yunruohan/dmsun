import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import mainGrad from '@/components/main/mainGrad'
import products from '@/components/product/product'
import Try from '@/components/try/try'
import resource from '@/components/resource/resource'
import user from '@/components/user/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainGrad',
      component: mainGrad,
      children: [
       {
         path: '/main/product',
         name: 'product',
         component: products
       },
       {
         path: '/main/try',
         name: 'Try',
         component: Try
       },
       {
         path: '/main/resource',
         name: 'resource',
         component: resource
       },
       {
         path: '/main/user',
         name: 'user',
         component: user
       }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'login',
      component: login
    }
  ]
})
