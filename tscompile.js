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
        loader: 'babel-loader',
        query: {
          presets: ["es2015","react","stage-2"],
        }
      },
      {
        test: /\.ts(x?)$/, 
        exclude: /node_modules/,
        loader: 'ts-loader'
     }
    ]
  }
  ,
  resolve: {
    // requireやimport時の拡張子を省略
    extensions: ['', '.js', '.jsx','.tsx','.ts']
  }
});