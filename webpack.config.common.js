const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js']
  },
  entry: './app/main.ts',
  output: {
    path: path.join(__dirname, './dist'),
    publicPath: 'dist/',
    filename: 'app.main.js'
  },
  plugins: [],
  module: {
    loaders: [
      { test: /\.ts$/, loader: '@ngtools/webpack' }
    ]
  },
  devServer: {
    historyApiFallback: true
  }
};
