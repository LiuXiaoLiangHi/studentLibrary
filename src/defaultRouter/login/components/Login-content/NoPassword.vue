<template>
  <el-form :model="formNopass" ref="formNopass" :rules="rulesNopass" class="xxx">
    <el-form-item label="" prop="userName">
      <el-input v-model="formNopass.userName" placeholder="手机号" prefix-icon="el-icon-user-solid" clearable>
      </el-input>
    </el-form-item>
    <el-form-item label="" prop="userCode">
      <el-input v-model="formNopass.userCode" placeholder="请输入6位验证码" prefix-icon="el-icon-thumb" clearable :disabled="false">
        <el-button slot="append" icon="el-icon-search" style="width: 70px; padding: 0" :disabled="iSLoginCodeButton" @click="gainLoginCode">获取</el-button>
      </el-input>
    </el-form-item>
    <div class="from_down">
      <span>
        <el-link type="primary">接收语音验证码</el-link>
      </span>
    </div>
    <el-form-item label="">
      <el-button type="primary" size="default" style="width: 100%" :disabled="true">登录</el-button>
    </el-form-item>
  
  </el-form>
</template>

<script>
export default {
  components: {
  
  },
  data() {
    return {
      iSLoginCodeButton: false,
      // dialogVisible: false,
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
    gainLoginCode() {
      // this.$root.$children[0].$refs.xxxx.$data.dialogVisible=true
      this.$root.$children[0].underdev=true
      // console.log(this.$root.$children[0].underdev);
    //   // console.log( );
    // // =true 
    },
  },
};
</script>

<style lang="less" scoped>
.xxx {
  padding: 0 20px;
}

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
 