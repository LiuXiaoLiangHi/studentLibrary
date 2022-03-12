<!--
 * @Author: liang
 * @Date: 2022-03-04 09:49:40
 * @LastEditors: liang
 * @LastEditTime: 2022-03-10 12:33:34
 * @Description: file content
 * @FilePath: \作业\my-home\src\views\login\index.vue
-->
<template>
  <div class="login-container">
    <img src="@/style/image/back.png" alt=""  class="login_background" />
    <!-- autoComplete="on" 让表单启用自动填充 -->
    <el-form
      class="login-form"
      autoComplete="on"
      :model="loginForm"
      :rules="loginRules"
      ref="loginForm"
      label-position="left"
    >
      <el-form-item prop="username">
        <el-input
          name="username"
          type="text"
          v-model="loginForm.username"
          clearable
          autoComplete="on"
          placeholder="请输入您的用户名"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          name="password"
          :type="pwdType"
          clearable
          @keyup.enter.native="login"
          v-model="loginForm.password"
          autoComplete="on"
          show-password
          placeholder="请输入您的密码"
        ></el-input>
        <!-- <span class="show-pwd" @click="showPwd"
          ><svg-icon icon-class="eye"
        /></span> -->
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          style="width: 100%; background: #13c2aa"
          :loading="loading"
          @click.native.prevent="login"
        >
        
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login } from "@/api/permission";

export default {
  data() {
    const validateUsername = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error("请输入正确的用户名"));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error("密码不能小于5位"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "",
        password: "",
      },
      loginRules: {
        username: [
          {
            required: true,
            trigger: "blur",
            validator: validateUsername,
          },
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePass },
        ],
      },
      loading: false,
      pwdType: "password",
    };
  },
  methods: {
    // 登录
    async login() {
      try {
        // console.log(this.loginForm);
        //登录获取token
        let data = await login({
          name: this.loginForm.username,
          password: this.loginForm.password,
        });

        // //将data中的token 赋值给变量token
        let token = data.token;

        // //将token保持到store中
        this.$store.commit("LOGIN_IN", token);
        // //进行路由跳转
        this.$router.replace("/").catch((err) => {
          console.log(err);
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style lang="less">
/* reset element-ui css */
.login-container {
  position: fixed;
  width: 100%;
  height: 980px;
  .login_background {
    position: relative;
    left: 0px;
    top: 0px;
    z-index: -1;
    width: 100%;
    height: 100%;
  }
  .login-form {
    width: 400px;
    position: absolute;
    top: 45%;
    left: 57%;
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
  }
}
</style>
 
