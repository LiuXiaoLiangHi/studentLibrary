<template>
  <el-form :model="loginForm" ref="loginForm" :rules="loginRules" class="yyy">
    <el-form-item label="" prop="username">
      <el-input v-model="loginForm.username" placeholder="用户名" prefix-icon="el-icon-user-solid" clearable required>
      </el-input>
    </el-form-item>
    <el-form-item label="" prop="password">
      <el-input v-model="loginForm.password" placeholder="密码" prefix-icon="el-icon-thumb" show-password clearable required>
      </el-input>
    </el-form-item>
    <el-form-item label="">
      <el-button type="primary" size="default" style="width: 100%" :disabled="is_or__diable" @click="submitForm">登录</el-button>
    </el-form-item>
    <div class="from_down">
      <span>
        <router-link to="/register" class="from_down_a">用户注册?</router-link>
      </span>
      <span>
        <el-link type="primary">忘记密码？</el-link>
      </span>
    </div>
  </el-form>
</template>

<script>
import { login } from "@/api/permission"; // 登录方法
import { Message } from "element-ui";
import { validateUserName, validatePassword } from "@/utils/regular-verify";

export default {
  data() {
    return {
      loginForm: { username: "", password: "" },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUserName },
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword },
        ],
      },
    };
  },
  methods: {
    async submitForm() {
      let validatorResult =
        this.$refs["loginForm"].$children[0].validateState !== "error" &&
        this.$refs["loginForm"].$children[1].validateState !== "error";
      if (validatorResult == false) {
        this.$alert("你当前用户名或密码有误哦，请检查后再提交", "提示", {
          confirmButtonText: "确定",
          callback: () => {},
        });
      } else {
        try {
          //登录获取token
          let data = await login({
            username: this.loginForm.username,
            password: this.loginForm.password,
          });
          Message.success("登录成功");
          // //将data中的token 赋值给变量token
          let token = data.token;
          // //将token保持到store中
          this.$store.commit("LOGIN_IN", token);
          // //进行路由跳转
          this.$router.replace("/home").catch((err) => {
            console.log(err);
          });
        } catch (e) {
          console.log(e);
        }
      }
    },
  },
  computed: {
    is_or__diable() {
      return this.loginForm.username == "" || this.loginForm.password == "";
    },
  },
};
</script>

<style lang="less" scoped>
.yyy {
  padding: 0 20px;
}
// .el-form-item {
//   // margin-top: 12px;
// }
.from_down {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  .from_down_a {
    color: #409EFF;
    &:hover {
      color: #409EFF;
    }
  }
}
.from_down > span {
  display: inline-block;
  font-size: 14px;
  color: #8590a6;
}
</style>
