<!--
 * @Author: liang
 * @Date: 2022-03-14 08:31:06
 * @LastEditors: liang
 * @LastEditTime: 2022-04-06 17:27:49
 * @Description: file content
 * @FilePath: \作业\my-home\src\views\layout\component\main-content\content.vue
-->
<!--
 * @Author: liang
 * @Description: 主页结构右侧视图层
 *  
-->
<template>
  <router-view class="content"></router-view>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less"  >
.content {
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 8px 8px rgba(10, 16, 20, 0.24), 0 0 8px rgba(10, 16, 20, 0.12);
  min-width: 1640px;
  height: 910px;
}
</style>
