import jsonwebtoken from 'jsonwebtoken'
import { v4 as uuidv4 } from 'uuid';

import { userDb } from './user.js'
import { PRIVITE_KEY } from '../../config/index.js'


const EXPIRESD = 60 * 60 * 24 // 过期时间1天

/**
 * @description: 修改用户的密码
 * @param {string} id  用户的id
 * @param {string} name  用户名
 * @param {string} oldPassword  用户原来的密码
 * @param {string} newPassword  新密码
 * @return {Promise<object>}
 */
export function changeUserPassword(id, userName, oldPassword, newPassword) {
    return new Promise((resolve, reject) => {
        // 获取所有用户的信息
        let userInfo = userDb.data.userInfo
        //遍历用户信息，找到需要修改的一项
        userInfo.forEach((element, index) => {
            if (element.uu_id == id && element.userName == userName && element.password == oldPassword) {
                // 将新密码赋替换新密码
                element.password = newPassword;
                // 写入数据库
                userDb.write()
                //返回响应的数据
                resolve({
                    code: 0,
                    msg: '修改密码成功'
                })
            } else {
                if (index == userInfo.length - 1) {
                    // 匹配失败，没有找到对应的用户数据
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
 * @description:  登录
 * @param {string} userName 用户名
 * @param {string} password 用户密码
 * @return {Promise<object>}
 */
export function readUserInfoToLogin(userName, password) {
    return new Promise((resolve, reject) => {
        // 获取所有用户的信息
        let userInfo = userDb.data.userInfo
        //遍历用户信息，找到需要匹配的一项
        userInfo.forEach((element, index) => {
            if (element.userName == userName && element.password == password) {
                // 如果用户没有登录过
                if (element.now_token == "") {
                    // 生成token
                    let token = jsonwebtoken.sign({
                        userName,
                        password
                    }, PRIVITE_KEY, {
                        expiresIn: EXPIRESD
                    });
                    //赋值给now_token，证明用户已经登录过
                    element.now_token = token
                    // 写入数据库
                    userDb.write()
                    // 返回响应的数据
                    resolve({
                        code: 0,
                        msg: '登录成功',
                        data: {
                            userName,
                            uu_id: element.uu_id,
                            token
                        }
                    })
                } else {
                    // 检测到用户登录过，此次登录换了浏览器或者设备
                    // 返回响应的数据-----后续会对该情况进行处理
                    resolve({
                        code: 1,
                        msg: "检测到您在不同设备登录，当前系统无法做出相应的处理"
                    })
                }
            } else {
                // 用户名或者密码错误
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
 * @param {string} userName 用户名
 * @param {string} password 用户密码
 * @param {number} mobile  手机号
 * @return {Promise<object>}
 */
export function registerUser(userName, password, mobile) {
    return new Promise((reslove, reject) => {
        // 获取所有用户的信息
        let userInfo = userDb.data.userInfo
        try {
            //遍历用户信息，找到需要修改的一项
            userInfo.forEach((el, index) => {
                if (el.userName === userName && el.mobile === mobile) {
                    // 如果发现当前用户已经被注册，直接抛出错误，终止遍历
                    throw new Error('Endlterative')
                } else {
                    if (index == userInfo.length - 1) {
                        // 当前信息可以注册----开始注册
                        userInfo.push({
                            uu_id: uuidv4(),
                            userName,
                            password,
                            mobile,
                            now_token: "",
                            avatar: "",
                            roles: "general_admin",
                            isAllowDeleteUSer: true
                        })
                        // 写入数据库
                        userDb.write()
                        // 返回响应的数据
                        reslove({
                            code: 0,
                            msg: '注册成功'
                        })

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
 * @return {Promise<object>}
 */
export function clearNow_token(userName, uu_id) {
    return new Promise((resolve, reject) => {
        // 获取所有用户的信息
        let userInfo = userDb.data.userInfo
        //遍历用户信息，找到需要匹配的一项
        userInfo.forEach((element, index) => {
            if (element.userName === userName && element.uu_id === uu_id) {
                // 找了那一项，清除相应的now_token
                element.now_token = ''
                // 更新数据库
                userDb.write()
                resolve({
                    code: 0,
                    msg: "退出成功，ok"

                })
            } else {
                // 没有匹配到相应的数据
                if (index == userInfo.length - 1) {
                    resolve({
                        code: 1,
                        msg: '您当前信息有误哦'
                    })
                }
            }
        })

    })
}

/**
 * @description: 得到相应的用户信息
 * @param {*} userName 用户名
 * @param {*} uu_id 用户id
 * @return {Promise<object>}
 */
export function getUserInfo(userName, uu_id) {
    return new Promise((resolve, reject) => {
        // 获取所有用户的信息
        let userInfo = userDb.data.userInfo
        //遍历用户信息，找到需要匹配的一项
        userInfo.forEach((element, index) => {
            if (element.userName == userName && element.uu_id == uu_id) {
                // 从匹配到的一项中获取需要的数据
                const { uu_id, userName, mobile, avatar, roles, isAllowDeleteUSer, router } = element
                // 返回响应的数据
                resolve({
                    code: 0,
                    msg: '获取用户信息成功',
                    data: {
                        uu_id,
                        userName,
                        mobile,
                        avatar,
                        roles,
                        isAllowDeleteUSer,
                        router
                    }

                })
            } else {
                // 匹配失败
                if (index == userInfo.length - 1) {
                    resolve({
                        code: 1,
                        msg: '权限不足，获取用户信息失败'
                    })
                }
            }
        })
    })
}