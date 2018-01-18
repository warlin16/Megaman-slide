var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./js/game.js",
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
