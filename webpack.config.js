var HtmlWebpackPlugin = require('html-webpack-plugin')

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  // where to start
  entry: [
    'babel-polyfill',
    './app/index.js'
  ],
  // loaders/transformations
  module: {
    loaders: [
      // test is a regex matching all files with a given file extension
      //{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.js$/, include: __dirname + '/app', loader: "babel-loader"},
      {test: /\.css$/, loader: "style-loader!css-loader"}
    ]
  },
  // where to put transformed code
  output: {
    filename: "index_bundle.js",
    // __dirname is the directory of the currently executing script
    path: __dirname + '/dist'
  },
  //
  plugins: [HTMLWebpackPluginConfig]
}
