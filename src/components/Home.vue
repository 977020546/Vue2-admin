<template>
  <div class="home">
    <el-container>
      <el-header style="padding: 0"><Header /></el-header>
      <el-container class="content">
        <el-aside width="200px"><Menu /></el-aside>
        <el-container>
          <el-main><Breadcrumb class="bread" /><Content /></el-main>
          <el-footer><Footer /></el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "./common/Header.vue";
import Footer from "./common/Footer.vue";
import Menu from "./common/Menu.vue";
import Content from "./common/Content.vue";
import Breadcrumb from "./common/Breadcrumb";
export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Menu,
    Content,
    Breadcrumb,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
.el-container {
  height: 100%;
}
.bread {
  margin-bottom: 10px;
}
</style>
