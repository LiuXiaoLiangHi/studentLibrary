<template>
  <div class="login_content">
    <!-- 一个简单的图片 -->
    <div class="login_over_top"></div>
    <!-- TAG  登录页面的主体结构-->
    <el-card class="login_main">
      <!-- TAG  login的主体内容 -->
      <LoginMianContent />
      <!-- TAG login的footer部分 -->
      <LoginFooter />
      <DownAPP/>
    </el-card>
  </div>
</template>

<script>
import LoginMianContent from "./components/Login-head/Login-mian-content.vue";
import LoginFooter from "./components/Login-foot/Login-foot.vue";
import DownAPP from './components/Login-foot/DownAPP.vue'
export default {
  components: {
    LoginMianContent,
    LoginFooter,
    DownAPP
  },
  data() {
    return {

    };
  },
  methods: {
    open1() {
      const h = this.$createElement;
      this.$notify({
        title: "欢迎光临",
        message: h("i", { style: "color: teal" }, "这是你的系统"),
      });
    },
  },
  mounted() {
    this.open1();
  },
};
</script>
<style lang="less" scoped>
@import url(~@/style/css/_mixin.less);
.login_content {
  width: 100%;
  height: 100%;
  min-width: 950px;
  background: url("~@/style/image/background.png") no-repeat;
  background-size: 100% 100%;
  .ElementCenter();
  flex-direction: column;
  //-----------卡片上方------------
  .login_over_top {
    width: 350px;
    height: 100px;
    background: url("~@/style/image/title.png") no-repeat;
    background-size: 100% 100%;
  }
  .login_main {
    width: 380px;
    margin: 0 auto;
    margin-bottom: 100px;
  }
}
</style>
