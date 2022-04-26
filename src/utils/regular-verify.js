/**
 * 该文件储存的是需要使用正则对象验证的函数，返回值都是Boolean
 */
/**
 * @description: 验证手机号码是否合法
 * @param {Number} phone :手机号码
 * @return {Boolean}
 */
export function isMobilePhoneNumber(phone) {
  let phoneCodeVerification = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
  return phoneCodeVerification.test(phone);
}
/**
 * @description: 帐号是否合法---字母开头，允许6-16字节，允许字母数字下划线
 * @param {string} account
 * @return {boolean}
 */
export function isAccountLegal(account){
  let ALegal=/^[a-zA-Z][a-zA-Z0-9_]{5,15}$/
  return ALegal.test(account)
}
/**
 * @description: 密码校验--强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在 8-14 之间)
 * @param {string} password
 * @return {boolean}
 */ 
export function isPasswordLegal(password){
  let passLegal= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,14}$/
  return passLegal.test(password)
}