const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

let isDev = process.env.NODE_ENV == "devlopment"

let config = {
    mode: 'none',
    entry: {
        app: path.join(__dirname, '../client/index.js'),
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].[hash].js',
        publicPath: '/public/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: [
                    'react-hot-loader/babel',
                    '@babel/plugin-proposal-class-properties',
                    ["import", {
                        "libraryName": "antd",
                        "libraryDirectory": "es",
                        "style": "css"
                    }]
                ]
            }
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [{
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localsConvention: 'asIs'
                    }
                }
            ]
        }, {
            test: /\.css$/,
            exclude: /client/,
            loader: ['style-loader','css-loader']
        }]
    },
    plugins: [
        new HtmlPlugin({
            template: path.join(__dirname, '../client/template.html')
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}

if (isDev) {
    config.devServer = {
        host: '0.0.0.0',
        port: 3000,
        publicPath: '/public/',
        hot: true,
        contentBase: path.join(__dirname, '../dist'),
        historyApiFallback: {
            index: '/public/index.html'
        }
    }
}

module.exports = config