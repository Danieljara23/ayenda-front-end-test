const { merge } = require('webpack-merge');
const webpackConfig = require('./webpack.config.js');
const path = require('path');

module.exports = merge(webpackConfig, {
    mode:'production',
   
});