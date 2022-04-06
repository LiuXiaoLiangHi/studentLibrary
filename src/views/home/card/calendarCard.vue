<!--
 * @Author: liang
 * @Date: 2022-04-06 16:49:18
 * @LastEditors: liang
 * @LastEditTime: 2022-04-06 18:35:17
 * @Description: file content
 * @FilePath: \作业\my-home\src\views\home\card\calendarCard.vue
-->
<template>
  <el-card class="calendar">
    <calendar :sundayStart="true"></calendar>
  </el-card>
</template>

<script>
import Calendar from "vue-calendar-component";

export default {
  components: {
    Calendar,
  },
};
</script>

<style lang="less">
.calendar {
  height: 300px;
  width: 500px;
}
</style>