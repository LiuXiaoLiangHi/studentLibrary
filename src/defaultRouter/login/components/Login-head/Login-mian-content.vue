 <template>
  <el-tabs v-model="activeName" @tab-click="handleClick" class="login_main_tabs">
    <el-tab-pane name="noPassword">
      <span slot="label">免密码登录
        <svg-icon icon-class="三角形" class="login_main_tabs_svg" v-show="svg_show" />
      </span>
      <NoPassword />
    </el-tab-pane>
    <el-tab-pane name="hasPassword">
      <span slot="label">免密码登录
        <svg-icon icon-class="三角形" class="login_main_tabs_svg" v-show="!svg_show" />
      </span>
      <PasswordToLogin />
    </el-tab-pane>
  </el-tabs>

</template>
<script>
import NoPassword from "../Login-content/NoPassword.vue";
import PasswordToLogin from "../Login-content/PasswordToLogin.vue";
export default {
  components: {
    NoPassword,
    PasswordToLogin,
  },
  data() {
    return {
      activeName: "noPassword", // 当前选中的tabs
      svg_show: true, //控制tabs对应的svg是否显示
    };
  },
  methods: {
    //点击每一个tas都会触发
    handleClick() {
      this.isSvgShow(); // 切换svg的状态
    },
    //0.3秒后切换svg是否显示
    isSvgShow() {
      setTimeout(() => {
        this.svg_show = !this.svg_show;
      }, 300);
    },
  },
};
</script>
<style lang="less" scoped>
.login_main_tabs_svg {
  width: 10px !important;
  height: 10px !important;
  position: absolute;
  bottom: 0;
  left: 50%;
}
</style>