/**
* 定义延时函数
* delaytime 延时时长，单位毫秒
*/
export function sleep(delaytime = 1000) {
  return new Promise(resolve => {
     return  setTimeout(resolve, delaytime)
     })
}

 