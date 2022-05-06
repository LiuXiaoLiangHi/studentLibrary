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
  // height: 300px;
  // width: 500px;
}
</style>