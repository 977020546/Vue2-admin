<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    /**
     * 解决 css 引入图片在 github pages 无法获取的问题
     */
    const { NODE_ENV } = process.env;
    document.documentElement.className = NODE_ENV;
  },
};
</script>

<style lang="scss">
@import url("./assets/css/reset.css");
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
