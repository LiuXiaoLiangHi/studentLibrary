/*
 * @Author: liang
 * @Date: 2022-03-18 09:50:57
 * @LastEditors: liang
 * @LastEditTime: 2022-03-31 19:11:59
 * @Description: file content
 * @FilePath: \my-home\src\api\createCode.js
 */
import axios from 'axios'
export function getLoginCode(){
     return axios.get('/api/api/getLoginCode')
}