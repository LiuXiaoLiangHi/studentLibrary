 
<template>
  <div class="login_content">
    <div class="login_over_top"></div>
    <el-card class="login_main">
      <el-menu class="login_main_header" mode="horizontal">
        <HeaderMenuItem :itemProperty="{ title: '免密码登录', isShowSvg: login_svg }"  @click="cutLoginState(0)"/>
        <HeaderMenuItem :itemProperty="{ title: '密码登录', isShowSvg: !login_svg }"   @click="cutLoginState(1)"/>
        <img src="@/style/image/QR-Code.jpg" style="" />
      </el-menu>
      <!-- 内容区 -->
      <el-container direction="vertical">
        <!-- 登录方式显示区 -->
        <el-main style="" class="el-main">
          <NoPassword v-show="pass_show" />
          <PasswordToLogin v-show="!pass_show" />
        </el-main>
        <!-- 登录卡片 底部 其他内容 -->
        <el-footer class="card_foot">
          <!-- 协议文本展示区 -->
          <div class="data_padding" style="margin-bottom: 5px">
            <span
              >手机验证后自动登录，登录即代表同意
              <a
                href="https://homewh.chaoxing.com/agree/userAgreement?appId=900001"
              >
                《用户协议》
              </a>
              <a href="https://www.yidianzixun.com/landing_privacy">
                《隐私保护指引》
              </a>
            </span>
          </div>
          <!-- hr分割线 -->
          <hr
            color="#EBEBEB"
            sizi="1"
            width="95%"
            style="opacity: 0.8; margin: auto"
          />
          <!--第三方登录显示区-->
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
          <!-- 登录卡片 最底下区，联系作者和下载App -->
          <div class="login_foot">
            <div>
              <i class="el-icon-s-promotion"></i>
              <small>联系作者</small>
            </div>
            <!--  -->
            <span class="Vertical_separation"></span>
            <!--  -->
            <div>
              <i class="el-icon-download"></i>
              <small>下载APP</small>
            </div>
          </div>
        </el-footer>
      </el-container>
    </el-card>
  </div>
</template>
 
 <script>
import NoPassword from "./components/Login-content/NoPassword";
import PasswordToLogin from "./components/Login-content/PasswordToLogin.vue";
import HeaderMenuItem from "./components/Login-head/HeaderMenuItem.vue";
export default {
  components: {
    NoPassword,
    PasswordToLogin,
    HeaderMenuItem,
  },
  data() {
    return {
      pass_show: true,
      login_svg: true,
      LoginState:0
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
    // 切换登录的状态， 短信登录 or 密码登录
    cutLoginState(toState) {
      if(toState==this.LoginState){
        return
      }else{
        this.LoginState=toState
      }
      this.pass_show = !this.pass_show;
      this.login_svg = !this.login_svg;
    //  console.log(this);
     
    },
    //  getCode(){
    //    createCode()
    //  }
  },
  mounted() {
    this.open1();
  },
};
</script>
<style lang="less" scoped>
@import url(~@/style/css/login.less);
</style>
