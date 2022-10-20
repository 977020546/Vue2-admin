module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
  outputDir: process.env.outputDir,
  productionSourceMap: false, //删除打包的源文件
  devServer: {
    disableHostCheck: true, // 关闭host检查
    open: true,
    proxy: {
      "/api": {
        target: "http://1.116.64.64:5004/api2/",
        changOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
      // "/api1": {
      //   target: "https://977020546.github.io/", // 代理服务器路径
      //   changeOrigin: true,
      //   pathRewrite: {
      //     "^/api1": "", // 去掉接口地址中的api字符串
      //   },
      // },
    },
  },
};
