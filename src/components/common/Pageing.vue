<template>
  <div class="Pageing">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[10, 20, 30, 40, 50]"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      :url="url"
    >
    </el-pagination>
  </div>
</template>

<script>
import { getTableData } from "../../utils/table";
export default {
  props: {
    total: Number,
    url: String,
  },
  name: "Pageing",
  data() {
    return {
      page: 1, //当前页数
      size: 10, //每页显示条数
    };
  },
  methods: {
    // 每一页
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.size = val;
      this.page = 1;
      getTableData(this.$parent, "/works", { page: this.page, size: val }, [
        "completed",
      ]);
    },
    // 当前页
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.page = val;
      getTableData(this.$parent, "/works", { page: val, size: this.size }, [
        "completed",
      ]);
    },
  },
  created() {
    getTableData(this.$parent, "/works", { page: this.page, size: this.size }, [
      "completed",
    ]);
  },
};
</script>

<style scoped></style>
