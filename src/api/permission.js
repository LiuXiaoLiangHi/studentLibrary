/*
 * @Author: liang
 * @Date: 2022-03-04 09:02:12
 * @LastEditors: liang
 * @LastEditTime: 2022-03-06 18:34:33
 * @Description: file content
 * @FilePath: \作业\my-home\src\api\permission.js
 */
// 引入封装的axios 
import axios from '@/config/httpConfig.js'
//登录 得到token
export function login(data) {
    return axios.post('/reader/searchaccount', data)
}
// 得到 当前登录用户的信息
export  function fetchPermission() {
     return  axios.get('/user/info')
     
}