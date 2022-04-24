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
    <hr color="#EBEBEB" sizi="1" width="95%" style="opacity: 0.8; margin: auto" />
    <div class="Login_social_media_account">
      <span>社交账号登录</span>
      <div class="social_media_account_group">
        <!-- <div class="btn_none">
          <svg-icon icon-class="QQ"></svg-icon>
          <span>QQ</span>
        </div> -->
        <Btn/>
        <div class="btn_none">
          <svg-icon icon-class="微信"></svg-icon>
          <span>微信</span>
        </div>
        <div class="btn_none">
          <svg-icon icon-class="微博"></svg-icon>
          <span>微博</span>
        </div>
      </div>
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
  </el-footer>
</template>
<script>
import Btn from './Btn'
export default {
components:{
    Btn
}
};
</script>
<style lang="less" scoped>
.login_main_foot {
  width: 100%;
  .userAgreement {
  }
  .Login_social_media_account {
    height: 60px;
    line-height: 60px;
    display: flex;
    flex-direction: row;
  }
  .social_media_account_group {
    height: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    // .btn_none{
    //     width: 30%;
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    // }
  }
}
</style>