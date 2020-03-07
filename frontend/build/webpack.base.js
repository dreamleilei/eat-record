// webpack.base.js
// 存放 dev 和 prod 通用配置
const webpack = require('webpack');
const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', //入口
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
        ]
    },
    plugins: [
        // 解决vender后面的hash每次都改变
        new webpack.HashedModuleIdsPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'),
        }),
    ],// 插件
};

