const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const assign = require('object-assign')

let config = require('./webpack.config.js');

config = assign(config, {
    output: {
        filename: 'js/[name]-[hash:5].js',
        path: __dirname + '/build'
    },
})

config.plugins = config.plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        sourceMap: false
    }),
    new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorOptions: { discardComments: { removeAll: true } },
        canPrint: true
    }),
    new ExtractTextPlugin("css/[name]-[hash:5].css"),
    new webpack.optimize.CommonsChunkPlugin({
        name: "commons",
        filename: "js/commons-[hash:5].js",
        minChunks: 3
    }),
    new webpack.DefinePlugin({
        "process.env": {
            "NODE_ENV": "\"production\""
        }
    })
])

module.exports = config;