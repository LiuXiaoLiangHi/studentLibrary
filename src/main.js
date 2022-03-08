/*
 * @Author: liang
 * @Date: 2022-03-04 08:44:08
 * @LastEditors: liang
 * @LastEditTime: 2022-03-07 18:56:48
 * @Description: file content
 * @FilePath: \作业\my-home\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//引入封装过的axios
import axios from './config/httpConfig'
// 引入样式
import '@/style/css/index.less'

Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.use(ElementUI)

//做路由跳转前都 进行验证 userToken 是否存在  前置路由
router.beforeEach((to, from, next) => {
  console.log('前置路由触发');

  //token如果不存在
  if (!store.state.UserToken) {
     
      // to.matched  与给定路由地址匹配的标准化的路由记录数组。

      //some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。
      // some() 方法会依次执行数组的每个元素：
      // 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
      // 如果没有满足条件的元素，则返回false。
      // 注意： some() 不会对空数组进行检测。
      // 注意： some() 不会改变原始数组。

      //如果与给定路由地址匹配的标准化的路由记录数组存在且不为0 &&  路由记录不需要进行 自动验证
      //则放行通过
      console.log('@1----to.matched',to.matched);
      if (to.matched.length > 0 && !to.matched.some(record => record.meta.requiresAuth)) {
          next()
      } else {
          // 否则进行 强制路由跳转到 login 页面 进行 登录
          next({ path: '/login' })
      }
      //接下来处理 有token 的情况 
  } else {
      console.log('@2---token存在，进行验证');
       // 如果store.state 的 permission 模块 内的所有路由
       // 为null既没有路由（初次登录）
      if (!store.state.permission.permissionList) {
          //触发   FETCH_PERMISSION 异步方法（获取权限）
          store.dispatch('permission/FETCH_PERMISSION').then(() => {
              // 权限获取成功 可以跳转自己想去的 地址 to.path
              next({ path: to.path })
          })
      } else {
         //token存在，可访问路由也存在
          if (to.path !== '/login') {
              //直接放行
              next()
          } else {
              // 有权限 都是去login页面
              //返回到form---地址（原地址）
              //关于fullPath，快速获取当前路径
              next(from.fullPath)
              
          }
      }
  }
})
//后置路由  
router.afterEach((to) => {
    console.log('@3----后置路由触发');
    //   与给定路由地址匹配的标准化的路由记录数组
    //    后置路由 匹配的路由记录 可能会有多条
    var routerList = to.matched
   
    // 设置面包屑
    store.commit('setCrumbList', routerList)
    
    // 设置当前导航路由（当前路由）
    store.commit('permission/SET_CURRENT_MENU', to.name)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
