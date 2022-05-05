/**
 * @description:该文件是json-server的入口文件
 * 引入的模块如下
 */

import jsonServer from 'json-server'
import expressJWT from 'express-jwt'
import bodyParser from 'body-parser'

import { PRIVITE_KEY } from './config/index.js'
import { changeUserPassword, readUserInfoToLogin, registerUser, clearNow_token, getUserInfo } from './db/user/changeUserInfo.js'
import { userInfoInit } from './db/user/user.js'
import { param2Obj } from './utils/index.js'
// 创建server
let server = jsonServer.create()
// 允许使用中间件
let middlewares = jsonServer.defaults()

// 使用如下中间件来处理res.body等
server.use(middlewares)
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
// Add custom routes before JSON Server router

// 路由验证是否有权限，------后期会分开处理 token过期和token错误的情况 
server.use(expressJWT({
  secret: PRIVITE_KEY,
  algorithms: ['HS256'],
  getToken(req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      return req.headers.authorization.split(' ')[1];
    } else if (req.query && req.query.token) {
      return req.query.token;
    }
    return null
  }
}).unless({
  path: ['/login', '/register'] //⽩白名单,除了了这⾥里里写的地址，其他的URL都需要验证
}))
//初始化数据库-----获取用户的信息
userInfoInit()
// //登录接口
server.post('/login', async (req, res) => {
  // 从请求体中获取用户名和密码
  const { userName, password } = req.body;
  // 调用对应的方法去获取结果
  let result = await readUserInfoToLogin(userName, password)
  // 将结果返回
  res.send(result)
})
// 获取用户信息接口
server.get("/info", async (req, res, next) => {
  // 解析get请求的params参数
  let params = param2Obj(req.url)
  // 获取需要获取到用户名和id
  let { userName, uu_id } = params
  // 调用对应的方法去获取结果
  let result = await getUserInfo(userName, uu_id)
  // 将结果返回
  res.send(result)
})
// 注册接口
server.post('/register', async (req, res) => {
  // 从请求体中获取用户名和密码和手机号
  const { userName, mobile, password } = req.body
  // 调用对应的方法去获取结果
  let result = await registerUser(userName, password, mobile)
  // 将结果返回
  res.send(result)
})
// 修改用户信息接口只支持修改密码
server.put('/update', async (req, res) => {
  // 从请求体中获取用户名和id和和密码和旧密码
  const { uu_id, userName, oldPassword, newPassword } = req.body;
  // 调用对应的方法去获取结果
  let result = await changeUserPassword(uu_id, userName, oldPassword, newPassword)
  // 将结果返回
  res.send(result)
})
// 退出登录接口
server.post('/logout', async (req, res) => {
  // 从请求体中获取用户名和id 
  const { userName, uu_id } = req.body;
  // 调用对应的方法去获取结果
  let result = await clearNow_token(userName, uu_id)
  // 将结果返回
  res.send(result)
})

//删除用户的接口
// server.delete()

// 服务启动在3000端口中
server.listen(3000, () => {
  console.log('JSON Server is running in http://localhost:3000')
})