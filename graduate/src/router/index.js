import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import mainGrad from '@/components/main/mainGrad'
import product from '@/components/product/product'
import Try from '@/components/try/try'
import resource from '@/components/resource/resource'
import user from '@/components/user/user'

import CNN from '@/components/resource/resourceRight/CNN.vue'
import DBN from '@/components/resource/resourceRight/DBN'
import Hog from '@/components/resource/resourceRight/Hog'

import Keras from '@/components/resource/resourceRight/Keras'
import Tensorflow from '@/components/resource/resourceRight/Tensorflow'

import parter from '@/components/parter/parter.vue'
import api from '@/components/api/api.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainGrad',
      component: mainGrad,
      redirect: '/main/product',
      children: [
        {
          path: '/main/product',
          name: 'product',
          component: product
        },
       {
         path: '/main/try',
         name: 'Try',
         component: Try
       },
       {
         path: '/main/resource',
         name: 'resource',
         component: resource,
         redirect: '/main/resource/hog',
         children: [
           {
              path: '/main/resource/hog',
              name: 'Hog',
              component: Hog
           },
           {
              path: '/main/resource/DBN',
              name: 'DBN',
              component: DBN
           },
           {
              path: '/main/resource/Keras',
              name: 'Keras',
              component: Keras
           },
           {
              path: '/main/resource/CNN',
              name: 'CNN',
              component: CNN
           },
           {
              path: '/main/resource/Tensorflow',
              name: 'Tensorflow',
              component: Tensorflow
           }
         ]
       },
       {
         path: '/main/user',
         name: 'user',
         component: user
       },
       {
         path: '/main/parter',
         name: 'parter',
         component: parter
       },
       {
         path: '/main/api',
         name: 'api',
         component: api
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
