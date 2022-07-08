<template>
  <div class="studentlist">
    <!-- 搜索框加按钮 -->
    <div class="input">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="姓名">
          <el-input
            v-model="formInline.name"
            placeholder="请输入姓名查询"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">查询</el-button>
          <el-button type="primary" @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 学生列表表格 -->
    <div>
      <!-- 1: 1-10 2: 11-20 slice((当前页数 - 1)*每页条数，当前页数*每页条数) -->
      <el-table :data="compData" border style="width: 100%">
        <el-table-column prop="name" label="姓名" width="130px" align="center">
        </el-table-column>
        <el-table-column
          prop="sex_text"
          label="性别"
          width="130px"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="age" label="年龄" width="130px" align="center">
        </el-table-column>
        <el-table-column
          prop="number"
          label="学号"
          width="130px"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="class" label="班级" width="130px" align="center">
        </el-table-column>
        <el-table-column
          prop="state_text"
          label="状态"
          width="130px"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="address" align="center" label="地址">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="联系方式"
          width="150px"
          align="center"
        >
        </el-table-column>
        <el-table-column label="操作" width="130px" align="center">
          <template slot-scope="scope">
            <el-button
              icon="el-icon-delete-solid"
              size="mini"
              type="danger"
              @click="del(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[9, 18, 27, 36, 45]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
import { studentslist, studentsDel } from "../../api/api";
export default {
  name: "StudentList",
  data() {
    return {
      tableData: [],
      currentPage: 1, //当前页数
      pageSize: 9, //每页显示条数
      total: 0, //总条数
      id: "",
      formInline: {
        name: "",
      },
    };
  },
  computed: {
    compData() {
      return this.tableData.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      );
    },
  },
  methods: {
    getData(params) {
      studentslist(params).then((res) => {
        // console.log(res);
        if (res.data.status === 200) {
          this.tableData = res.data.data;
          this.total = res.data.total;
          this.tableData.forEach((item) => {
            item.sex === 1 ? (item.sex_text = "男") : (item.sex_text = "女");
            item.state === 1
              ? (item.state_text = "已入学")
              : item.state === "2"
              ? (item.state_text = "未入学")
              : (item.state_text = "休学中");
          });
        }
      });
    },
    getName(params) {
      studentslist(params).then((res) => {
        // console.log(res);
        if (res.data.status === 200) {
          this.tableData = res.data.data;
          this.total = this.compData.length;
        }
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    // 删除
    del(row) {
      this.$confirm("此操作将永久删除该信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          studentsDel(row.id).then((res) => {
            if (res.data.status === 200) {
              this.$message({
                message: "删除数据成功",
                type: "success",
              });
              this.getData();
              console.log(res);
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // 查询
    search() {
      console.log(this.formInline);
      this.getName(this.formInline);
    },
    // 重置
    reset() {
      this.formInline = {};
      this.getData(this.formInline);
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped>
.input {
  float: left;
}
.search {
  margin: 0 10px 10px;
}
.el-pagination {
  text-align: left;
  margin-top: 20px;
}
</style>
