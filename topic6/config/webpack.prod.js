const webpackCommonConfig = require('./webpack.common');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

const webpackProdConfig = {
    output: {
        filename: 'assets/scripts/[name].[hash:5].js',
        path: path.join(__dirname, '..', '/build')
    },
}
webpackCommonConfig.plugins.push(new ExtractTextPlugin("assets/styles/[name].[hash:5].css"))
webpackCommonConfig.plugins.push(new webpack.optimize.UglifyJsPlugin());
webpackCommonConfig.plugins.push(new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'assets/scripts/[name].[hash:5].js',
    minChunks: 2
}));

module.exports = Object.assign(webpackProdConfig, webpackCommonConfig)
