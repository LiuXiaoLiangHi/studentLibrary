/*
 * @Author: liang
 * @Description:  权限数据模块，用于存放用户信息及权限
 */
import { fetchPermission } from '@/api/permission'
import router, { DynamicRoutes } from '@/router/index'
import { recursionRouter } from '@/utils/recursion-router'
import dynamicRouter from '@/router/dynamic-router'

export default {
    //  允许使用别名（命名空间）
    namespaced: true,
    state: {
        permissionList: null /** 所有路由，初始路由加动态路由 */,
        sidebarMenu: [] /** 左侧导航菜单 */,
        currentMenu: '' /** 当前路由，不包含http://localhost:8080/#/*/,
        control_list: [] /** 完整的权限列表 */,
        avatar: ''/** 头像 */,
        account: '',/** 用户角色 */
        uu_id:'' //用户id
    },
    getters: {},
    mutations: {
        //设置头像
        SET_AVATAR(state, avatar) {
            state.avatar = avatar
        },
        //设置用户角色
        SET_ACCOUNT(state, account) {
            state.account = account
        },
        // 设置用户的id
        SET_UU_ID(state,uu_id){
            state.uu_id = uu_id
        },
        //设置可访问路由（可访问的页面）
        SET_PERMISSION(state, routes) {
            state.permissionList = routes
        },
        //清可访问路由
        CLEAR_PERMISSION(state) {
            state.permissionList = null
        },
        //设置左边导航栏菜单（用户真实权限）
        SET_MENU(state, menu) {
            state.sidebarMenu = menu
        },
        //清除左侧菜单
        CLEAR_MENU(state) {
            state.sidebarMenu = []
        },
        //设置当前active导航菜单 （当前路由）----/orede/list
        SET_CURRENT_MENU(state, currentMenu) {
            state.currentMenu = currentMenu
        },
        //设置完整的权限列表
        SET_CONTROL_LIST(state, list) {
            state.control_list = list
        }
    },
    actions: {
        // 获取权限
        async FETCH_PERMISSION({ commit }) {
            console.log('开始获取权限');
            // 初步获取userName和id
            let userName2=this.state.permission.account
            let uu_id2 =this.state.permission.uu_id

            if(userName2==''||uu_id2==''){
                 // 从本地获取信息
                 let  {userName,uu_id} =JSON.parse( this.state.HISTORY__LIST)
                 commit('SET_ACCOUNT',userName)
                 commit('SET_UU_ID' ,uu_id)
            }

            let userName=this.state.permission.account
            let uu_id =this.state.permission.uu_id
            // 正式向服务器获取相应的数据
            let permissionList = await fetchPermission({userName,uu_id})
           
            console.log("当前用户的信息如下", permissionList);
            console.log("开始设置头像与用户名和id");
            commit('SET_AVATAR', permissionList.avatar)
            commit('SET_ACCOUNT', permissionList.userName)
            commit('SET_UU_ID',permissionList.uu_id)
            
            let routes = recursionRouter(permissionList.router, dynamicRouter)
            console.log('正在过滤路由--routes---过滤后的路由', routes);

            // MainContainer 由 0级导航栏对象（空路径）------- [{chilred{Array}},{},{}{}],包含其子路由组成的数组
            let MainContainer = DynamicRoutes.find(v => v.path === '')
            // children  由一级导航栏组成的对象[{home}{orede}] 
            let children = MainContainer.children
            console.log('正在设置权限（完整权限，不管是什么用户----Array.length==4----）-----control_list');

            commit('SET_CONTROL_LIST', [...children, ...dynamicRouter])

            children.push(...routes)

            console.log('正在设置左侧导航栏---sidebarMenu');
            commit('SET_MENU', children)
           //将/login作为初始路由
            let initialRoutes = router.options.routes
            //动态更新路由
            router.addRoutes(DynamicRoutes)
            console.log('正在设置当前可访问路由----state.permissionList');
            commit('SET_PERMISSION', [...initialRoutes, ...DynamicRoutes])
        }
    }
}
