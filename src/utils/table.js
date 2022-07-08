// 获取表格数据
export function getData(root, url, params) {
  root.service
    .get(url, { params: params || {} })
    .then((res) => {
      if (res.data.status === 200) {
        root.tableData = res.data.data;
        root.total = res.data.total;
      }
    })
    .catch((err) => {
      throw err;
    });
}

// 新增和修改方法的封装
import qs from "qs";
export function changeInfo(root, method, url, form, callcak) {
  let data = qs.stringify(form);
  root.service[method](url, data)
    .then((res) => {
      if (res.data.status === 200) {
        callcak(root, url);
        root.dialogVisible = false;
        root.$refs["form"].resetFields();
        root.$message({ type: "success", message: res.data.message });
      }
    })
    .catch((err) => {
      throw err;
    });
}

// 删除方法封装
export function delData(root, url, id, callFun) {
  root
    .$confirm("此操作将永久删除该信息, 是否继续?", "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning",
    })
    .then(() => {
      root.service
        .delete(`${url}/${id}`)
        .then((res) => {
          if (res.data.status === 200) {
            console.log(res);
            root.$message({
              message: "恭喜你，删除成功",
              type: "success",
            });
            callFun(root, url);
          }
        })
        .catch((err) => {
          throw err;
        });
    })
    .catch(() => {
      root.$message({
        type: "info",
        message: "已取消删除",
      });
    });
}

// 作业列表获取表格数据方法封装
export function getTableData(root, url, params, arr) {
  root.service
    .get(url, { params: params || {} })
    .then((res) => {
      root.tableData = res.data.data;
      root.total = res.data.total;
      root.tableData.map((item) => {
        arr.map((aItem) => {
          item[aItem]
            ? (item[aItem + "_text"] = "是")
            : (item[aItem + "_text"] = "否");
          //   console.log(aItem);
        });
        // console.log(item);
        // console.log(arr);
      });
      root.loading = false;
    })
    .catch((err) => {
      throw err;
    });
}
