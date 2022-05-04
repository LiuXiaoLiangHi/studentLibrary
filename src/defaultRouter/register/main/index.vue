 <template>
  <div class="reg-content">
    <div class="reg-main">
      <div class="reg-desc">
        <span>欢迎注册</span>
        <br>
        <span>
          <small>更多功能等你发现</small></span>
        <p class="reg-desc-p">
          注册即送0元大礼包
        </p>
      </div>
      <el-form :model="reg_form" ref="reg_form" label-width="0px" :inline="false" size="normal" class="reg-from" :rules="reg_rueus">
        <el-form-item label="" prop="userName">
          <el-input v-model="reg_form.userName" placeholder="用户名（字母开头，6~16位数字字母）" class="reg_input" clearable></el-input>
        </el-form-item>
        <el-form-item label="" prop="userPhoneNumber">
          <el-input v-model.trim.number="reg_form.userPhoneNumber" placeholder="请输入手机号码" class="reg_input" clearable></el-input>
        </el-form-item>
        <el-form-item label="" prop="userCode">
          <el-input v-model.trim="reg_form.userCode" placeholder="请输入手机短信验证码" clearable required>
            <el-button slot="append" icon="el-icon-search" style="width: 70px; padding: 0">获取</el-button>
          </el-input>
        </el-form-item>
        <el-form-item label="" prop="userPassword">
          <el-input v-model.trim="reg_form.userPassword" placeholder="请输入密码（6~16位数字字母）" class="reg_input" show-password clearable></el-input>
        </el-form-item>
        <el-form-item label="" prop="reg_checked">
          <el-checkbox v-model.trim="reg_form.reg_checked">
          </el-checkbox>
          <span style="margin-left:5px;color:#a3a3a3">
            我已阅读并接受
            <el-link type="primary" href="https://homewh.chaoxing.com/agree/userAgreement?appId=900001" :underline="false">《网络服务协议》</el-link>
            <el-link type="primary" href="https://www.yidianzixun.com/landing_privacy" :underline="false">《用户隐私协议》</el-link>
          </span>
        </el-form-item>
        <el-form-item label="">
          <el-button :type="reg_form.buttonType" style="width:100%" :disabled="!reg_form.reg_checked" @click=register>登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
// 登录接口
import { fetchRegister } from "@/api/permission";
import { Message } from "element-ui";
import {
  validateUserName,
  validatePhone,
  validateAuthCode,
  validatePassword,
} from "@/utils/regular-verify";
export default {
  components: {},
  data() {
    return {
      reg_form: {
        userName: "",
        userPhoneNumber: "",
        userCode: "",
        userPassword: "",
        reg_checked: false,
        buttonType: "info",
      },
      reg_rueus: {
        userName: [
          {
            required: true,
            trigger: "blur",
            validator: validateUserName,
          },
        ],
        userPhoneNumber: [
          {
            required: true,
            trigger: "blur",
            validator: validatePhone,
          },
        ],
        userCode: [
          {
            required: true,
            trigger: "blur",
            validator: validateAuthCode,
          },
        ],
        userPassword: [
          {
            required: true,
            trigger: "blur",
            validator: validatePassword,
          },
        ],
      },
    };
  },
  watch: {
    // 监视是否勾选用户协议
    "reg_form.reg_checked": {
      handler(newvalue) {
        if (newvalue == true) {
          console.log("xxx");
          this.reg_form.buttonType = "primary";
        } else {
          this.reg_form.buttonType = "info";
        }
      },
    },
  },
  methods: {
    async register() {
      let result_0 =
        this.$refs["reg_form"].$children[0].validateState !== "error";
      let result_1 =
        this.$refs["reg_form"].$children[1].validateState !== "error";
      let result_2 =
        this.$refs["reg_form"].$children[2].validateState !== "error";
      let result_3 =
        this.$refs["reg_form"].$children[3].validateState !== "error";
      if (
        result_0 == true &&
        result_1 == true &&
        result_2 == true &&
        result_3 == true
      ) {
        let result = await fetchRegister({
          userName: this.reg_form.userName,
          mobile: this.reg_form.userPhoneNumber,
          password: this.reg_form.userPassword,
        });
        if (result == undefined) {
          Message.success("注册成功，1秒后跳转到登录页面");
          setTimeout(() => {
            this.$router.replace("/login").catch((err) => {
              console.log(err);
            });
          }, 1000);
        }
      }
    },
  },
};
</script>
<style lang="less" scoped>
.reg-content {
  width: 1000px;
  min-height: 550px;
  margin: 0 auto;
  margin-top: 100px;
  padding-bottom: 70px;
  background-color: #fff;
  .reg-main {
    width: 420px;
    margin: 0 auto;
    .reg-desc {
      padding-top: 50px;
      margin-bottom: 30px;
      .reg-desc-p {
        color: #fff;
        padding-left: 70px;
        margin-top: 10px;
        line-height: 32px;
        border-radius: 4px;
        font-size: 16px;
        background: url("https://juheimgs.oss-cn-beijing.aliyuncs.com/activity/202106/reg-gift.png")
          left 42px center no-repeat #ed510a;
      }
    }
    .reg_from {
      .reg_input {
        margin-bottom: 24px;
      }
    }
  }
}
</style>