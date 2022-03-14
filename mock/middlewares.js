/*
 * @Author: liang
 * @Date: 2022-03-05 14:10:18
 * @LastEditors: liang
 * @LastEditTime: 2022-03-06 18:23:11
 * @Description: file content
 * @FilePath: \作业\middlewares.js
 */
module.exports=(request,response,next)=>{
    if(request.method==='POST'){
        request.method='GET'
       next()
    }else{
        next()
    }
}