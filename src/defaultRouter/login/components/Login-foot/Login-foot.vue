<template>
  <el-footer class="login_main_foot">
    <div class="userAgreement">
      <span>手机验证后自动登录，登录即代表同意
        <a href="https://homewh.chaoxing.com/agree/userAgreement?appId=900001">
          《用户协议》
        </a>
        <a href="https://www.yidianzixun.com/landing_privacy"> 《隐私保护指引》 </a>
      </span>
    </div>
    <hr color="#EBEBEB" sizi="1" width="95%" style="opacity: 0.8; margin: 10px 0 auto" />
    <div class="Login_social_media_account">
      <span>社交账号登录</span>
      <div class="social_media_account_group">
        <SelectLogin title="QQ" svgName="QQ" />
        <SelectLogin title="微信" svgName="微信" />
        <SelectLogin title="微博" svgName="微博" />
      </div>
    </div>
  </el-footer>
</template>
<script>
import SelectLogin from "./SelectLogin.vue";
export default {
  components: {
    SelectLogin,
  },
};
</script>
<style lang="less" scoped>
.login_main_foot {
  width: 100%;
  height: 110px !important;
  .userAgreement {
   font-size: 14px;
   color: #8590A6;
  
  }
  .Login_social_media_account {
    height: 60px;
    line-height: 60px;
    display: flex;
    flex-direction: row;
     color: #8590A6;
  }
  .social_media_account_group {
    height: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
}
</style>