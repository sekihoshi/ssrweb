const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

let config = {
    entry: {
        app: path.join(__dirname, '../client/index.js'),
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].[hash].js',
        publicPath: '/public/'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: ['@babel/preset-env']
            }
        }]
    },
    plugins: [
        new HtmlPlugin({
            template: path.join(__dirname, '../client/template.html')
        })
    ]
}

module.exports = config