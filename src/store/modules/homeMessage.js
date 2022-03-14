 
/*
 * @Author: liang
 * @Description:用于存放home页面从后台接口获取的数据
 *  
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
