<template>
  <div class="DataView">
    <el-card class="Map">
      <div
        id="columnar"
        class="View"
        :style="{ width: '650px', height: '500px' }"
      ></div>
      <div
        id="linehart"
        class="View"
        :style="{ width: '700px', height: '500px' }"
      ></div>
    </el-card>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { dataView } from "../../api/api";
export default {
  name: "DataView",
  data() {
    return {};
  },
  methods: {
    draw(legend, xAxis, series) {
      // 折线图
      let linehart = echarts.init(document.getElementById("linehart"));
      //绘制图表
      let myLinehart = {
        title: {
          text: "会话量",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: legend,
        },
        xAxis: {
          type: "category",
          data: xAxis,
        },
        yAxis: {
          type: "value",
        },
        series: series,
      };
      linehart.setOption(myLinehart);
    },
  },
  mounted() {
    // 柱状图
    var columnar = echarts.init(document.getElementById("columnar"));
    // 绘制图表
    columnar.setOption({
      title: {
        text: "大佬进阶班",
      },
      tooltip: {},
      xAxis: {
        type: "category",
        data: ["一班", "二班", "三班", "四班", "五班", "六班"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "销量",
          type: "bar",
          data: [45, 42, 46, 48, 52, 47],
        },
      ],
    });
    window.onresize = function () {
      columnar.resize();
    };
  },
  created() {
    dataView()
      .then((res) => {
        if (res.data.status === 200) {
          console.log(res);
          let { legend, xAxis, series } = res.data.data;
          this.draw(legend, xAxis, series);
          console.log(legend, xAxis, series);
        }
      })
      .catch((err) => {
        throw err;
      });
  },
};
</script>

<style scoped>
.DataView {
  display: flex;
}
.Map {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.View {
  display: inline-block;
}
</style>
