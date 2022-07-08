<template>
  <div class="header">
    <div class="title">通用管理系统</div>
    <div class="user">管理员：{{ name }}</div>
  </div>
</template>

<script>
import { getToken } from "../../utils/setToken";
export default {
  name: "Header",
  data() {
    return {
      name: "",
    };
  },
  created() {
    this.name = getToken("username");
  },
};
</script>

<style lang="scss" scoped>
.header {
  background: #2578b5;
  color: #fff;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
}
.title {
  width: 200px;
  font-size: 24px;
}
.user {
  margin-right: 20px;
}
</style>
