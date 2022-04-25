<!--
 * @Author: liang
 * @Description: 主页结构右侧视图层
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
