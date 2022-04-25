/**
* 定义延时函数
* delaytime 延时时长，单位毫秒
*/
// const dialogSetTime = setTimeout(()=>{});
// export function sleep(delaytime = 1000) {
//   return new Promise(resolve => dialogSetTime(resolve,delaytime) )
// }
export function sleep(delaytime = 1000) {
  return new Promise(resolve => {
     var dialogSetTime=setTimeout(resolve, delaytime)
     return  dialogSetTime
     })
}

// export default {
//     sleep
// }