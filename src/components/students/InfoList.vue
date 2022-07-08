<template>
  <div class="infoList">
    <!-- 新增 -->
    <div class="infoList">
      <el-form :inline="true" class="demo-form-inline" size="small">
        <el-form-item>
          <el-button type="primary" @click="addStudent">新增</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <el-table :data="tableData" border style="width: 100%">
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
import { infoList, infoAdded, delInfo, editInfo } from "../../api/api";
// import { editInfo, delInfo, info } from "../../api/api"; //新增和编辑的api请求封装

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
    // 确认
    sure(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          // console.log(this.form, form);
          if (this.state === "添加学生信息") {
            infoAdded(this.form).then((res) => {
              if (res.data.status === 200) {
                this.dialogVisible = false;
                this.$refs["form"].resetFields();
                this.$message({ type: "success", message: "添加成功" });
                this.getInfoList();
              }
            });
          } else if (this.state === "编辑学生信息") {
            editInfo(this.form).then((res) => {
              if (res.data.status === 200) {
                this.dialogVisible = false;
                this.$refs["form"].resetFields();
                this.$message({ type: "success", message: "编辑成功" });
                this.getInfoList();
              }
            });
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
      this.form = { ...row };
      // console.log(this.form);
      this.dialogVisible = true;
      this.state = "编辑学生信息";

      // console.log({ ...row });
    },
    // 删除信息列表
    handleDelete(index, row) {
      console.log(index, row);
      this.$confirm("此操作将永久删除该信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          delInfo(row.id).then((res) => {
            if (res.data.status === 200) {
              console.log(res);
              this.$message({
                message: "恭喜你，删除成功",
                type: "success",
              });
              this.getInfoList();
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
    getInfoList() {
      infoList().then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          this.tableData = res.data.data;
          this.tableData.forEach((item) => {
            item.sex == 1 ? (item.sex_text = "男") : (item.sex_text = "女");
          });
        }
        // console.log(res);
      });
    },
  },
  created() {
    this.getInfoList();
  },
};
</script>

<style scoped>
.infoList {
  text-align: left;
}
</style>
