/*
 * @Author: liang
 * @Date: 2022-03-04 08:53:38
 * @LastEditors: liang
 * @LastEditTime: 2022-03-09 11:04:06
 * @Description: file content
 * @FilePath: \作业\my-home\src\config\httpConfig.js
 */
import axios from 'axios'
import store from '../store'
import baseUrl from './baseUrl'
import { Message } from 'element-ui'

const http = {}
let instance = axios.create({
    timeout: 5000,
    baseURL:baseUrl,
    validateStatus(status) {
        switch (status) {
            case 400:
                Message.error('请求出错')
                break
            case 401:
                Message.warning({
                    message: '授权失败，请重新登录'
                })
                // token失效， 清除 登录用户信息 
                //触发 login—out 方法
                store.commit('LOGIN_OUT')
                //  1秒后刷新页面 
                setTimeout(() => {
                    window.location.reload()
                }, 1000)
                return
            case 403:
                Message.warning({
                    message: '拒绝访问'
                })
                break
            case 404:
                Message.warning({
                    message: '请求错误,未找到该资源'
                })
                break
            case 500:
                Message.warning({
                    message: '服务端错误'
                })
                break
        }
        //如 状态码为 200到300则成功
         
        return status >= 200 && status < 300
    }
})

// 添加请求拦截器
instance.interceptors.request.use(
    function (config) {
        // 请求头添加token
        if (store.state.UserToken) {
            config.headers.Authorization = `Bearer ${store.state.UserToken}`
        }
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

 // 响应拦截器即异常处理
instance.interceptors.response.use(
    response => {
        return response.data
    },
    err => {if (err && err.response) {
        console.log(err);
        } else {
            err.message = '连接服务器失败'
        }
        // Message.error({
        //     message: err.message
        // })
        return Promise.reject(err.response)
    }
)
http.get = function (url, options) {
    return new Promise((resolve, reject) => {
        instance
            .get(url, options)
            .then(response => {

                if (response.code === 0  || response.code ==0) {
                    resolve(response)
                } else {
                    Message.error({
                        message: response.msg
                    })
                    reject(response.msg)
                }
            })
            .catch(e => {
                console.log(e)
            })
    })
}

http.post = function (url, data, options) {
    return new Promise((resolve, reject) => {
        instance.post(url, data, options)
            .then(response => {
                if (response.code === 0 ||  response.code ==0) {
                    resolve(response)
                } else {
                    Message.error({
                        message: response.msg
                    })
                    reject(response.message)
                }
            })
            .catch(e => {
                console.log(e)
            })
    })
}

export default http
