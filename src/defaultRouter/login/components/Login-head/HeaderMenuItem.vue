 <template>
  <el-menu-item class="header_menu_item" v-on="$listeners" >
    {{ itemProperty.title }}
    <svg-icon
      icon-class="三角形"
      class="header-menu_item_svg"
      v-show="itemProperty.isShowSvg"
    ></svg-icon>
  </el-menu-item>
</template>
<script>
export default {
  props: {
    itemProperty: {
      required: true,
      type: Object,
    }
  },
  methods: {
    
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