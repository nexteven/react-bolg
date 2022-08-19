const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const envConfig = require('./webpack.env.js');

module.exports = merge(baseConfig, envConfig);
