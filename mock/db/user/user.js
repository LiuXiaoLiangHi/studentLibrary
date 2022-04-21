/*
 * @Author: liang
 * @Date: 2022-04-18 14:25:41
 * @LastEditors: LAPTOP-LD525C2O
 * @LastEditTime: 2022-04-21 16:04:46
 * @Description: file content
 * @FilePath: \jsonServerMock\mock\db\user\user.js
 */
 

/**
 * 改文件存储的是lowdb数据库的核心
 * -----lowdb---数据库init（）
 * 以及各类适配器
 */
import { LowSync, JSONFileSync } from 'lowdb'



const adapter = new JSONFileSync('./db/user/userInfo.json')
export let userDb ;
/**
 * @description: 用户信息初始化
 * @return {*}
 */
export function userInfoInit() {
  console.log('用户数据开始被加载');
  userDb = new LowSync(adapter)
  //开始读取 userInfo.json内的内容
  userDb.read()
}