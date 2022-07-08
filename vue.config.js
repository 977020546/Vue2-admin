module.exports = {
  publicPath:"/vue-demo/",
  outputDir:"docs",
  productionSourceMap:false,//删除打包的源文件
  devServer: {
    open: true,
    proxy: {
      "/api": {
        target: "http://1.116.64.64:5004/api2/",
        changOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
