const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExtendPlugin = require('./myplugin');
const path = require('path');
const fs = require('fs');
const HappyPack = require('happypack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const htmlPages = [];
const htmlChunks = {
    'common-layout': [],
    'index-index': ['index', 'vendor'],
    'home-index': ['home', 'vendor']
}
const entryPath = path.join(__dirname, '..', '/src/webapp/views'); //非监听自动更新模式下
fs.readdirSync(entryPath).map((filename) => {
    let firstDir = path.join(entryPath, filename);
    if (fs.statSync(firstDir).isDirectory()) {
        let pageDir = path.join(firstDir, '');
        fs.readdirSync(pageDir).map(htmlFile => {
            let matchName = htmlFile.match(/^(\w+)\.html$/);
            if (matchName) {
                matchName = matchName[1];
                let htmlFileName = matchName;
                matchName = filename + '-' + htmlFileName;
                htmlPages.push({
                    name: htmlFileName,
                    dir: path.join(filename, htmlFileName),
                    chunks: htmlChunks[matchName],
                });
            }
        });
    }
});

const htmlPlugins = htmlPages.map(htmlPage => {
    let dirHtml = `${htmlPage.dir}.html`;
    return new HtmlWebpackPlugin({
        template: path.join(__dirname, '../src/webapp/views/', dirHtml),
        inject: false,
        chunks: htmlPage.chunks,
        filename: `./views/${dirHtml}`,
    });
});

module.exports = {
    entry: {
        index: './src/webapp/views/index/index.js',
        home: './src/webapp/views/home/index.js'
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    emitError: true,
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: 'happypack/loader?id=js'
            },
            {
                test: /\.css$/,
                exclude: /(node_modules|bower_components)/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    plugins: [
        new HappyPack({
            id: 'js',
            threads: 4,
            loaders: ['babel-loader']
        }),
        ...htmlPlugins,
        new HtmlWebpackExtendPlugin(),
        new HtmlWebpackPlugin({
            template: './src/webapp/widgets/footer/footer.html',
            filename: 'widgets/footer/footer.html',
            inject: false,
            chunks: []
        })
    ]
}