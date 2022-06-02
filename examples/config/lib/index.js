const babelConfig = require('./babel/babelrc');
const eslintConfig = require('./eslint/eslintrc');
const jestConfig = require('./jest/jest.config');
const lintStagedConfig = require('./lint-staged/lint-staged.config');
const prettierrcConfig = require('./prettierrc/prettierrc');
const webpackDev = require('./webpack/webpack.dev');
const webpackProd = require('./webpack/webpack.prod');

module.exports = {
  babelConfig,
  eslintConfig,
  jestConfig,
  lintStagedConfig,
  prettierrcConfig,
  webpackDev,
  webpackProd,
};
