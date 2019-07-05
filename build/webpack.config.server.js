const path = require('path')

let config = {
    mode: 'none',
    target: 'node',
    entry: {
        app: path.join(__dirname, '../client/server-entry.js'),
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'server-entry.js',
        libraryTarget: 'commonjs2'
        
    },
    resolve: {
        extensions: ['.js','.jsx']
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: ['@babel/preset-env','@babel/preset-react'],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    ["import", {
                        "libraryName": "antd",
                        "libraryDirectory": "es",
                        "style": "css"
                    }],
                    
                ]
            }
        },
        {
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
        }
    ]
    },
    
    
}



module.exports = config