 <template>
  <div class="btn_none" @click="other_login">
    <svg-icon :icon-class="svgName" className="btn_svg"></svg-icon>
    <span>{{title}}</span>
  </div>
</template>

<script>
export default {
  props: ["svgName", "title"],
  methods: {
    other_login(){
       // 没有开发，使用未开放功能组件
      this.$root.$children[0].isShowUnder = true;
    }
  },
};
</script>

 <style lang="less" scoped>
.btn_none {
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  span{
    margin-left: 3px;
  }
  .btn_svg {
    width: 1.2em;
    height: 1.2em;
  }
  &:hover {
    cursor: pointer;
    user-select: none;
  }
}
</style>