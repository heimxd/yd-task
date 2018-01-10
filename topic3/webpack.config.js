const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MyPlugin = require('./myplugin');

module.exports = {
    entry: {
        thumb: __dirname + '/public/js/x-thumb.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
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
            template: __dirname + '/views/layout.html',
            inject: false,
            chunks: []
        }),
        /* new HtmlWebpackPlugin({
            filename: 'views/404.html',
            template: __dirname + '/views/404.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'views/500.html',
            template: __dirname + '/views/500.html'
        }), */
        new HtmlWebpackPlugin({
            filename: 'views/index/thumb.html',
            // template: __dirname + '/views/index/index.js',
            template: __dirname + '/views/index/index.html',
            inject: false,
            chunks: ['commons', 'thumb']
        }),
        new MyPlugin()
    ]
}