const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appDirectory = fs.realpathSync(process.cwd());
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);
const host = process.env.HOST || 'localhost';

process.env.NODE_ENV = 'development';

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        hot: true,
        host,
        open: true,
        port: 3000,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: resolveAppPath('src'),
                loader: "babel-loader",
                options: {
                    presets: [
                        require.resolve('babel-preset-react-app'),
                    ]
                }
            }, {
                test: /\.s?css$/,
                use: [
                    "style-loader", 
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // inject: true,
            template: resolveAppPath('public/index.html'),
        }),
    ],
}
