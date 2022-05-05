 <template>
  <el-card class="card">
    <p>
      当前系统版本号为
      {{ systemVersion }}
    </p>
    
  </el-card>
</template>

<script>
import { version } from "../../../../package.json";
export default {
  data() {
    return {
      systemVersion: version,
    };
  },
};
</script>

<style scoped lang="less">
p {
  background: #35495e;
  padding: 1px;
  border-radius: 3px 0 0 3px;
  color: #fff;
  background: #007aff;
  padding: 1px;
  border-radius: 0 3px 3px 0;
  color: #fff;
  font-weight: bold;
}
</style>