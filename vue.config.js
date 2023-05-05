
const path = require('path');

const {
  env: { BASE_URL },
  VUE_CLI_SERVICE: { mode }
} = process;
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  // 修改为相对路径
  publicPath: BASE_URL,
  lintOnSave:false,
  devServer: {
    disableHostCheck: true,
    overlay: {
      warnings: true,
      errors: true
    },
    port: 8080
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('variable', resolve('src/theme/variable.scss'));

    // 修改svg规则file-loader排除svg图标目录
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icon/svg'))
      .end();

    config.module
      .rule('svg-icon')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icon/svg')) // svg 存放目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end();
  },

  productionSourceMap: mode !== 'production'
};
