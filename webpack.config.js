
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require("path");
module.exports = {
    entry : {
        'src/out.js': './src/app.jsx',
        'css/css/style.css~': './css/scss/style.scss'
    },
    output : {
        path: __dirname+'/',
        filename: '[name]'
    },
    devServer: {
            inline: true,
            contentBase: './',
            port: 3001
    },
    watch: true,
    module: {
        loaders: [
            {
            test: /\.jsx$/, exclude: /node_modules/,
                loader: 'babel-loader',
                query: {presets: ['es2015', 'stage-2', 'react']}
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                        use: ['css-loader','postcss-loader', 'resolve-url-loader' ,'sass-loader?sourceMap=true', ]
                })

            },
            {
                test: /\.(png|jpg|gif)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            emitFile: true,
                            name: 'assets/[name].[ext]',
                            context: '',
                            publicPath: '/'
                        }
                    }
                ]
            }
       ]
    },
    plugins: [
        new ExtractTextPlugin('./css/css/style.css')
    ]
}