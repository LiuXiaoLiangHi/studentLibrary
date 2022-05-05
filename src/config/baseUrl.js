/*
  *  该文件存放的是部分全局配置
  *
*/

// 判断 是否是生产环境 ，是 绝对路径则为 /  ，其它环境均为 /api
const baseUrl = process.env.NODE_ENV === 'production' ? '/' : '/api'
export default baseUrl
