<template>
  <el-form :model="formNopass" ref="formNopass" :rules="rulesNopass" class="styleNopass">
    <el-form-item label="" prop="userPhoneNumber">
      <el-input v-model="formNopass.userPhoneNumber" placeholder="手机号" prefix-icon="el-icon-user-solid" clearable>
      </el-input>
    </el-form-item>
    <el-form-item label="" prop="userCode">
      <el-input v-model="formNopass.userCode" placeholder="请输入6位验证码" prefix-icon="el-icon-thumb" clearable :disabled="false">
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
export default {
  components: {},
  data() {
    return {
      isForbiddenCodeButton: false, // 获取验证码按钮是否禁用
      formNopass: {
        userPhoneNumber: "", //用户的手机号
        userCode: "", // 用户接受到的验证码
      },
      // 表单校验规则
      rulesNopass: {
        userPhoneNumber: [
          { required: true, message: "请输入正确的手机号", trigger: "blur" },
        ],
        userCode: [
          { required: true, message: "请输入验证码", trigger: "blur" },
        ],
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
  },
};
</script>

<style lang="less" scoped>
.styleNopass {
  padding: 0 20px;
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
</style>
 