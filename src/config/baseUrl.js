/*
 * @Author: liang
 * @Date: 2022-02-25 09:31:31
 * @LastEditors: liang
 * @LastEditTime: 2022-02-27 18:51:37
 * @Description: file content
 * @FilePath: \vue-cli3.0-vueadmin\src\config\baseUrl.js
 */
// 判断 是否是生产环境 ，是 绝对路径则为 /   
// 其它环境均为 /api
//将绝对路径暴露出去
const baseUrl = process.env.NODE_ENV === 'production' ? '/' : '/api'
export default baseUrl
