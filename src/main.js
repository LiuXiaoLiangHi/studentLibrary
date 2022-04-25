import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from './config/httpConfig'  // 引入二次封装的axios
import '@/style/css/index.less' //引入部分样式
import '@/icons' // 全局注册svg组件
import '@/components/underDevelopment/index.js' // 全局注册功能未开发弹窗组件

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(ElementUI)

//前置路由判断用户是否登录
router.beforeEach((to, from, next) => {
  console.log('前置路由触发');
  //如果在vuex内没有发现用户的token
  if (!store.state.UserToken) {
      // #region
      // to.matched  与给定路由地址匹配的标准化的路由记录数组。
      //some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。
      // some() 方法会依次执行数组的每个元素：
      // 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
      // 如果没有满足条件的元素，则返回false。
      // 注意： some() 不会对空数组进行检测。
      // 注意： some() 不会改变原始数组。
     // #endregion
     
     //如果与给定路由地址匹配的标准化的路由记录数组存在且不为0 && 路由记录不需要进行自动验证-则放行通过
      console.log('当前页面匹配的路由如下（matchedd)',to.matched);
      if (to.matched.length > 0 && !to.matched.some(record => record.meta.requiresAuth)) {
          next()
      } else {
          // 否则进行强制路由跳转到 login页面进行登录
          next({ path: '/login' })
      }
      //接下来处理 有token 的情况 
  } else {
      console.log('vuex发现token,开始执行下一步');
       //判断premission模块的权限路由是否为空
      if (!store.state.permission.permissionList) {
          //如果没有，就通过dispatch获取一下用户信息
          store.dispatch('permission/FETCH_PERMISSION').then(() => {
              //信息获取成功 可以跳转自己想去的地址
              next({ path: to.path })
          })
      } else {
         //token存在，可访问路由也存在
          if (to.path !== '/login') {
              //直接放行
              next()
          } else {
              //访问login页面（不允许）---返回到form---地址（原地址）
              //关于fullPath，快速获取当前路径
              next(from.fullPath)
          }
      }
  }
})
//后置路由  
router.afterEach((to) => {
    console.log('后置路由触发');
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
  beforeCreate(){
    Vue.prototype.$bus=this
  },
  mounted() {
      console.log("ref",this)
  },
  render: h => h(App)
}).$mount('#app')
 