
import { userDb } from './user.js'
import jsonwebtoken from 'jsonwebtoken'
import { PRIVITE_KEY } from '../../config/index.js'
const EXPIRESD = 60 * 60 * 24 // 过期时间1天
import { v4 as uuidv4 } from 'uuid';

/**
 * @description: 修改用户的密码
 * @param {string} id
 * @param {string} name
 * @param {string} oldPassword
 * @param {string} newPassword
 * @return {Promise}
 */
export function changeUserPassword(id, name, oldPassword, newPassword) {
    return new Promise((resolve, reject) => {
        let userInfo = userDb.data.userInfo
        //判断用户的信息是否正确
        userInfo.forEach((element, index) => {
            if (element.uu_id == id && element.name == name && element.password == oldPassword) {
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
export function readUserInfoToLogin(name, password) {
    return new Promise((resolve, reject) => {
        // userInfo 用户的数据---为[{},{}]这种形式
        let userInfo = userDb.data.userInfo
        // 开始遍历
        userInfo.forEach((element, index) => {
            if (element.name == name && element.password == password) {
                let token = jsonwebtoken.sign({ name, password }, PRIVITE_KEY, { expiresIn: EXPIRESD });
                resolve({
                    code: 0,
                    msg: '登录成功',
                    data: {
                        token
                    }
                })
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
export function registerUser(userName, userPassword, userPhoneNumber) {
    return new Promise((reslove, reject) => {
        let userInfo = userDb.data.userInfo
        userInfo.forEach((el, index) => {
            if (el.name !== userName && el.phone !== userPhoneNumber) {
                if (index == userInfo.length - 1) {
                    userInfo.push({
                        uu_id: uuidv4(),
                        name: userName,
                        password: userPassword,
                        phone: userPhoneNumber
                    })
                    reslove({
                        code: 0,
                        msg: '注册成功' 
                    })
                    userDb.write()      
                }
            } else {
                if (index == userInfo.length - 1) {
                    reslove({
                        code: 1,
                        msg: '注册失败,当前用户存在哦'
                    })
                }
            }
        })
    })
}