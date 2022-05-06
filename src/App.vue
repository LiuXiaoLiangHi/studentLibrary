<template>
  <div id="app">
    <router-view></router-view>
    <UndevelopedFeatures :isShowUnder="isShowUnder" :closeNumber="closeNumber" />
  </div>
</template>
<script>
import { sleep } from "@/utils/sheep.js";
export default {
  data() {
    return {
      isShowUnder:false,// 弹窗是否显示
      closeNumber: 3, // 距离弹窗关闭的秒数
    };
  },
  watch: {
    // 监视弹窗是否显示
    isShowUnder(newvalue) {
      if (newvalue == true) {
        this.closeDialog();
      } else {
        // 清除所有的定时器，不然显示的时间会错乱
        // FIXME 消耗大量性能可能存在BUG
        for (let i = 1; i < 100000; i++) {
          clearInterval(i);
        }
        // 延迟将显示的时间更改为3，不延迟会在弹窗关闭的一瞬间显示3,体现较差
        sleep(500).then(() => {
          console.log("重新恢复到3");
          this.closeNumber = 3;
        });
      }
    },
  },
  methods: {
    closeDialog() {
      // console.log("开启了");
      sleep().then(() => {
        this.closeNumber--; // console.log("秒数减一");
        sleep().then(() => {
          this.closeNumber--; // console.log("秒数再次减一");
          sleep().then(() => {
            this.isShowUnder = false;  //关闭弹窗
          });
        });
      });
    },
  },
};
</script>

<style lang="less">
#app {
  background-size: 100% 100%;
  height: 100%;
  > div {
    // display: flex;
    height: 100%;
  }
}
</style>
