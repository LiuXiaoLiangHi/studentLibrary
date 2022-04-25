<template>
  <el-dialog title="当前功能还未开发哦" :visible.sync="dialogVisible" width="25%" top="20vh">
        <el-image :src="src"></el-image>
  </el-dialog>
</template>
<script>
export default {
  // props:['dialogVisible'],
  data() {
    return {
      dialogVisible: true,
      src: "https://tse1-mm.cn.bing.net/th/id/R-C.321c1c54b964c9098c39e13f2346e541?rik=NlMJv0o2GuWATg&riu=http%3a%2f%2fww1.sinaimg.cn%2fbmiddle%2f9150e4e5gy1fy9fpsdvz5g208c08c0tj.gif&ehk=kJn697MDACUU58Np0Aew2mfXCn24srjKNdDqtdH3jq4%3d&risl=&pid=ImgRaw&r=0",
    };
  },
  mounted() {
    console.log(this.dialogVisible);
  },
};
</script>
<style lang="less" scoped>
 
</style>