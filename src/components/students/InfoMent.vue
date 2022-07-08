<template>
  <div class="infoMent">
    <!-- 新增 -->
    <div class="infoMent">
      <el-form :inline="true" class="demo-form-inline" size="small">
        <el-form-item>
          <el-button type="primary" @click="addStudent">新增</el-button>
          <el-button type="primary" @click="checkAll()">全选/反选</el-button>
          <el-button type="danger" icon="el-icon-delete" @click="deleteAll()"
            >批量删除</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        border
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="name" label="姓名" width="130" align="center">
        </el-table-column>
        <el-table-column
          prop="sex_text"
          label="性别"
          width="130"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="age" label="年龄" width="130" align="center">
        </el-table-column>
        <el-table-column prop="father" label="父亲" width="130" align="center">
        </el-table-column>
        <el-table-column prop="mather" label="母亲" width="130" align="center">
        </el-table-column>
        <el-table-column prop="address" label="家庭地址" align="center">
        </el-table-column>
        <el-table-column
          prop="time"
          label="入校时间"
          width="130"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="phone"
          label="联系方式"
          width="130"
          align="center"
        >
        </el-table-column>
        <el-table-column label="操作" width="200" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              icon="el-icon-edit"
              type="primary"
              @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              icon="el-icon-delete"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 弹窗 -->
    <div>
      <el-dialog :title="state" :visible.sync="dialogVisible" width="550px">
        <el-form ref="form" :model="form" :rules="rules">
          <el-form-item label="姓名" prop="name" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item
            label="年龄"
            prop="age"
            :label-width="formLabelWidth"
            :rules="[
              { required: true, message: '请输入年龄' },
              { type: 'number', message: '年龄必须为数字值' },
            ]"
          >
            <el-input v-model.number="form.age" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="sex" :label-width="formLabelWidth">
            <el-radio v-model="form.sex" label="1">男</el-radio>
            <el-radio v-model="form.sex" label="2">女</el-radio>
          </el-form-item>
          <el-form-item
            label="父亲姓名"
            prop="father"
            :label-width="formLabelWidth"
          >
            <el-input v-model="form.father" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item
            label="母亲姓名"
            prop="mather"
            :label-width="formLabelWidth"
          >
            <el-input v-model="form.mather" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item
            label="家庭住址"
            prop="address"
            :label-width="formLabelWidth"
          >
            <el-input v-model="form.address" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item
            label="入校时间"
            prop="time"
            :label-width="formLabelWidth"
          >
            <el-date-picker
              v-model="form.time"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd"
              type="date"
              placeholder="选择日期"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item
            label="联系方式"
            prop="phone"
            :label-width="formLabelWidth"
          >
            <el-input v-model="form.phone" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div>
          <el-button @click="cancel('form')">取 消</el-button>
          <el-button type="primary" @click="sure('form')">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { getData, changeInfo, delData } from "../../utils/table";
import { delInfo } from "../../api/api";

export default {
  name: "InfoList",
  data() {
    return {
      tableData: [],
      formLabelWidth: "80px",
      dialogVisible: false,
      state: "添加学生信息",
      form: {
        name: "",
        age: "",
        sex: "1",
        father: "",
        mather: "",
        time: "",
        address: "",
        phone: "",
      },
      rules: {
        name: [{ required: true, message: "请输入姓名" }],
        sex: [{ required: true }],
        address: [{ required: true, message: "请输入地址" }],
        time: [{ required: true, message: "请选择入学时间" }],
        phone: [{ required: true, message: "请输入手机号码" }],
      },
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(this.$refs.multipleTable);
      console.log(this.multipleSelection);
    },
    // 全选
    checkAll(row) {
      this.$refs.multipleTable.toggleAllSelection(row);
    },
    // 取消全选
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    // 批量删除
    deleteAll() {
      this.$confirm("此操作将永久删除该信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          delInfo(
            this.multipleSelection.forEach((item) => {
              return item.id;
            })
          ).then((res) => {
            if (res.data.status === 200) {
              console.log(res);
              this.$message({
                message: "恭喜你，删除成功",
                type: "success",
              });
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
    // 确认
    sure(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          if (this.state === "添加学生信息") {
            changeInfo(this, "post", "/info", this.form, getData);
          } else if (this.state === "编辑学生信息") {
            changeInfo(this, "put", "/info", this.form, getData);
          }
        }
      });
    },
    // 取消编辑
    cancel(form) {
      this.dialogVisible = false;
      this.$refs[form].resetFields();
    },
    // 新增学生信息
    addStudent() {
      this.dialogVisible = true;
      this.state = "添加学生信息";
    },
    // 编辑信息列表
    handleEdit(index, row) {
      console.log(index);
      console.log(row);
      this.form = row;
      console.log(this.form);
      this.dialogVisible = true;
      this.state = "编辑学生信息";

      // console.log({ ...row });
    },
    // 删除信息列表
    handleDelete(index, row) {
      console.log(index, row);
      delData(this, "/info", row.id, getData);
    },
  },
  created() {
    getData(this, "/info");
  },
};
</script>

<style scoped>
.infoMent {
  text-align: left;
}
</style>
