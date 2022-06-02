const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  target: 'web',
  entry: {
    index: './src/index.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve('.', 'dist'),
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
    // library: {
    //   type: 'umd',
    // },
  },
  resolve: {
    alias: {
      '@app': path.resolve('.', 'src'),
      '@tests': path.resolve('.', 'tests'),
    },
    extensions: ['.tsx', '.ts', '.js', '.svg', '.png', '.jpg', '.gif'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules|tests)/,
        use: 'babel-loader?cacheDirectory',
      },
      {
        test: /\.(png|jpg|jpeg|gif|ttf|svg)$/i,
        type: 'asset/resource',
        // // url-loader and file-loader is deprecated since webpack 5 and css-loader 6
        // use: [
        //   {
        //     loader: 'url-loader',
        //     options: {
        //       limit: 10 * 1024, // 10kb,
        //       outputPath: '/assets/',
        //       // publicPath: 'https://cdn.abc.com'
        //     },
        //   },
        // ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'index',
      filename: 'index.html',
      template: 'public/index.html',
      chunks: ['index'], // only enject index.js to template
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    // // define different enject var, if use ts, then you need declare these varaible in type file, can only enject js code snippet
    // new webpack.DefinePlugin({
    //   API_BASE_URL:
    //     process.env.NODE_ENV === 'production'
    //       ? JSON.stringify('https://api.prod.com')
    //       : JSON.stringify('https://api.example.com'),
    // }),
  ],
};
