<template>
  <div class="worklist">
    <div>
      <el-table
        v-loading="loading"
        element-loading-text="数据加载中"
        :data="tableData"
        border
        style="width: 100%"
        :empty-text="text"
      >
        <el-table-column prop="id" label="用户名" width="180">
        </el-table-column>
        <el-table-column prop="userId" label="所属班级" width="180">
        </el-table-column>
        <el-table-column prop="title" label="作业名称"> </el-table-column>
        <el-table-column prop="completed_text" label="完成情况">
        </el-table-column>
      </el-table>
    </div>
    <div><Page :total="total" :url="url" /></div>
  </div>
</template>

<script>
import Page from "../common/Pageing";
export default {
  name: "WorkMent",
  components: {
    Page,
  },
  data() {
    return {
      tableData: [],
      loading: true,
      text: " ",
      total: 0, //总条数,
      url: "/works",
    };
  },
};
</script>

<style scoped></style>
