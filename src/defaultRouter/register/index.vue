 <template>
  <div>
    <RegisterHeader />
    <RegisterMain />
  </div>
</template>
<script>
import RegisterHeader from "./header/index.vue";
import RegisterMain from "./main/index.vue";
export default {
  components: {
    RegisterHeader,
    RegisterMain,
  },
};
</script>
<style lang="less" scoped>
div {
  display: flex;
  flex-direction: column;
  background-color: #f3f5f8;
}
</style>