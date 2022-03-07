/*
 * @Author: liang
 * @Date: 2022-02-21 15:00:38
 * @LastEditors: liang
 * @LastEditTime: 2022-03-05 13:34:55
 * @Description: file content
 * @FilePath: \作业\my-home\vue.config.js
 */
const path = require('path');//引入path模块
function resolve(dir) {
    return path.join(__dirname, dir)//path.join(__dirname)设置绝对路径
}
const proxyTargetMap = {
    school: 'http://10.20.142.184:3000',
    test: 'http://localhost:5000',
    prod:'xxxxxx'
}
let proxyTarget = proxyTargetMap[process.env.API_TYPE] || proxyTargetMap.prod
let publicPath = process.env.NODE_ENV === 'production' ? '/' : '/'


module.exports = {
    publicPath: publicPath,
    //设置别名
    chainWebpack: (config) => {
        // 移除 prefetch 插件,解决组件懒加载失效的问题
        config.plugins.delete('prefetch')
        config.resolve.alias
            // 设置src的别名
            .set('@', resolve('./src'))
            //设置commopens的别名
            .set('components', resolve('./src/components'))
            //同下
            .set('views', resolve('./src/views'))
            .set('assets', resolve('./src/assets'))
        //set第一个参数：设置的别名，第二个参数：设置的路径

    },
    //关闭eslint
    devServer: {
        
        disableHostCheck: true,
        open: process.platform === 'darwin',
        host: 'localhost',
        port: 8080,
        https: false,
        hotOnly: false,
        // eslint-disable-next-line no-dupe-keys
        open: true,
        // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
        proxy: {
            '/api': {
                target: proxyTarget,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        before: app => {}
    },

}
