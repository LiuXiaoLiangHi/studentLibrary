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
        account: ''/** 用户角色 */
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
        //设置 可访问路由（可访问的页面）
        SET_PERMISSION(state, routes) {
            state.permissionList = routes
        },
        //清除 可访问路由
        CLEAR_PERMISSION(state) {
            state.permissionList = null
        },
        // 设置左边导航栏菜单（用户真实权限）
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
            // console.log('获取权限');
            let permissionList = await fetchPermission()
            // console.log(state);
            console.log(permissionList);
//             //permissionList  当前登录用户的全部信息    
//             // 头像 avatar: "https://randy168.com/1533262153771.gif"
//             //当前所有的路由页面 （根据 用户权险改变）
//             // data: (14) ['index', 'order-manage', 'order-list', 'product-manage', 'product-list', 'review-manage', 'return-goods', 'goods', 'goods-list', 'goods-classify', 'permission', 'user-manage', 'role-manage', 'menu-manage']
//             //  当前用户
//             // name: "admin" 或custom
//             // roles: ['admin']
//             // 设置 用户以及头像
            commit('SET_AVATAR', permissionList.avatar)
            commit('SET_ACCOUNT', permissionList.name)
//             console.log("正在设置头像以及用户----avatar-----name");
// /**
// * @method: recursionRouter()
// * @description: 对路由进行过滤 
// * @param {  permissionList.data ---- 当前用户的权限全部路由 [Array] }  
// * @param {  dynamicRouter   -----动态路由集合 [{Object},{OBject},需要进行权限判断] } 
// * @return { routes  -----过滤后的路由根据权限而定，不包含home路由}
// */
            let routes = recursionRouter(permissionList.router, dynamicRouter)
            console.log('正在过滤路由');
            console.log('routes---过滤后的路由', routes);

// /**
// * @description:  MainContainer 由 0级导航栏对象（空路径）------- [{chilred{Array}},{},{}{}],包含其子路由组成的数组
// */
            let MainContainer = DynamicRoutes.find(v => v.path === '')
// /**
// * @description:  children  由一级导航栏组成的对象[{home}{orede}] 
// */
            // console.log('MainContainer', MainContainer);

            let children = MainContainer.children
            
            // console.log('children', children);
            // console.log('dynamicRouter', dynamicRouter);

//             // 设置权限
//             console.log('正在设置权限（完整权限，不管是什么用户----Array.length==4----）-----control_list');
            commit('SET_CONTROL_LIST', [...children, ...dynamicRouter])
//             // console.log(  'state.control_list',  state.control_list);
            children.push(...routes)
//             console.log('第二次children', children);
//             //设置左侧导航栏菜单
//             console.log('正在设置左侧导航栏---sidebarMenu');
            commit('SET_MENU', children)

//             console.log('router 第一次',router);
            
//             //将/login作为初始路由
            let initialRoutes = router.options.routes
//             console.log('initialRoutes',initialRoutes);
//             //动态更新路由
            router.addRoutes(DynamicRoutes)
//             console.log('router 第二次',router);
//             // 设置权限（可访问路由）
//             console.log('正在设置当前可访问路由----state.permissionList');
            commit('SET_PERMISSION', [...initialRoutes, ...DynamicRoutes])
//             console.log('state.permissionList',state.permissionList);
           
        }
    }
}
