const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  // 复用babel-plugin-import按需打包
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),

  // 添加lessloader配置对antd的less文件进行编译，并指定primary的颜色为绿色
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#1DA57A" }
  })
);
