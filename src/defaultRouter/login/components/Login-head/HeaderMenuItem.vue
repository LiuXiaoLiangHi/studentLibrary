<template>
  <el-menu-item class="header_menu_item" @click="changeBottomStyle" :style="{borderBottom:bottomStyle}">
    {{ itemProperty.title }}
    <!-- <svg-icon icon-class="三角形" class="header-menu_item_svg" v-show="itemProperty.isShowSvg" /> -->
  </el-menu-item>
</template>
<script>
export default {
  props: {
    itemProperty: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      isShowBottom: false,
      bottomStyle: ``,
    };
  },
  methods: {
    changeBottomStyle() {
      this.changeItemBottom()
    },
    // 改变当前组件的下边框颜色
    changeItemBottom() {
      this.bottomStyle = `1px solid #a0cfff !important`;
    },
    // 恢复当前组件的下边框样式为默认样式
    recoverItemBottom() {
      this.bottomStyle = ``;
    },
  },
};
</script>
<style lang="less" scoped>
.header_menu_item {
  @elmentitem: 65px;
  height: @elmentitem !important;
  line-height: @elmentitem !important;
  .header-menu_item_svg {
    width: 10px;
    height: 10px;
    position: absolute;
    top: 57px;
    left: 54px;
  }
  &:hover {
    border-bottom: 1px solid #a0cfff !important;
  }
}
</style>
