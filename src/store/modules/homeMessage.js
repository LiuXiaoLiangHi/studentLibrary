/*
 * @Author: liang
 * @Description:用于存放home页面从后台接口获取的数据
 * 暂时废弃
 */
import { getMessage,getSchedule} from '@/api/homeList'
export default {
    //  允许使用别名（命名空间）
    namespaced: true,

    state: {
        // 通知公告信息
        advice: [],
        schedule:[]
    },
    getters: {},
    mutations: {
        SET_ADVICE(state, advice) {
            state.advice = advice
        },
        SET_SCHEDULES(state,schedule){
            state.schedule=schedule
        }
    },
    actions: {
        //home页获取相应的信息
        async GET_SOMEADVICE({ commit }) {
           let advice=await  getMessage()
           let schedule=await getSchedule()
        //    console.log(schedule);
           commit('SET_ADVICE',advice.data)
           commit('SET_SCHEDULES',schedule.data)
        }
    }
}
