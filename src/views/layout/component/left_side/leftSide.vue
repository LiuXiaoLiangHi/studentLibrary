<!--
 * @Author: liang
 * @Date: 2022-03-07 13:55:57
 * @LastEditors: liang
 * @LastEditTime: 2022-03-10 13:11:03
 * @Description: file content
 * @FilePath: \作业\my-home\src\views\layout\component\left_side\leftSide.vue
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