
import axios from 'axios'
//向后台请求验证码
export function getLoginCode(){
     return axios.get('/getLoginCode')
}