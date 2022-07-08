<template>
  <div class="travelmap">
    <el-card class="card"><div id="main"></div></el-card>
  </div>
</template>

<script>
import geoJosn from "../../assets/data.json";
import { travelmap } from "../../api/api";
export default {
  name: "TravelMap",

  created() {
    travelmap()
      .then((res) => {
        if (res.data.status === 200) {
          console.log(res);
          let { points, linesData } = res.data.data;
          this.draw(points, linesData);
        }
      })
      .catch((err) => {
        throw err;
      });
  },
  methods: {
    draw(points, linesData) {
      let myChart = this.$echarts.init(document.getElementById("main"));
      this.$echarts.registerMap("china", geoJosn); //注册可用的地图，必须包括feo组件或者map图表类型得时候才可用使用

      // console.log(geoJosn);
      let option = {
        backgroundColor: "rgb(121,145,209)",
        geo: {
          map: "china",
          aspectScale: 0.75, //scale地图长宽比
          zoom: 1.1,
          itemStyle: {
            areaColor: {
              type: "radial",
              x: 0.5,
              y: 0.5,
              r: 0.8,
              colorStops: [
                {
                  offset: 0,
                  color: "#09132c", //0%处得颜色
                },
                {
                  offset: 1,
                  color: "#274d68", //100%处得颜色
                },
              ],
              globalCoord: true,
            },
            shadowColor: "rgb(58,115,192)",
            shadowOffsetX: 10,
            shadowOffsetY: 11,
          },
          regions: [
            {
              name: "南海诸岛",
              itemStyle: {
                opacity: 0.5,
              },
            },
          ],
        },
        series: [
          {
            //配置地图相关参数，绘制地图，这个对象是关于地图图表得相关设置
            type: "map",
            label: {
              show: true,
              color: "#1DE9B6",
              emphasis: {
                color: "rgb(183,185,14)",
              },
            },
            zoom: 1.1,
            map: "china",
            itemStyle: {
              backgroundColor: "rgb(147,235,248)",
              borderWidth: 1,
              areaColor: {
                type: "radial",
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgb(31,54,150)", //0%处得颜色
                  },
                  {
                    offset: 1,
                    color: "rgb(89,128,142)", //100%处得颜色
                  },
                ],
                globalCoord: true,
              },
              emphasis: {
                areaColor: "rgb(46,229,206)",
                borderWidth: 0.1,
              },
            },
          },
          // 关于地图中散点图得配置
          {
            type: "effectScatter", //散点图
            coordinateSystem: "geo",
            showEffectOn: "render",
            SymbolSize: 10, //散点大小
            zlevel: 1,
            data: points,
            rippleEffect: {
              //涟漪特效相关配置
              period: 15,
              scale: 4,
              brushType: "fill",
            },
          },
          // 关于地图中线路动图效果设置
          {
            type: "lines",
            zlevel: 2,
            effect: {
              show: true,
              period: 4, //动画周期
              Symbol: "arrow", //箭头样式
              SymbolSize: 7, //符号大小
              trailLength: 0.4, //拖尾效果
            },
            lineStyle: {
              normal: {
                color: "#1DE9B6",
                width: 1,
                opacity: 0.1,
                curveness: Math.random(), //线的弯曲程度
              },
            },
            data: linesData,
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style scoped>
.travelmap {
  width: 100%;
}
.card {
  height: 100%;
}
#main {
  width: 100%;
  height: 650px;
}
</style>
