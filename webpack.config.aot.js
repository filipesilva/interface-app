const ngToolsWebpack = require('@ngtools/webpack');

const commonConfig = require('./webpack.config.common');

module.exports = Object.assign({}, commonConfig, {
  plugins: [
    new ngToolsWebpack.AotPlugin({
      tsConfigPath: './tsconfig.json'
    })
  ]
});
