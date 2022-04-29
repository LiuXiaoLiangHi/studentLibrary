 <template>
  <header class="reg-head">
    <div class="width1000 clearfix">
      <router-link to="/home"  class="re-logo"></router-link>
      <div class="re-login">
        <span>已有账号，
          <router-link to="/login" class="reg_a">立即登录 </router-link>
        </span>
      </div>
    </div>
  </header>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
 @import url(~@/style/css/_mixin.less);
.reg-head {
  width: 100%;
  height: 66px;
  background: #d6dae4 ;
  .width1000 {
    width: 1000px;
    margin: 0 auto;
    .re-logo {
      display: block;
      float: left;
      width: 230px;
      height: 26px;
      margin-top: 20px;
      background: url(https://juheimg.oss-cn-hangzhou.aliyuncs.com/www/logo/v7/logo-white.png)
        no-repeat;
    }
    .re-login {
      float: right;
      font-size: 14px;
      line-height: 66px;
      color: #8e8e8e;
      .reg_a{
          color: #00bdff;
      }
    }
  }
}
</style>