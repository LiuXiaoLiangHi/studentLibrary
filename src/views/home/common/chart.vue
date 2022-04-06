<!--
 * @Author: liang
 * @Description:  home页面的echars组件
-->
 
 
 <template>
  <div>
    <!-- echarts -->
    <div id="main_container" class="main_container"></div>
  </div>
</template>
<script>
import * as echarts from "echarts/core";
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from "echarts/components";
import { LineChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
]);
import { formatDate } from "@/utils/formatDate.js";
export default {
  data() {
    return {
      da1: formatDate(0),
      da2: formatDate(1),
      da3: formatDate(2),
      da4: formatDate(3),
      da5: formatDate(4),
      da6: formatDate(5),
      da7: formatDate(6),
    };
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      // 初始化echarts实例
      var myChart = echarts.init(document.getElementById("main_container"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "当前网站访问情况",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["总访问次数", "本机访问次数", "其他ip访问次数"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            this.da7,
            this.da6,
            this.da5,
            this.da4,
            this.da3,
            this.da2,
            this.da1,
          ],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "总访问次数",
            type: "line",
            //   stack: 'Total',
            data: [10, 12, 8, 9, 11, 10, 10],
          },
          {
            name: "本机访问次数",
            type: "line",
            //   stack: 'Total',
            data: [6, 7, 6, 8, 8, 10, 10],
          },
          {
            name: "其他ip访问次数",
            type: "line",
            //   stack: 'Total',
            data: [4, 5, 2, 1, 3, 0, 0],
          },
        ],
      });
    },
  },
};
</script>
<style lang="less" scoped>
.main_container {
  width: 1100px;
  height: 350px;
  overflow: hidden;
}
</style>