<template>
  <el-form :model="formNopass" ref="formNopass" :rules="rulesNopass" class="styleNopass">
    <el-form-item label="" prop="userPhoneNumber">
      <el-input v-model="formNopass.userPhoneNumber" placeholder="手机号" prefix-icon="el-icon-user-solid" clearable required>
      </el-input>
    </el-form-item>
    <el-form-item label="" prop="userCode">
      <el-input v-model="formNopass.userCode" placeholder="请输入6位验证码" prefix-icon="el-icon-thumb" clearable :disabled="false" required>
        <el-button slot="append" icon="el-icon-search" style="width: 70px; padding: 0" :disabled="isForbiddenCodeButton" @click="gainLoginCode">获取</el-button>
      </el-input>
    </el-form-item>
    <div class="from_down">
      <span>
        <el-link type="primary" @click="receivingVoiceCode">接收语音验证码</el-link>
      </span>
    </div>
    <el-form-item label="">
      <el-button type="primary" size="default" style="width: 100%" :disabled="true">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {validatePhone,validateAuthCode} from '@/utils/regular-verify'
export default {
  data() {
    return {
      isForbiddenCodeButton: false, // 获取验证码按钮是否禁用
      formNopass: {
        userPhoneNumber: "", //用户的手机号
        userCode: "", // 用户接受到的验证码
      },
      // 表单校验规则
      rulesNopass: {
        userPhoneNumber: [{ validator: validatePhone, trigger: "blur" }],
        userCode: [{ validator: validateAuthCode, trigger: "blur" }],
      },
    };
  },
  methods: {
    // 获取用户验证码
    gainLoginCode() {
      // 没有开发，使用未开放功能组件
      this.$root.$children[0].isShowUnder = true;
    },
    // 接受语音验证码
    receivingVoiceCode() {
      // 没有开发，使用未开放功能组件
      this.$root.$children[0].isShowUnder = true;
    },
    // 组件销毁前将数据初始化
    beforeDestroy() {
      this.formNopass = {
        userPhoneNumber: "",
        userCode: "",
      };
    },
  },
};
</script>

<style lang="less" scoped>
.styleNopass {
  padding: 0 20px;
  .from_down {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: flex-end;
    & > span {
      display: inline-block;
      font-size: 14px;
      color: #8590a6;
    }
  }
}
</style>
 