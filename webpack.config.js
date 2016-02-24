'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {

    context: path.resolve(__dirname, "src"),
    entry: {
        app: './app.js'
    },
    output: {
        path: path.resolve(__dirname, "public"),
        publicPath: '/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, "src"),
                loader: 'babel'
            },
            {
                test: /\.html$/,
                include: path.resolve(__dirname, "src"),
                loader: 'html'
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, "src"),
                loader: 'style!css'
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        hot: true
    },
    externals: {
        angular: 'angular'
    }


}