/*
 * @Author: liang
 * @Date: 2022-02-25 09:31:31
 * @LastEditors: liang
 * @LastEditTime: 2022-03-04 14:34:10
 * @Description: file content
 * @FilePath: \作业\my-home\src\store\mutations.js
 */
export default {
    //登录  将token保存
    LOGIN_IN(state, token) {
        state.UserToken = token
    },
    //退出登录  删除token
    LOGIN_OUT(state) {
        state.UserToken = ''
    },
    //切换导航栏
    // toggleNavCollapse(state) {
    //     state.isSidebarNavCollapse = !state.isSidebarNavCollapse
    // },
    //由于设置面包屑 （当前路由匹配符合的数组）
    // setCrumbList(state, list) {
    //     state.crumbList = list
    // }
}
