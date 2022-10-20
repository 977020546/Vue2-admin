import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "hash",
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: "/",
      name: "首页",
      redirect: "/login",
      component: () => import("../components/Login.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../components/Login.vue"),
    },
    {
      path: "*",
      name: "NotFound",
      component: () => import("../components/NotFound.vue"),
    },
    /*{
      path: "/home",
      //component: () => import("../components/Home.vue"),//懒加载
      component: (resolve) => require(["../components/Home.vue"], resolve), //异步组件
    },*/
    {
      path: "/home",
      name: "学生管理",
      redirect: "/home/studentlist",
      component: () => import("../components/Home.vue"), //懒加载
      children: [
        {
          path: "/home/studentlist",
          name: "学生列表",
          component: () => import("../components/students/StudentList.vue"),
        },
        {
          path: "/home/infolist",
          name: "信息列表",
          component: () => import("../components/students/InfoList.vue"),
        },
        {
          path: "/home/infoment",
          name: "信息管理",
          component: () => import("../components/students/InfoMent.vue"),
        },
        {
          path: "/home/worklist",
          name: "作业列表",
          component: () => import("../components/students/WorkList.vue"),
        },
        {
          path: "/home/workment",
          name: "作业管理",
          component: () => import("../components/students/WorkMent.vue"),
        },
      ],
    },
    {
      path: "/data",
      name: "数据分析",
      component: () => import("../components/Home.vue"), //懒加载
      children: [
        {
          path: "/data/dataview",
          name: "数据概览",
          component: () => import("../components/dataAnalysis/DataView.vue"),
        },
        {
          path: "/data/mapview",
          name: "地图概览",
          component: () => import("../components/dataAnalysis/MapView.vue"),
        },
        {
          path: "/data/travelmap",
          name: "旅游地图",
          component: () => import("../components/dataAnalysis/TravelMap.vue"),
        },
        {
          path: "/data/analysemap",
          name: "分析地图",
          component: () => import("../components/dataAnalysis/AnalyseMap.vue"),
        },
      ],
    },
    {
      path: "/users",
      name: "用户中心",
      component: () => import("../components/Home.vue"), //懒加载
      children: [
        {
          path: "/users/user",
          name: "权限管理",
          component: () => import("../components/users/User.vue"),
        },
      ],
    },
  ],
});
