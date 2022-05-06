 <template>
  <div class="login_footer_other">
    <div @click="lianxi">
      <svg-icon icon-class="纸飞机" />
      <span>联系作者</span>
    </div>
    <div style="border:1px solid #EBEBEB;height:40px;margin-top:7px"></div>
     <div @click="xiazaiApp">
      <svg-icon icon-class="下载" />
      <span>下载APP</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    lianxi(){
        // 没有开发，使用未开放功能组件
      this.$root.$children[0].isShowUnder = true;
    },
    xiazaiApp(){
  // 没有开发，使用未开放功能组件
      this.$root.$children[0].isShowUnder = true;
    }
  },
};
</script>

<style lang="less">
.login_footer_other {
  width: 100%;
  background-color: #f6f6f6;
  height: 55px;
  line-height: 55px;
  color: #1296DB;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  &>div>span{
      margin-left: 10px;
  }
  & div:nth-child(1):hover{
     cursor: pointer;
  }
   & div:nth-child(3):hover{
     cursor: pointer;
  }
}
</style>