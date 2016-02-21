import webpack from 'webpack';
import path from 'path';
export var compiler = webpack({
   entry: path.resolve(__dirname, "browser", 'index.js'),
   output: { filename: 'app.js', path: "/" },
  devtool: "#source-map",
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ["es2015","react","stage-3"],
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ["es2015","react","stage-3"],
        }
      }
    ]
  },
  resolve: {
    // requireやimport時の拡張子を省略
    extensions: ['', '.js', '.jsx']
  }
});