<!--
 * @Author: liang
 * @Date: 2022-03-04 16:26:31
 * @LastEditors: liang
 * @LastEditTime: 2022-03-12 22:36:32
 * @Description: file content
 * @FilePath: \作业\my-home\src\views\home\index.vue
-->
<template>
  <div class="home">
    <!-- 第一个卡片 -->
    <el-card class="card el-card-one">
      <div>
        <!---->
        <el-link :underline="false" class="home_link">
          <img src="@/style/image/我的任务.png" alt="" />
          <span>任务</span>
        </el-link>
      </div>
      <div>
        <el-link :underline="false" href="" target="_blank" class="home_link">
          <img src="@/style/image/邮件_.png" alt="" />
          <span>邮件</span>
        </el-link>
      </div>
      <!--  -->
      <div>
        <el-link :underline="false" href="" target="_blank" class="home_link">
          <img src="@/style/image/消息.png" alt="" />
          <span>通知</span>
        </el-link>
      </div>
      <!--  -->
      <div>
        <el-link :underline="false" href="" target="_blank" class="home_link">
          <img src="@/style/image/日历.png" alt="" />
          <span>日历</span>
        </el-link>
      </div>
      <div>
        <el-link :underline="false" href="" target="_blank" class="home_link">
          <span class="usully-size">常用<br />功能</span>
        </el-link>
      </div>
      <!--  -->
      <div>
        <el-link
          :underline="false"
          href="https://www.huya.com/"
          target="_blank"
          class="home_link"
        >
          <img src="@/style/image/娱乐.png" alt="" />
          <span>娱乐</span>
        </el-link>
      </div>
    </el-card>
     <!--第二个卡片-->
    <el-card class="card el-card-two">
      <div slot="header" class="two-header">
        <span>通知公告</span>
        <img src="@/style/image/更多功能.png" alt="" />
      </div>
      <el-table :data="homeMessage.advice">
        <el-table-column prop="s" :width="25">
          <img src="@/style/image/喇叭.png" alt="" />
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
    </el-card>
    <!-- 第三个卡片 -->
    <div id="he-plugin-standard"></div>
    <!--第四个卡片-->
    <el-card class="card el-card-therr">
      <div slot="header" class="two-header">
        <span>待办事项</span>
        <img src="@/style/image/更多功能.png" alt="" />
      </div>
      <el-table :data="homeMessage.advice">
        <el-table-column prop="s" :width="25">
          <img src="@/style/image/待办-选中.png" alt="" />
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
    </el-card>
    <!-- 第五个卡片 -->
    <el-card class="card el-card-four">
       <div slot="header" class="two-header">
        <span>邮件处理</span>
        <img src="@/style/image/更多功能.png" alt="" />
      </div>
      <el-table :data="homeMessage.advice">
        <el-table-column prop="s" :width="25">
          <img src="@/style/image/邮件.png" alt="" />
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
      
    </el-card>
    <!-- 第六个卡片 -->
    <el-card class="card el-card-five">
      <Calendar :sundayStart="true"></Calendar>
    </el-card>
    <!-- 第七个卡片 -->
    <el-card class="card el-card-six">
      <chart></chart>
    </el-card>
    <!-- 右下角机器人 -->
    <robot></robot>
  </div>
</template>

<script>
import Calendar from "vue-calendar-component";
import robot from "./common/robot.vue";
import chart from './common/chart.vue'
import { mapState } from "vuex";
export default {
  data() {
    return {
      columns: [
        {
          id: "message",
          width: 380,
        },
        {
          id: "date",
          width: 80,
        },
        {
          id: "subscribe",
          width: 60,
        },
      ],
    };
  },
  components: {
    Calendar,
    robot,
    chart
  },
  created() {
    // 获取当前城市的天气情况
    window.WIDGET = {
      CONFIG: {
        layout: "1",
        width: "500",
        height: "200",
        background: "1",
        city: "CN101240213",
        dataColor: "FFFFFF",
        key: "c8fe4515b27e449aa648b7c00b049227",
      },
    };
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0";
    document.getElementsByTagName("head")[0].appendChild(script);
  },
  mounted() {
    this.$store.dispatch("homeMessage/GET_SOMEADVICE");
  },
  computed: {
    ...mapState(["homeMessage"]),
  },
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
  }
  .el-card-one {
    & div {
      flex-grow: 2;
      width: 170px;
      height: 80px;
      margin: 5px;
      border-radius: 5px;
    }
    & div:first-child {
      background-color: #66a5ea;
      margin-top: 15px;
      .home_link {
        color: #f9ffff;
        &:hover {
          color: #f9ffff;
        }
        img {
          margin: 10px;
          margin-left: 15px;
          float: left;
        }
        span {
          font-size: 30px;
          margin-top: 20px;
          font-weight: 100;
          display: inline-block;
          font-family: "Franklin Gothic Medium", "Arial Narrow", Arial,
            sans-serif;
        }
      }
    }
    & div:nth-child(2) {
      background-color: #4bc0a6;
      margin-top: 15px;
    }
    & div:nth-child(3) {
      background-color: #f4ae00;
      margin-top: 15px;
    }
    & div:nth-child(4) {
      background-color: #f4ae00;
      width: 190px;
    }
    & div:nth-child(5) {
      background-color: #a386c8;
      width: 130px;
    }
    & div:nth-child(6) {
      background-color: #61a6df;
      width: 190px;
    }
    // 常用功能这几个字的样式
    .usully-size {
      margin-left: 37px;
      margin-top: 12px !important;
      font-size: 24px !important;
    }
  }
  .el-card-two {
    .two-header {
      font-size: 20px !important;
      display: flex;
      justify-content: space-between;
      // border-bottom: 1px solid #dddddd;
    }
  }
  .el-card-therr {
    height: 280px;
     .two-header {
      font-size: 20px !important;
      display: flex;
      justify-content: space-between;
      // border-bottom: 1px solid #dddddd;
    }
  }
  .el-card-four {
    height: 280px;
    .two-header {
      font-size: 20px !important;
      display: flex;
      justify-content: space-between;
  }
  }
  .el-card-five {
    width: 500px;
    height: 290px;
    // margin-top: 20px;
  }
  .el-card-six {
    width: 1120px;
    height: 350px;
  }
}
</style>