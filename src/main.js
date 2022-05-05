import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from './config/httpConfig'  // 引入二次封装的axios
import '@/style/css/index.less' //引入部分样式
import '@/icons' // 全局注册svg组件
import '@/components/UndevelopedFeatures/index.js' // 全局注册功能未开发弹窗组件

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(ElementUI)

//前置路由判断用户是否登录
router.beforeEach((to, from, next) => {
    console.log('前置路由触发');
    //如果在本地内没有发现用户的信息
    if (!store.state.HISTORY__LIST) {
        console.log('当前页面匹配的路由如下（matchedd)', to.matched);
        if (to.matched.length > 0 && !to.matched.some(record => record.meta.requiresAuth)) {
            next()
        } else {
            // 否则进行强制路由跳转到 login页面进行登录
            next({ path: '/login' })
        }
        //接下来处理 有token 的情况 
    } else {
        console.log('本地浏览器发现用户信息,开始获取权限');
        //判断用户是否初次登录
        if (!store.state.permission.permissionList) {
            // 初次登录
            store.dispatch('permission/FETCH_PERMISSION').then(() => {
                //信息获取成功 可以跳转自己想去的地址
                next({ path: to.path })
            })
        } else {
            // 用户未离开过页面---所有权限都在，无需进行其它处理
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
    beforeCreate() {
        Vue.prototype.$bus = this
    },
    render: h => h(App)
}).$mount('#app')
