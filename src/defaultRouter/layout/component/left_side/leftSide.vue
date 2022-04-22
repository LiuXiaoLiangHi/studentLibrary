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
    <el-menu
        :collapse="isSidebarNavCollapse"
        background-color="#304156"
        text-color="#eee"
        active-text-color="#4dbcff"
        :default-active="currentMenu"
    >
      <DynamicMenu :menuList="sidebarMenu"></DynamicMenu>
    </el-menu>
</template>
 
<script>
import { mapState } from "vuex";
import DynamicMenu from '@/components/dynamic-menu'
export default {
  computed: {
    ...mapState(["isSidebarNavCollapse"]),
    ...mapState("permission", ["sidebarMenu", "currentMenu"]),
  },
    components: {
        DynamicMenu
    }
};
</script>

<style>

</style>