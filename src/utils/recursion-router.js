/*
 * @Author: liang
 * @Date: 2022-02-25 09:31:31
 * @LastEditors: liang
 * @LastEditTime: 2022-03-06 18:04:23
 * @Description: file content
 * @FilePath: \作业\my-home\src\utils\recursion-router.js
 */
/**
 *
 * @param  {Array} userRouter 后台返回的用户权限json
 * @param  {Array} allRouter  前端配置好的所有动态路由的集合
 * @return {Array} realRoutes 过滤后的路由
 */
// 路由递归  过滤 路由
export function recursionRouter(userRouter = [], allRouter = []) {
    var realRoutes =
        //对 动态路由进行过滤
        // item 为 allpRouter 的每一个 路由
        // 检测数组 userRouter 是否包含 item.name

        allRouter.filter(item => userRouter.includes(item.name))
            // map 返回一个新数组
            .map(item => ({
                //将item 进行解构
                ...item,
                children: item.children
                    ? recursionRouter(userRouter, item.children)
                    : null
            }))
    return realRoutes
}
