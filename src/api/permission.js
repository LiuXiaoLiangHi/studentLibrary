/*
 *  该文件存放的是得到用户信息方面的 api
 *  
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