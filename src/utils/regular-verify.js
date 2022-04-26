 /**
  * 该文件储存的是需要使用正则对象验证的函数，返回值都是Boolean
  */
/**
 * @description: 验证手机号码是否合法
 * @param {Number} phone :手机号码
 * @return {Boolean}
 */ 
export function isMobilePhoneNumber(phone){
    let phoneCodeVerification = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
    return phoneCodeVerification.test(phone);
}
 
