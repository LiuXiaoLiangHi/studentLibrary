<!-- 全局组件：功能未开发组件，用于用户点击了某些还未开发的模块时显示的组件-->
<template>
  <el-dialog title="提示" :visible.sync="isShowDialog" width="25%" top="20vh" class="inDevelopment">
    <span>当前功能还在开发中哦! {{ closeNumber }}秒后自动关闭</span>
    <el-image :src="src">
        <div slot="error" class="image-slot">
        <i class="el-icon-picture-outline">图片加载失败哦...</i>
      </div>
    </el-image>
  </el-dialog>
</template>
<script>
export default {
  props: ["isShowUnder", "closeNumber"], //从父组件接受到的信息  isShowUnder用于计算弹窗是否显示，closeNumbe表示多少秒后关闭
  computed: {
    isShowDialog: {
      get() {
        return this.isShowUnder;
      },
      set(newvalue) {
         this.$root.$children[0].isShowUnder=newvalue
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
