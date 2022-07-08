<template>
  <div>
    <el-card
      ><el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item
          v-for="(item, index) in $route.matched"
          :key="index"
          :to="{ path: '/home' }"
          >{{ item.name }}</el-breadcrumb-item
        >
      </el-breadcrumb></el-card
    >
  </div>
</template>

<script>
export default {
  name: "name",
  // mounted() {
  //   console.log(this.$route);
  // },
};
</script>

<style scoped></style>
