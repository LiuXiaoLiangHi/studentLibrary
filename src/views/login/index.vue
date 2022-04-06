<!--
 * @Author: liang
 * @Date: 2021-12-06 17:56:20
 * @LastEditors: liang
 * @LastEditTime: 2022-04-06 17:37:33
 * @Description: 用户登录页面
 * @FilePath: \作业\my-home\src\views\login\index.vue
-->
<template>
  <!-- 主体 -->
  <div class="main">
    <!-- 登录卡片 上 -->
    <div class="Top_of_the_card"></div>
    <!-- 登录卡片 -->
    <el-card class="box-card">
      <!-- 导航栏 -->
      <!-- :default-active="activeIndex" -->
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        style="border-bottom: solid 1px #efefef"
      >
        <el-menu-item class="el-menu-item" @click="pass_change"
          >免密码登录
          <svg-icon
            icon-class="三角形"
            class="login_svg"
            v-show="login_svg"
          ></svg-icon>
        </el-menu-item>
        <el-menu-item class="el-menu-item" @click="pass_change"
          >密码登录
          <svg-icon
            icon-class="三角形"
            class="login_svg"
            v-show="!login_svg"
          ></svg-icon>
        </el-menu-item>
        <img src="@/style/image/QR-Code.jpg" style="margin-left: 108px" />
      </el-menu>
      <!-- 内容区 -->
      <el-container direction="vertical">
        <!-- 登录方式显示区 -->
        <el-main style="" class="el-main">
          <noPassword v-show="pass_show" />
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
                <img src="@/style/image/qq.jpg" alt="" />
                <span>QQ</span>
              </div>
              <div class="btn_none">
                <img src="@/style/image/weixin.jpg" alt="" />
                <span>微信</span>
              </div>
              <div class="btn_none">
                <img src="@/style/image/weibo.jpg" alt="" />
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
import noPassword from "./userLogin/noPassword.vue";
import PasswordToLogin from "./userLogin/PasswordToLogin.vue";
// import {createCode} from "@/api/createCode"
export default {
  components: {
    noPassword,
    PasswordToLogin,
  },
  data() {
    return {
      pass_show: true,
      login_svg: true,
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
    pass_change() {
      this.pass_show = !this.pass_show;
      this.login_svg = !this.login_svg;
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
