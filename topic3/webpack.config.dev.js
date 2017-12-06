const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const assign = require('object-assign');
const LiveReloadPlugin = require('webpack-livereload-plugin');

let config = require('./webpack.config.js');

config = assign(config, {
	devtool: 'inline-source-map',
	output: {
		filename: 'js/[name].js',
		path: __dirname + '/build'
	}/* ,
	devServer: {
		contentBase: __dirname + "/build",
		compress: true,
		port: 3000
	} */
})

config.plugins = config.plugins.concat([
	new ExtractTextPlugin("css/[name].css"),
	new LiveReloadPlugin({
		appendScriptTag: true
	}),
	new webpack.optimize.CommonsChunkPlugin({
        name: "commons",
        filename: "js/commons.js",
        minChunks: 3
    }),
	new webpack.DefinePlugin({
		"process.env": {
			"NODE_ENV": "\"development\""
		}
	})
])

module.exports = config;