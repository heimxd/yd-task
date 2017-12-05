const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        thumb: __dirname + '/public/js/x-thumb.js'
    },
    output: {
        filename: '[name]-[hash:5].js',
        path: __dirname + '/build'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'views/layout.html',
            template: __dirname + '/views/layout.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'views/404.html',
            template: __dirname + '/views/404.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'views/500.html',
            template: __dirname + '/views/500.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'views/index/thumb.html',
            template: __dirname + '/views/index/index.html'
        }),
        new ExtractTextPlugin({
            filename: 'css/[name]-[hash:5].css'
        }),
    ]
}