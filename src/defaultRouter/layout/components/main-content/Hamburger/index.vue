<template>
  <div class="toggleNavCollapse" :class="{ active: isSidebarNavCollapse }" @click="toggleNavCollapse">
    <svg-icon icon-class="Icon-line-hamburger-left@1x"></svg-icon>
  </div>
</template>

<script>
/**
 * 该组件是top栏的折叠栏按钮 公用组件（不是全局） Hamburger 
 * ____________________________________________________________________________________________________________________
   |      名称             |      描述        | 数据类型       |            来源                                       |
   | isSidebarNavCollapse |  导航菜单是否折叠 |  Boolean      | store文件下的state.js                                 |        
   | toggleNavCollapse    |   切换导航栏     |  Function     | store 文件夹下的mutation                              |
   |_____________________|_________________|________________|______________________________________________________|
 */
import { mapState } from "vuex";
export default {
  name: "Hamburger",
  computed: {
    ...mapState(["isSidebarNavCollapse"]),
  },
  methods: {
    // 切换折叠栏的状态
    toggleNavCollapse() {
      this.$store.commit("toggleNavCollapse");
    },
  },
};
</script>

<style lang="less" scoped>
// 这个按钮的样式，可以自行更改
.toggleNavCollapse {
  display: inline-block;
  margin-left: 8px;
  padding: 0 10px;
  font-size: 26px;
  vertical-align: middle;
  color: #333;
  cursor: pointer;
  transition: all 0.5s;
  // 被点击后旋转90度
  &.active {
    transform: rotate(180deg);
  }
}
</style>
