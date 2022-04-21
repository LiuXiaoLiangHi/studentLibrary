<!--
 * @Author: liang
 * @Date: 2022-03-04 16:26:31
 * @LastEditors: LAPTOP-LD525C2O
 * @LastEditTime: 2022-04-20 21:40:35
 * @Description: file content
 * @FilePath: \作业\my-home\src\views\home\index.vue
-->
<template>
  <div class="home">
    <!-- 第一个卡片 -->
    <versionsInformationCard></versionsInformationCard>
    <!--第二个卡片-->
    <!-- 
    <el-card class="card el-card-two">
      <div slot="header" class="two-header">
        <span>版本更新通知公告</span>
        <el-popover placement="right" width="100" trigger="click" transition>
          <el-link :underline="false" href="http://localhost:8080/#/systemSet"
            >查看全部信息</el-link
          >
          <svg-icon icon-class="更多功能" slot="reference"></svg-icon>
        </el-popover>

        
      </div>
      <el-table :data="homeMessage.advice">
        <el-table-column prop="s" :width="25">
          <svg-icon icon-class="喇叭"> </svg-icon>

        
        </el-table-column>
        <el-table-column
          v-for="col in columns"
          :prop="col.id"
          :key="col.id"
          :label="col.label"
          :width="col.width"
          :show-overflow-tooltip="true"
        >
        </el-table-column>
      </el-table>
    </el-card> -->
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
    width: 550px;
    height: 200px;
    &:hover {
      box-shadow: 0 8px 8px rgba(10, 16, 20, 0.24),
        0 0 8px rgba(10, 16, 20, 0.12);
    }
    &:nth-child(4) {
      height: 240px;
    }
    &:nth-child(5) {
      height: 240px;
    }
    &:nth-child(7) {
      width: 1120px;
      height: 350px;
    }
  }
}
</style>