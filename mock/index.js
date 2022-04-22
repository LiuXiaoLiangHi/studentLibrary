
/**
 * @description:该文件是json-server的入口文件
 * 引入的模块如下
 */

import jsonServer from 'json-server'
import expressJWT from 'express-jwt'
import bodyParser from 'body-parser'

import { PRIVITE_KEY } from './config/index.js'
import { changeUserPassword, readUserInfoToLogin } from './db/user/changeUserInfo.js'
import { userInfoInit } from './db/user/user.js'
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
    const { username, password } = req.body;
    let reslust = await readUserInfoToLogin(username, password)
    res.send(reslust)
})
 server.get("/info",(req,res,next)=>{
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
// server.post('/register', (req, res) => {
//     //获取注册的用户名与密码
//     const { userName, password } = req.body;
//     // 读取所有的用户信息
//     fs.readFile('./mock/db/db.json', 'utf-8', (error, data) => {
//         try {
//             //读取失败
//             if (error) {
//                 throw new Error('因为某种原因读取文件失败')
//                 return
//             }
//             return new Promise((resolve, reject) => {
//                 // 读取成功，将字符串转换为数组
//                 let userIfoArray = JSON.parse(data.toString()).userInfo;
//                 // 将新的数据添加到数组中
//                 userIfoArray.push({ userName, password })
//                 // 将对象转为 Json 格式并写入文件
//                 fs.writeFile('./mock/db/db.json', JSON.stringify({ "userInfo": userIfoArray }), (error) => {
//                     if (error) {
//                         throw new Error('因为某种原因写入文件失败')
//                         return
//                     }
//                     resolve({ code: 0, warn: "注册成功" })
//                 })
//             }).then((resData) => {
//                 res.send(resData)
//             })
//         } catch (error) {
//             console.log(error);
//             res.statusCode = 500;
//             res.send({
//                 code: -1,
//                 errMessages: '服务端错误'
//             })
//         }
//     }
//     )
// })
// 修改用户信息接口只支持修改密码
server.put('/update', async (req, res) => {
    //     //获取需要修改的用户名与密码
    const { uu_id, userName, oldPassword, newPassword } = req.body;
    let reslust = await changeUserPassword(uu_id,userName,oldPassword,newPassword)
    res.send(reslust)
})
//     console.log(userName, oldPassword, newPassword);
//     fs.readFile('./mock/db/db.json', 'utf-8', (error, data) => {
//         try {
//             //读取失败
//             if (error) {
//                 throw new Error('因为某种原因读取文件失败')
//                 return
//             }
//             return new Promise((resolve, reject) => {
//                 // 读取成功，将字符串转换为对象后进行遍历
//                 let userIfoArray = JSON.parse(data.toString()).userInfo;
//                 console.log(userIfoArray);
//                 userIfoArray.forEach((element, index) => {
//                     if (element.userName == userName && element.password == oldPassword) {
//                         console.log('sdfsd');
//                         userIfoArray[index].password = newPassword
//                         fs.writeFile('./mock/db/db.json', JSON.stringify({ "userInfo": userIfoArray }), (error) => {
//                             if (error) {
//                                 throw new Error('因为某种原因写入文件失败')
//                                 return
//                             }
//                             resolve({ code: 0, warn: "修改密码成功" })
//                         })
//                     }else{
//                         if(index==userIfoArray.length-1){
//                             resolve({
//                                 code: -1,
//                                 errMessages: '用户名或密码错误请检查后重新输入'
//                             })
//                         }
//                     }
//                 })
//             })
//                 .then((resData) => {
//                     res.send(resData)
//                 })
//         } catch (error) {
//             console.log(error);
//             res.statusCode = 500;
//             res.send({
//                 code: -1,
//                 errMessages: '服务端错误'
//             })
//         }
//     })
// })
//删除用户的接口
// server.delete()
server.listen(3000, () => {
    console.log('JSON Server is running in http://localhost:3000')
})