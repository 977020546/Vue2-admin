// 项目中我们大多数时候都会把对应的接口请求封装成api来调用
import service from "../service";
import qs from "qs";

// 登录接口
export function login(data) {
  return service({
    method: "post",
    url: "/login",
    data,
  });
}

// 学生列表查询接口
export function studentslist(params) {
  return service({
    method: "get",
    url: "/students",
    params,
  });
}
//学生列表删除接口
export function studentsDel(id) {
  return service({
    method: "delete",
    url: `/students/${id}`,
  });
}

// 信息列表、编辑封装
// export function info(type, data) {
//   data = qs.stringify(data);
//   let obj = {
//     method: type,
//     url: "/info",
//     data,
//   };
//   return service(obj);
// }

// 信息列表接口
export function infoList() {
  return service({
    method: "get",
    url: "/info",
  });
}
// 信息列表新增
export function infoAdded(data) {
  data = qs.stringify(data);
  return service({
    method: "post",
    url: "/info",
    data,
  });
}
// 信息列表删除接口
export function delInfo(id) {
  return service({
    method: "delete",
    url: `/info/${id}`,
  });
}
// 信息列表编辑接口;
export function editInfo(data) {
  data = qs.stringify(data);
  return service({
    method: "put",
    url: "/info",
    data,
  });
}

// 作业列表
export function worksList() {
  return service({
    method: "get",
    url: "/works",
  });
}

// 数据获取
export function dataView(data) {
  return service({
    method: "get",
    url: "/dataview",
    data,
  });
}

// 地图散点折线图
export function travelmap() {
  return service({
    method: "get",
    url: "/travel",
  });
}
