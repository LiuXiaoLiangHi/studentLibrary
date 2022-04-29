import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Login from '../defaultRouter/login/index.vue'
import register from '../defaultRouter/register/index.vue'
import Layout from '../defaultRouter/layout/index.vue'
import Forbidden from '../defaultRouter/403/index.vue'
import NotFound from '../defaultRouter/404/index.vue'
import Home from '../views/home/index.vue'
/* 初始路由 */
export default new VueRouter({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: register
    }
  ]
})


/* 准备动态添加的路由 */
export const DynamicRoutes = [
  {
    path: '',
    component: Layout,
    name: 'container',
    redirect: 'home',
    meta: {
      requiresAuth: true,
      name: '首页'
    },
    children: [
      {
        id: 1,
        path: 'home',
        component: Home,
        name: 'home',
        meta: {
          name: '首页',
          icon: 'fa fa-home',
          iconColor: 'color:#f0c02f',
        }
      }
    ]
  },
  {
    path: '/403',
    component: Forbidden
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
]


