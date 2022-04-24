<template>
  <div class="login_content">
    <div class="login_over_top"></div>
    <el-card class="login_main">
      <!-- <el-menu class="login_main_header" mode="horizontal">
        <HeaderMenuItem :itemProperty="{ title: '免密码登录', isShowSvg: login_svg }"/>
        <HeaderMenuItem :itemProperty="{ title: '密码登录', isShowSvg: !login_svg }"/>
        <img src="@/style/image/QR-Code.jpg" style="" />
      </el-menu>
      <el-container direction="vertical">
        <el-main style="" class="el-main">
          <NoPassword v-show="pass_show" />
          <PasswordToLogin v-show="!pass_show" />
        </el-main> -->
      <!-- <el-footer class="card_foot">
          <div class="data_padding" style="margin-bottom: 5px">
            <span>手机验证后自动登录，登录即代表同意
              <a href="https://homewh.chaoxing.com/agree/userAgreement?appId=900001">
                《用户协议》
              </a>
              <a href="https://www.yidianzixun.com/landing_privacy"> 《隐私保护指引》 </a>
            </span>
          </div>
          <hr color="#EBEBEB" sizi="1" width="95%" style="opacity: 0.8; margin: auto" />
          <div class="Login-socialLogin data_padding">
            <span class="socialLoginFristSpan">社交账号登录</span>
            <span class="Login-socialButtonGroup">
              <div class="btn_none">
                <svg-icon icon-class="QQ"></svg-icon>
                <span>QQ</span>
              </div>
              <div class="btn_none">
                <svg-icon icon-class="微信"></svg-icon>
                <span>微信</span>
              </div>
              <div class="btn_none">
                <svg-icon icon-class="微博"></svg-icon>
                <span>微博</span>
              </div>
            </span>
          </div>
          <div class="login_foot">
            <div>
              <i class="el-icon-s-promotion"></i>
              <small>联系作者</small>
            </div>
            <span class="Vertical_separation"></span>
            <div>
              <i class="el-icon-download"></i>
              <small>下载APP</small>
            </div>
          </div>
        </el-footer> -->
      <!-- </el-container> -->
      <LoginMianContent />
      <LoginFooter />
    </el-card>
  </div>
</template>

<script>
import LoginMianContent from "./components/Login-head/Login-mian-content.vue";
import LoginFooter from "./components/Login-foot/Login-foot.vue";
export default {
  components: {
    LoginMianContent,
    LoginFooter,
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
    height: 490px;
    margin: 0 auto;
    margin-bottom: 100px;
  }
}
</style>
