/*
 *   该文件存放的是得到home页面的部分信息 api
 * 
 */
// 引入封装的axios 
import axios from '@/config/httpConfig.js'
export function getMessage(){
    return  axios.get('/getMessage')
}