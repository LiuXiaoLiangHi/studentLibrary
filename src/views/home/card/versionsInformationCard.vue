<!--
 * @Author: liang
 * @Date: 2022-04-06 16:16:02
 * @LastEditors: liang
 * @LastEditTime: 2022-04-07 14:32:22
 * @Description: file content
 * @FilePath: \作业\my-home\src\views\home\card\versionsInformationCard.vue
-->
<template>
  <el-card class="card">
    <p>
      当前系统版本号为
      {{ systemVersion }}
    </p>
    
  </el-card>
</template>

<script>
import { version } from "../../../../package.json";
export default {
  data() {
    return {
      systemVersion: version,
    };
  },
};
</script>

<style scoped lang="less">
p {
  background: #35495e;
  padding: 1px;
  border-radius: 3px 0 0 3px;
  color: #fff;
  background: #007aff;
  padding: 1px;
  border-radius: 0 3px 3px 0;
  color: #fff;
  font-weight: bold;
}
</style>