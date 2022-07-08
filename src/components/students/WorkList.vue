<template>
  <div class="worklist">
    <el-table
      v-loading="loading"
      element-loading-text="数据加载中"
      height="670"
      :data="tableData"
      border
      style="width: 100%"
      :empty-text="text"
    >
      <el-table-column prop="id" label="用户名ID" width="180">
      </el-table-column>
      <el-table-column prop="userId" label="所属班级" width="180">
      </el-table-column>
      <el-table-column prop="title" label="作业名称"> </el-table-column>
      <el-table-column prop="completed_text" label="完成情况">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { worksList } from "../../api/api";
import { getTableData } from "../../utils/table";
export default {
  name: "WorkList",
  data() {
    return {
      tableData: [],
      loading: true,
      text: " ",
    };
  },
  methods: {
    getWorkList() {
      // 第一种方法
      /*worksList()
        .then((res) => {
          if (res.data.status === 200) {
            console.log(res);
            this.tableData = res.data.data;
            this.loading = false;
            this.tableData.forEach((item) => {
              item.completed
                ? (item.completed_text = "是")
                : (item.completed_text = "否");
            });
          } else {
            this.text = "暂无数据";
          }
        })
        .catch((err) => {
          throw err;
        });*/
      // 第二种方法
      getTableData(this, "/works", {}, ["completed"]);
    },
  },
  created() {
    this.getWorkList();
  },
};
</script>

<style scoped></style>
