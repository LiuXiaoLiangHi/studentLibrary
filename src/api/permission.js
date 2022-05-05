/*
 *  该文件存放的是得到用户信息方面的 api
 *  
*/
// 引入封装的axios 
import axios from '@/config/httpConfig.js'
//登录 得到token和一些用户信息
export function login(data) {
    return axios.post('/login', data)
}
// 得到当前登录用户的信息
export  function fetchPermission(data) {
     return  axios.get('/info', {params:{
         ...data
     }})
}
//用户注册
export function fetchRegister(data){
    return axios.post('/register',data)
}
// 退出登录
export function fetchLogout(data){
    return axios.post('/logout',data)
}