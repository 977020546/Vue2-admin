<template>
  <el-menu
    :default-active="this.$route.path"
    class="el-menu-vertical-demo"
    background-color="#2578b5"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
  >
    <el-submenu index="/home">
      <template slot="title">
        <i class="fa fa-group fa-2x identical"></i>
        <span>学生管理</span>
      </template>
      <el-menu-item index="/home/studentlist">
        <i class="fa fa-list identical fa-1.5x"></i>
        <span>学生列表</span>
      </el-menu-item>
      <el-menu-item index="/home/infolist">
        <i class="fa fa-list-alt identical"></i>
        <span>信息列表</span>
      </el-menu-item>
      <el-menu-item index="/home/infoment">
        <i class="fa fa-vcard-o identical"></i>
        <span>信息管理</span>
      </el-menu-item>
      <el-menu-item index="/home/worklist">
        <i class="fa fa-list identical"></i>
        <span>作业列表</span>
      </el-menu-item>
      <el-menu-item index="/home/workment">
        <i class="fa fa-vcard-o identical"></i>
        <span>作业管理</span>
      </el-menu-item>
    </el-submenu>
    <el-submenu index="/data">
      <template slot="title">
        <i class="fa fa-line-chart fa-2x identical"></i>
        <span>数据分析</span>
      </template>
      <el-menu-item index="/data/dataview">
        <i class="fa fa-bar-chart identical"></i>
        <span>数据概览</span>
      </el-menu-item>
      <el-menu-item index="/data/mapview">
        <i class="fa fa-street-view identical"></i>
        <span>地图概览</span>
      </el-menu-item>
      <el-menu-item index="/data/travelmap">
        <i class="fa fa-suitcase identical"></i>
        <span>旅游地图</span>
      </el-menu-item>
      <el-menu-item index="/data/analysemap">
        <i class="fa fa-area-chart identical"></i>
        <span>分析地图</span>
      </el-menu-item>
    </el-submenu>
    <el-submenu index="/use">
      <template slot="title">
        <i class="fa fa-user-circle-o fa-2x identical"></i>
        <span>用户中心</span>
      </template>
      <el-menu-item index="/users/user">
        <i class="fa fa-drivers-license identical"></i>
        <span>权限管理</span>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: 0;
  height: 100%;
}
.identical {
  margin-right: 5px;
}
</style>
