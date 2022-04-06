/*
 * @Author: liang
 * @Date: 2022-03-14 08:31:06
 * @LastEditors: liang
 * @LastEditTime: 2022-03-18 15:31:43
 * @Description: file content
 * @FilePath: \my-home\src\api\homeList.js
 */
/*
 *   该文件存放的是得到home页面的部分信息 api
 * 
 */
// 引入封装的axios 
import axios from '@/config/httpConfig.js'
export function getMessage(){
    return  axios.get('/api/getMessage')
}
export function getSchedule(){
    return axios.get('/api/getSchedule')
}