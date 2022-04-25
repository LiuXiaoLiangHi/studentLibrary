
<template>
  <div :class="{navCollapsed:isSidebarNavCollapse}">
    <!-- 左侧导航栏 -->
    <LeftSide class="sidebar"></LeftSide>
    <!-- 右侧主体视图---加上top栏 -->
    <MainContent></MainContent>
   </div>
</template>

<script>
import { mapState } from 'vuex'
import LeftSide from './components/left_side/leftSide.vue'
 import MainContent from './components/main-content/index.vue'
export default {
  computed: {
        ...mapState(['isSidebarNavCollapse'])
    },
    components:{
      LeftSide,
      MainContent
    }
}
</script>

<style lang="less" scoped>

</style>

 