const { merge } = require('webpack-merge');
const { webpackDev } = require('@ts-traning/config');
const webpackCommon = require('./webpack.common');

module.exports = merge(webpackDev, webpackCommon);
