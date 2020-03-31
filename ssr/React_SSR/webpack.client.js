const path = require('path');
const baseConfig = require('./webpack.base');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const clientConfig = {
    entry: "./src/client",
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/bundle.[hash:5].js',
        publicPath: "/"
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/*', '!favicon.ico'],
        }),
        new MiniCssExtractPlugin({
            filename: "css/bundle.[hash:5].css"
        })
    ],
    module:{
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader?modules"]
            },
            {
                test: /\.(png)|(jpe?g)|gif$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "./img/[name].[hash:5].[ext]"
                    }
                }
            }
        ]
    }
}
module.exports = merge(baseConfig, clientConfig)