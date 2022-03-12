/*
 * @Author: liang
 * @Date: 2022-03-12 08:55:18
 * @LastEditors: liang
 * @LastEditTime: 2022-03-12 09:25:28
 * @Description: file content
 * @FilePath: \作业\my-home\src\store\modules\homeMessage.js
 */
import { getMessage} from '@/api/homeList'
export default {
    //  允许使用别名（命名空间）
    namespaced: true,

    state: {
        // 通知公告信息
        advice: []
    },
    getters: {},
    mutations: {
        SET_ADVICE(state, advice) {
            state.advice = advice
        }
    },
    actions: {
        //home页获取相应的信息
        async GET_SOMEADVICE({ commit }) {
           let advice=await  getMessage()
           commit('SET_ADVICE',advice.data)
        }
    }
}
