 <template>
  <div class="home">
    <!-- 第一个卡片 -->
    <versionsInformationCard></versionsInformationCard>
    <!--第二个卡片-->
     <generalCard cardTitle="系统更新公告" :tableData="systemDate"></generalCard>
    <weatherInfoCard ></weatherInfoCard>

    <generalCard cardTitle="学生信息公告"></generalCard>
    <generalCard  cardTitle="图书信息公告"></generalCard>
    <calendarCard></calendarCard>  
    <!-- 第七个卡片 -->
    <el-card class="card el-card-six">
      <chart></chart>
    </el-card>
    <!-- 右下角机器人 -->
    <robot></robot>
  </div>
</template>

<script>
import robot from "./common/robot.vue";
import chart from "./common/chart.vue";
import versionsInformationCard from "./card/versionsInformationCard.vue";
import generalCard from "./card/generalCard.vue";
import weatherInfoCard from "./card/weatherInfoCard.vue";
import calendarCard from "./card/calendarCard.vue";
// import {getMessage} from '@/api/homeList'
export default {
  data() {
    return {
      systemDate:[]
    };
  },
  components: {
    robot,
    chart,
    versionsInformationCard,
    generalCard,
    weatherInfoCard,
    calendarCard,
  },

  mounted() {
  this.fetchGetMessage()
  },
  computed: {
    
  },
  methods: {
   async fetchGetMessage(){
        // let {data}= await getMessage();
        // this.systemDate=data
    }
  }
};
</script>

 <style lang="less" scoped>
.home {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  .card {
    // width: 550px;
    // height: 200px;
    &:hover {
      box-shadow: 0 8px 8px rgba(10, 16, 20, 0.24),
        0 0 8px rgba(10, 16, 20, 0.12);
    }
    &:nth-child(4) {
      // height: 240px;
      // flex : 1;
    }
    &:nth-child(5) {
      // height: 240px;
      //  flex : 1;
    }
    &:nth-child(7) {
      // width: 1100px;
      // height: 350px;
    }
  }
}
</style>