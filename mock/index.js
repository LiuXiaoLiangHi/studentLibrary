/**
 * @description:该文件是json-server的入口文件
 * 引入的模块如下
 */

import jsonServer from 'json-server'
import expressJWT from 'express-jwt'
import bodyParser from 'body-parser'

import { PRIVITE_KEY } from './config/index.js'
import { changeUserPassword, readUserInfoToLogin,registerUser,clearNow_token} from './db/user/changeUserInfo.js'
import { userInfoInit } from './db/user/user.js'
import {param2Obj} from './utils/index.js'
// 创建server
let server = jsonServer.create()
// 允许使用中间件
let middlewares = jsonServer.defaults()

// 使用如下中间件来处理res.body等
server.use(middlewares)
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
// Add custom routes before JSON Server router
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
//获取用户数据
userInfoInit()
// //登录接口
server.post('/login', async (req, res) => {
    // 从请求体中获取用户名和密码
    const { userName, password } = req.body;
    let result = await readUserInfoToLogin(userName, password)
    res.send(result)
})
 server.get("/info",(req,res,next)=>{
  
  let params= param2Obj(req.url)
  let {userName,uu_id}=params
  // ----从数据库查找相应的数据进行返回---
    res.send({
      "code":"0",
      data:{
        "avatar": "https://ts1.cn.mm.bing.net/th?id=OIP-C.ug9M_rylVDzSq9VElI-dxgHaC7&w=183&h=170&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        "name": "admin",
        "roles": ["admin"],
        "router":["index","students-management","students-statistical","students-classList","students-information",
        "book-management","book-borrow","book-return","book-statistical",
        "book-information","admin-management","admin-center",
        "admin-permission","admin-userList","systemSet"
        ]
      }
    })
  })
// 注册接口
server.post('/register', async(req, res) => {
  console.log(req.body);
  const {userName,mobile,password} =req.body
  let result= await registerUser(userName,password,mobile)
  res.send(result)
})
// 修改用户信息接口只支持修改密码
server.put('/update', async (req, res) => {
    //     //获取需要修改的用户名与密码
    const { uu_id, userName, oldPassword, newPassword } = req.body;
    let result = await changeUserPassword(uu_id,userName,oldPassword,newPassword)
    res.send(result)
})
server.post('/logout',async (req,res)=>{
  const { userName, uu_id } = req.body;
  let result= await clearNow_token()
  console.log(result);
  res.send(result)
})
//删除用户的接口
// server.delete()
server.listen(3000, () => {
    console.log('JSON Server is running in http://localhost:3000')
})