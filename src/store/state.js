export default {
    //本地得到token
    get UserToken() {
        return localStorage.getItem('token')
    },
    //将后端生成的token写入本地
    set UserToken(value) {
        localStorage.setItem('token', value)
    },
    /* 导航菜单是否折叠 */
    isSidebarNavCollapse: false,
    /* 面包屑导航列表 */
    crumbList: [],
    // 正在开发窗口是否显示
    // isShowDevelopmentDialog:false
}
