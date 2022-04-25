<template>
  <div id="app" ref="xxxx">
    <router-view></router-view>
      <UnderDevelopment v-show="underdev" :underdev="underdev" :closeSeconds="closeSeconds" />
  </div>
</template>
<script>
import { sleep } from "@/utils/sheep.js";

export default {
  data() {
    return {
      underdev: false,
      closeSeconds: 3,
    };
  },
  watch: {
    underdev(newvalue) {
      if (newvalue == true) {
        this.closeDialog();
      } else {
        console.log('被关闭’');
console.log(window);
        // clearTimeout('dialogSetTime')
         sleep(500).then(()=>{
           this.closeSeconds=3
         })
      }
    },
  },
  methods: {
    closeDialog() {
      sleep().then(() => {
        this.closeSeconds--;
        sleep().then(() => {
          this.closeSeconds--;
          sleep().then(() => {
            this.underdev = false;
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
    height: 100%;
  }
}
</style>
