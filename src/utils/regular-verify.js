/**
 * 该文件储存的是需要使用正则对象验证的函数
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
export function isAccountLegal(account) {
  let ALegal = /^[a-zA-Z][a-zA-Z0-9_]{5,15}$/
  return ALegal.test(account)
}
/**
 * @description: 密码校验--强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在 8-14 之间)
 * @param {string} password
 * @return {boolean}
 */
export function isPasswordLegal(password) {
  let passLegal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,14}$/
  return passLegal.test(password)
}
/**
 * @description: 校验用户名，并根据情况做出相应的处理
 * @param {*} rule ---表单规则
 * @param {*} value --- 需要验证的value
 * @param {*} callback  回调函数
 * @return {*}
 */
export const validateUserName = (rule, value, callback) => {
  if (value.length == "") {
    callback(new Error("用户名不能为空哦"));
  }
  // 如果账号不合法
  if (!isAccountLegal(value)) {
    callback(
      new Error("账号格式错误,账号需要字母开头,长度为6~16个字符哦")
    );
  }
}

export const validatePassword = (rule, value, callback) => {
  if (value == "") {
    callback(new Error("密码不能为空哦"));
  }
  if (!isPasswordLegal(value)) {
    callback(
      new Error("密码必须是大小写字母和数字的组合，且不能有特殊符号哦")
    );
  }
};
export const validatePhone = (rule, value, callback) => {
  if (value == "") {
    callback(new Error("手机号不能为空哦"));
  }
  if (!isMobilePhoneNumber(value)) {
    callback(
      new Error("手机号格式错误哦")
    );
  }
};
export const validateAuthCode = (rule, value, callback) => {
  if (value == "") {
    callback(new Error("验证码不能为空哦"));
  }
  if ((value.length!==6)) {
    callback(
      new Error("验证码格式为6位数字哦")
    );
  }
}