const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: './static/js/components/StueckManagement.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js'
    },
    extensions: ['.js', '.vue']
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
