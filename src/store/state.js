/*
 * @Author: liang
 * @Date: 2022-02-25 09:31:31
 * @LastEditors: liang
 * @LastEditTime: 2022-03-01 20:50:00
 * @Description: file content
 * @FilePath: \vue-cli3.0-vueadmin\src\store\state.js
 */
export default {
    // 得到token
    get UserToken() {
        return localStorage.getItem('token')
    },
    // 将后端生成的token 写入本地
    set UserToken(value) {
        localStorage.setItem('token', value)
    },
    /* 导航菜单是否折叠 */
    isSidebarNavCollapse: false,
    /* 面包屑导航列表 */
    crumbList: []
}
