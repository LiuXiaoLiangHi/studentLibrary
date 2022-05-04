
import jsonwebtoken from 'jsonwebtoken'
import { v4 as uuidv4 } from 'uuid';

import { userDb } from './user.js'
import { PRIVITE_KEY } from '../../config/index.js'


const EXPIRESD = 60 * 60 * 24 // 过期时间1天

/**
 * @description: 修改用户的密码
 * @param {string} id
 * @param {string} name
 * @param {string} oldPassword
 * @param {string} newPassword
 * @return {Promise}
 */
export function changeUserPassword(id, userName, oldPassword, newPassword) {
    return new Promise((resolve, reject) => {
        let userInfo = userDb.data.userInfo
        //判断用户的信息是否正确
        userInfo.forEach((element, index) => {
            if (element.uu_id == id && element.userName == userName && element.password == oldPassword) {
                element.password = newPassword;
                userDb.write()
                resolve({
                    code: 0,
                    msg: '修改密码成功'
                })
            } else {
                if (index == userInfo.length - 1) {
                    resolve({
                        code: 1,
                        msg: '修改密码失败'
                    })
                }
            }
        });
    })
}
/**
 * @description: 读取文件的信息用于登录
 * @param {string} name
 * @param {string} password
 * @return {*}
 */
export function readUserInfoToLogin(userName, password) {
    return new Promise((resolve, reject) => {
        // userInfo 用户的数据---为[{},{}]这种形式
        let userInfo = userDb.data.userInfo
        // 开始遍历
        userInfo.forEach((element, index) => {
            if (element.userName == userName && element.password == password) {
                if (element.now_token == "") {
                    let token = jsonwebtoken.sign({ userName, password }, PRIVITE_KEY, { expiresIn: EXPIRESD });
                    element.now_token = token
                    userDb.write()
                    resolve({
                        code: 0,
                        msg: '登录成功',
                        data: {
                            token
                        }
                    })
                } else {
                    resolve({
                        code: 1,
                        msg: "检测到您在不同设备登录，当前系统无法做出相应的处理"
                    })
                }

            } else {
                if (index == userInfo.length - 1) {
                    resolve({
                        code: 1,
                        msg: '登录失败,用户名或密码错误'
                    })
                }
            }
        });
    })
}
/**
 * @description: 注册用户
 * @param {string} name
 * @param {string} password
 * @return {*}
 */
export function registerUser(userName, password, mobile) {
    return new Promise((reslove, reject) => {
        let userInfo = userDb.data.userInfo
        try {
            userInfo.forEach((el, index) => {
                if (el.userName === userName && el.mobile === mobile) {
                    throw new Error('Endlterative')
                } else {
                    if (index == userInfo.length - 1) {
                        userInfo.push({
                            uu_id: uuidv4(),
                            userName: userName,
                            password: password,
                            mobile: mobile
                        })
                        reslove({
                            code: 0,
                            msg: '注册成功'
                        })
                        userDb.write()
                    }
                }
            })
        } catch (error) {
            reslove({
                code: 1,
                msg: '注册失败,当前用户存在哦'
            })
            if (error.message != "Endlterative") throw error
        }
    })
}

/**
 * @description: 清除数据库的token----清除用户的在线状态
 * @param {*} userName
 * @param {*} uu_id
 * @return {*}
 */
export function clearNow_token(userName, uu_id) {
    return new Promise((resolve, reject) => {
        let userInfo = userDb.data.userInfo
        userInfo.forEach((element)=>{
            if (element.userName === userName && element.uu_id === uu_id) {
                resolve({
                    code:0,
                    msg:"ok",
                    data:{
                        msg:"退出成功",
                    }
                })  
                element.now_token='' 
                userDb.write()
                 
            }else{
                console.log("----------展示不考虑不匹配的情况（盗用其他人信息）-----------");
            }
        })
    
    })

}