/*
 * @Author: liang
 * @Date: 2022-03-04 08:44:08
 * @LastEditors: LAPTOP-LD525C2O
 * @LastEditTime: 2022-04-21 22:00:16
 * @Description: file content
 * @FilePath: \作业\my-home\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Login from '../defaultRouter/login/index.vue'
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
          iconColor:'color:#f0c02f',
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


