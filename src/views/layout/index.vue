<!--
 * @Author: liang
 * @Date: 2022-03-04 16:24:41
 * @LastEditors: liang
 * @LastEditTime: 2022-03-07 21:10:59
 * @Description: file content
 * @FilePath: \作业\my-home\src\views\layout\index.vue
-->
<template>
  <div :class="{navCollapsed:isSidebarNavCollapse}">
    <!-- 左侧导航栏 -->
    <leftSide class="sidebar"></leftSide>
    <!-- 右侧主体视图---加上top栏 -->
    <mainContent></mainContent>
   </div>
</template>

<script>
import { mapState } from 'vuex'
import leftSide from './component/left_side/leftSide.vue'
 import mainContent from './component/main-content/index'
export default {
  computed: {
        ...mapState(['isSidebarNavCollapse'])
    },
    components:{
      leftSide,
      mainContent
    }
}
</script>

<style lang="less" scoped>

</style>

 