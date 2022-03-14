<!--
 * @Author: liang
 * @Description:  主页面的左侧导航栏结构样式
  
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
  data() {
    return {
      isCollapse: true,
    };
  },
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