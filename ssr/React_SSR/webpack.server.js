const nodeExternals = require('webpack-node-externals');
const path = require('path');
const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');
const serverConfig = {
    entry: "./src/server",
    devtool: "none",
    target: "node",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js',
        publicPath: "/"
    },
    externals: [nodeExternals()],
    module:{
        rules: [
            {
                test: /\.css$/,
                use: ["isomorphic-style-loader", "css-loader?modules"]
            },
            {
                test: /\.(png)|(jpe?g)|gif$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "./img/[name].[hash:5].[ext]",
                        emitFile: false
                    }
                }
            }
        ]
    }
}
module.exports = merge(baseConfig, serverConfig)