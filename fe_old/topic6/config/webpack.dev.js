const webpackCommonConfig = require('./webpack.common');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

const webpackDevConfig = {
    output: {
        filename: 'assets/scripts/[name].js',
        path: path.join(__dirname, '..', '/build')
    },
}
webpackCommonConfig.plugins.push(new ExtractTextPlugin("assets/styles/[name].css"))
webpackCommonConfig.plugins.push(new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'assets/scripts/[name].js',
    minChunks: 2
}));

module.exports = Object.assign(webpackDevConfig, webpackCommonConfig)
