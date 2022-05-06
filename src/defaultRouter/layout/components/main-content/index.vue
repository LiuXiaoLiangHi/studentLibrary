<!--
 * @Author: liang
 * @Description: 主页的结构
-->

<template>
  <div class="main-container" :style="{width:dynamicWidth}">
    <TopAside />
    <Content />
  </div>
</template>

<script>
import TopAside from "./top-aside";
import Content from "./content";
import { mapState } from "vuex";

export default {
  data() {
    return {
      dynamicWidth: "0px",
    };
  },
  computed: {
    ...mapState(["isSidebarNavCollapse"]),
  },
  components: {
    TopAside,
    Content,
  },
  watch: {
    isSidebarNavCollapse(newValue) {
      if (newValue === true) {
        this.dynamicWidth = window.screen.width - 64 + "px";
      } else {
        this.dynamicWidth = window.screen.width - 240 + "px";
      }
    },
  },
  mounted() {
    if (this.isSidebarNavCollapse) {
      this.dynamicWidth = window.screen.width - 64 + "px";
    } else {
      this.dynamicWidth = window.screen.width - 240 + "px";
    }
  },
};
</script>
<style lang="less" scoped>
/* 主体内容 */
.main-container {
  min-height: 100%;
  // width:100%;
  transition: margin-left 0.25s;
  position: relative;
  left: 240px;
  box-sizing: border-box;
  padding: 60px 20px 0 20px;
  background-color: #e2e7eb !important;
  background-size: 100% !important;
  // background:url('~@/style/image/1.png') no-repeat ;
}
</style>
