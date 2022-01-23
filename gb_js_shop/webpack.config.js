const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const miniCss = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.(s*)css$/,
            use: [
              miniCss.loader,
              'css-loader',
              'sass-loader',
              ],
      },
    ],
    },
    plugins: [
      new HtmlWebpackPlugin({
          title: 'GeekBrains Shop JS2',
          template: path.resolve(__dirname, './public/template.html'), // шаблон
          filename: 'index.html', // название выходного файла
      }),
     new miniCss({
       filename: 'style.css',
     }),
    ],
};