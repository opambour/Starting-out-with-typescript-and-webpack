const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    target: "web",
    // target: "webworker", // WebWorker
    // target: "node", // Node.js via require
    // target: "async-node", // Node.js via fs and vm
    // target: "node-webkit", // nw.js
    // target: "electron-main", // electron, main process
    // target: "electron-renderer", // electron, renderer process
    mode: 'development',
    devtool: 'source-map',
    resolve: {
        // Add `.ts`, `.tsx`, '.js' and '.es6' as a resolvable extension.
        extensions: ['.tsx', '.ts']
    },
    // watch: true, // Watch the filesystem for changes
    watchOptions: { // The polling interval for watching (also enable polling)
        aggregateTimeout: 300,
        poll: 1000, // refresh and watch every second
        ignored: [/node_modules/, /bower_components/]
    },
    entry: {
        'frontend/index': './src/frontend/index.ts'
    },
    output: {
        filename: '[name].build.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            // typescript (.tsx and .ts) rules
            {
                test: /\.(ts|tsx)$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules' || 'public/bower_components')
                ],
                use: [
                    'cache-loader',
                    'tslint-loader',
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true // either happyPackMode or transpileOnly. One at a time
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        // Webpack plugin that runs typescript type checker on a separate process
        new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true }),
        new webpack.WatchIgnorePlugin([/\.js$/, /\.d\.ts$/]),
        // A webpack plugin to remove/clean your build folder(s) before building
        new CleanWebpackPlugin(['dist/'], {
            // options
            verbose: true,
            dry: false
        }),
        // The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles. 
        new HtmlWebpackPlugin({
            title: 'development',
            filename: 'index.html',
            template: './public/views/index.html'
        })
    ]
};