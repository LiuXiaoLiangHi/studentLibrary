<!--
 * @Author: liang
 * @Date: 2021-11-26 09:26:30
 * @LastEditors: liang
 * @LastEditTime: 2022-03-18 09:38:46
 * @Description: file content
 * @FilePath: \my-home\src\views\login\userLogin\noPassword.vue
-->

<template>
  <div>
    <el-form :model="formNopass" ref="formNopass" :rules="rulesNopass">
      <el-form-item label="" prop="userName">
        <el-input
          v-model="formNopass.userName"
          placeholder="手机号"
          prefix-icon="el-icon-user-solid"
          clearable
          :disabled="true"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="" prop="userCode">
        <el-input
          v-model="formNopass.userCode"
          placeholder="请输入6位验证码"
          prefix-icon="el-icon-thumb"
          clearable
          :disabled="true"
        >
          <el-button
            slot="append"
            icon="el-icon-search"
            style="width: 70px; padding: 0"
             :disabled="true"
            >获取</el-button
          >
        </el-input>
      </el-form-item>
      <div class="from_down">
        <span>
          <el-link type="primary" @click="receptionVoiceCode"
            >接收语音验证码</el-link
          >
        </span>
      </div>
      <el-form-item label="">
        <el-button
          type="primary"
          size="default"
          style="width: 100%"
          :disabled="true"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formNopass: {
        userName: "",
        userCode: "",
      },
      rulesNopass: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        userCode: [
          { required: true, message: "请输入验证码", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    receptionVoiceCode() {},
  },
};
</script>

<style lang="less" scoped>
.el-form-item {
  margin-top: 12px;
}
.from_down {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: flex-end;
}
.from_down > span {
  display: inline-block;
  font-size: 14px;
  color: #8590a6;
}
.el-form-item {
  margin-bottom: 22px !important;
  margin-top: 0 !important;
}
</style>