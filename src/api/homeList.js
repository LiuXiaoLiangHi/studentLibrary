/*
 * @Author: liang
 * @Date: 2022-03-12 08:48:37
 * @LastEditors: liang
 * @LastEditTime: 2022-03-12 08:51:50
 * @Description: file content
 * @FilePath: \作业\my-home\src\api\homeList.js
 */
// 引入封装的axios 
import axios from '@/config/httpConfig.js'
export function getMessage(){
    return  axios.get('/getMessage')
}