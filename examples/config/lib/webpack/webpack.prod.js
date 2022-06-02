const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const path = require('path');

module.exports = merge(commonConfig, {
  mode: 'production',
  output: {
    filename: ({ chunk: { name } }) => {
      return name.match(/webWorker$/i) ? '[name].js' : '[name].[contenthash:8].js';
    },
    // publicPath: 'https://cdn.abc.com'
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
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
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: '**',
          context: 'public',
          globOptions: {
            dot: true,
            ignore: [path.resolve('.', 'public/*.html')],
          },
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'css/main.[contenthash:8].css',
    }),
  ],
  optimization: {
    minimizer: [new TerserJSPlugin({}), new CssMinimizerPlugin({})],

    // 分割代码块
    splitChunks: {
      /**
       * initial 入口 chunk，对于异步导入的文件不处理
          async 异步 chunk，只对异步导入的文件处理
          all 全部 chunk
       */

      // 缓存分组
      cacheGroups: {
        // 第三方模块
        vendor: {
          chunks: 'all',
          name: 'vendor', // chunk 名称
          priority: 10, // 权限更高，优先抽离，重要！！！
          test: /node_modules/,
          minSize: 0, // 大小限制
          minChunks: 1, // 最少复用过几次
        },
      },
    },
  },
});
