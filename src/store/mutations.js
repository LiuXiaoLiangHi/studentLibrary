export default {
    // 把用户信息储存在本地
    LOGIN_IN(state, userInfo) {
        state.HISTORY__LIST =  JSON.stringify(userInfo)
    },
    // 清除本地用户信息
    LOGIN_OUT(state) {
        state.HISTORY__LIST = ''
    },
    // 切换导航栏折叠的状态
    toggleNavCollapse(state) {
        state.isSidebarNavCollapse = !state.isSidebarNavCollapse
    },
    //由于设置面包屑 （当前路由匹配符合的数组）
    setCrumbList(state, list) {
        state.crumbList = list
    },
    //切换正在开发的窗口是否显示
    // open_Show_Development_Dialog(state){
    //      state.isShowDevelopmentDialog=true
    // },
    // close_Show_Development_Dialog(state){
    //     state.isShowDevelopmentDialog=false
    // }
}
