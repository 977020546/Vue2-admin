<template>
  <div id="id">
    <el-tree
      :data="menus"
      show-checkbox
      node-key="id"
      :props="defaultProps"
      ref="tree"
    >
    </el-tree>
    <el-button @click="getCheckedNodes">通过Node获取</el-button>
  </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {
      menus: [],
      defaultProps: {
        label: "name",
        children: "children",
      },
    };
  },
  methods: {
    getCheckedNodes() {
      let arr = this.$refs.tree.getCheckedNodes();
      console.log(arr);
    },
  },
  created() {
    this.menus = [...this.$router.options.routes];
    // console.log(this.$router.options.routes);
    //权限管理和动态路由的思路
    //根据不同的用户登录上来，返回对应的路由权限菜单
    // 一般可以通过树形控件达到权限的精准控制，根据不同的角色，勾选不同的菜单权限，将菜单数据提交给后端进行保存
    // 后端保存之后，在用户进行登录的时候就会查询该用户或该角色所拥有的菜单数据，最终进行动态的渲染展示
    // 动态添加路由使用router.addRoutes方法(已废弃)，后续使用router.addRoute进行动态路由添加
  },
};
</script>

<style scoped></style>
