export default {
    // 得到本地存储localStorage的用户信息
    get HISTORY__LIST() {
        return localStorage.getItem('HISTORY__LIST')
    },
    // 设置本地存储的用户信息
    set HISTORY__LIST(value) {
          localStorage.setItem('HISTORY__LIST',value)
    },
    /* 导航菜单是否折叠 */
    isSidebarNavCollapse: false,
    /* 面包屑导航列表 */
    crumbList: [],
    // 正在开发窗口是否显示
    // isShowDevelopmentDialog:false
}
