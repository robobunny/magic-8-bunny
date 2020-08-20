const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const appDirectory = fs.realpathSync(process.cwd());
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);
process.env.NODE_ENV = 'production';

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      // inject: true,
      template: 'public/index.html',
    })
  ],
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
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
}