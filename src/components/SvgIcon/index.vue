<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
/**
 * 该文件是全局公用组件  svg-icon
 *  _________________________________________________________________________________________________________________
   |      名称             |      描述        | 数据类型       |            来源                                      |
   |       iconClass      |从父组件写入的prop |    String     |         父组件prop                                   |
   |       className     | 从父组件写入的样式 |    String     |         父组件prop                                   |
   |     iconName()      |计算出来的svg的name|  Function     |                                                     |        
   |      svgClass()    |  计算svg组件的样式 |  Function     |                                                      |
   |___________________|_________________|________________|______________________________________________________ |
 */
export default {
  name: "svg-icon",
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
    },
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`;
    },
    svgClass() {
      if (this.className) {
        return "svg-icon " + this.className;
      } else {
        return "svg-icon";
      }
    },
  },
};
</script>

<style scoped>
/* svg组件的默认样式 */
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
