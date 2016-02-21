import express from 'express';
import path from 'path';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
// import {compiler} from "./webpack.js";
import {compiler} from "./tscompile.js";
const APP_PORT = 8080;
// Serve the Relay app

var app = new WebpackDevServer(compiler, {
  contentBase: '/public/',
  proxy: {'/api': `http://localhost:3000/api`},
  publicPath: '/build/',
  stats: {colors: true},
});
// Serve static resources
app.use('/', express.static(path.resolve(__dirname, 'public')));
app.use('/', (req, res) => {
  res.redirect("/");
});
app.listen(APP_PORT, () => {
  console.log(`App is now running on http://localhost:${APP_PORT}`);
});