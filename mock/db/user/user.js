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