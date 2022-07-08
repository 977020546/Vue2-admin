import Vue from "vue";
import App from "./App.vue";
// 局部引入
import "./plugin/element";
// 导入图标库
import "font-awesome/css/font-awesome.min.css";
// 引入axios
// import axios from "axios";
// 引入路由
import router from "./router/index.js";
import service from "./service";

// 引用echarts
import * as echarts from "echarts";
Vue.prototype.$echarts = echarts;

// Vue.prototype.axios = axios; //挂载到原型，可以在全局使用
Vue.prototype.service = service;
Vue.config.productionTip = false;

// 路由导航守卫
router.beforeEach((to, from, next) => {
  if (!localStorage.getItem("username")) {
    if (to.path !== "/login") {
      next("/login");
    } else {
      next();
    }
  }
  next();
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
