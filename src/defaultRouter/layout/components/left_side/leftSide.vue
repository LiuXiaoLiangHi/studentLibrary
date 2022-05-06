<!--
 * @Author: liang
 * @Description:  主页面的左侧导航栏结构样式
   ____________________________________________________________________________________________
   |      名称             |      描述        | 数据类型       |            来源                |
   | isSidebarNavCollapse | 导航菜单是否折叠  |  Boolean       |  store文件夹下的state.js       |
   |     currentMenu     |   当前路由的name  |  String        |  store文件夹下的permission模块 |
   |     sidebarMenu     |  侧边栏的所有路由 |  Array[object] |  store文件夹下的permission模块 |
   |_____________________|_________________|________________|_______________________________
-->
<template>
  <aside class="sidebar-container">
  <el-menu
    :collapse="isSidebarNavCollapse"
    background-color="#304156"
    text-color="#eee"
    active-text-color="#4dbcff"
    :default-active="currentMenu"
    class="sidebar"
  >
    <DynamicMenu :menuList="sidebarMenu"></DynamicMenu>
  </el-menu>
  </aside>
</template>

<script>
import { mapState } from "vuex";
import DynamicMenu from "./dynamic-menu.vue";
export default {
  computed: {
    ...mapState(["isSidebarNavCollapse"]),
    ...mapState("permission", ["sidebarMenu", "currentMenu"]),
  },
  components: {
    DynamicMenu,
  },
};
</script>

<style lang="less" scoped>
.sidebar {
    width: 240px !important;
    height: 100%;
    background: #304156;
    transition: all 0.25s;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    overflow: hidden;
    // flex-shrink: 0;
     
}
</style>