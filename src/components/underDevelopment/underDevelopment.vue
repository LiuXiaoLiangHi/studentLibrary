<template>
  <el-dialog title="提示" :visible.sync="underdev2" width="25%" top="20vh" class="inDevelopment">
    <span>当前功能还在开发中哦! {{ closeSeconds }}秒后自动关闭</span>
    <el-image :src="src"></el-image>
  </el-dialog>
</template>
<script>
// import { set } from 'vue/types/umd';
// import { sleep } from "@/utils/sheep.js";

// import { mapState } from "vuex";

export default {
  name: "shabis",
  props: ["underdev", "closeSeconds"],
  computed: {
    underdev2: {
      get() {
        return this.underdev;
      },
      set(newvalue, oldValue) {
         this.$root.$children[0].underdev=false
        console.log(newvalue);
        console.log(oldValue);
      },
    },
  },
  data() {
    return {
      src: "https://tse1-mm.cn.bing.net/th/id/R-C.321c1c54b964c9098c39e13f2346e541?rik=NlMJv0o2GuWATg&riu=http%3a%2f%2fww1.sinaimg.cn%2fbmiddle%2f9150e4e5gy1fy9fpsdvz5g208c08c0tj.gif&ehk=kJn697MDACUU58Np0Aew2mfXCn24srjKNdDqtdH3jq4%3d&risl=&pid=ImgRaw&r=0",
    };
  },
};
</script>
<style lang="less" scoped></style>
