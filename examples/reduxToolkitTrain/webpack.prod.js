const { merge } = require('webpack-merge');
const { webpackProd } = require('@ts-traning/config');
const webpackCommon = require('./webpack.common');

module.exports = merge(webpackProd, webpackCommon);
