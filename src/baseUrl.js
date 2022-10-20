let baseUrl = ""; //这里是一个默认的url，可以没有
switch (process.env.NODE_ENV) {
  case "development":
    baseUrl = process.env.VUE_APP_BASE_URL; //开发环境url
    break;
  case "test": // 注意这里的名字要和步骤二中设置的环境名字对应起来
    baseUrl = process.env.VUE_APP_BASE_URL; //测试环境中的url
    break;

  case "production":
    baseUrl = process.env.VUE_APP_BASE_URL; //生产环境url
    break;
}
export default baseUrl;
