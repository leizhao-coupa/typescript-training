const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  output: {
    filename: '[name].js',
  },
  devServer: {
    static: [path.join('.', 'public')],
    compress: true,
    host: 'localhost',
    port: 9001,
    hot: true,
    // // 设置代理
    // proxy: {
    //   // 将本地 /api/xxx 代理到 localhost:3000/api/xxx
    //   '/api': 'http://localhost:3000',

    //   // 将本地 /api2/xxx 代理到 localhost:3000/xxx
    //   '/api2': {
    //     target: 'http://localhost:3000',
    //     pathRewrite: {
    //       '/api2': '',
    //     },
    //   // resolve cors problem
    //    changeOrigin: true,
    //   },
    // },
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: (resourcePath) => !resourcePath.includes('node_modules'),
                localIdentName: '[name]__[local]__[hash:base64:5]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']],
              },
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|ttf|svg)$/i,
        type: 'asset/resource',
        // // url-loader and file-loader is deprecated since webpack 5 and css-loader 6
        // use: [
        //   {
        //     loader: 'url-loader',
        //   },
        // ],
      },
    ],
  },
  plugins: [
    new ReactRefreshPlugin(),
    // new CopyPlugin({ patterns: [{ from: '', to: '' }] }),
  ],
});
