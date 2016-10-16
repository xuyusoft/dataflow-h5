"use strict";

/*
 * 应用打包配置
 */
let APP =
    {
        //应用入口脚本
        main: './src/code/app.jsx',
        /*
         * 引用的第三方类库 js文件
         * 1，在package.json里面dependencies节点安装第三方库
         * 2，在_vendors数组里配置好对应的库名称
         */
        vendors_js: ['react', 'react-dom', 'react-router', 'whatwg-fetch', 'js-cookie', "lodash"],

        /*
         * 是否为Dev打包环境
         */
        Development: true
    };

let path = require('path'),
    webpack = require('webpack'),
    node_modules_dir = path.resolve(__dirname, 'node_modules'),
    CopyWebpackPlugin = require('copy-webpack-plugin');
   // JsDocPlugin = require('jsdoc-webpack-plugin');

let config = {
    entry: {
        app: APP.main,
        vendors_js: APP.vendors_js
    },
    devServer: {
        contentBase: 'src/code',
        compress: true,
        historyApiFallback: true,
        port: 32399,
        watchOptions: { aggregateTimeout: 300, poll: 1000 },
        setup: function (app) {
            // Here you can access the Express app object and add your own custom middleware to it.
            // For example, to define custom handlers for some paths:
            // app.get('/some/path', function(req, res) {res.json({ custom: 'response' }); });
        },
    },
    output: {
        path: 'dist',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/, loader: "babel", exclude: /(node_modules|bower_components|vendors)/,
                query: {
                    presets: ['es2015', 'stage-0'],
                    plugins: [
                        'transform-decorators-legacy'
                    ]
                }
            },
            {
                test: /\.jsx$/, exclude: /(node_modules|bower_components|vendors)/, loader: "babel-loader", query: {
                    presets: ['es2015', 'stage-0', 'react'],
                    plugins: [
                                'transform-decorators-legacy'
                    ]
                }
            },
            { test: /\.less/, loader: 'style-loader!css-loader!less-loader' },
            { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
            { test: /\.css$/, loader: "style!css" },
            //{ test: /\.(png|jpg)$/, loader: "url?limit=2500" },
            //{ test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            //{ test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff2" },
            //{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            //{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            //{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json', '.jsx', '.css', '.scss', '.less']
    },

    plugins: [
      new webpack.NoErrorsPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.ProvidePlugin({ Cookies: "js-cookie", _: "lodash"}),
      new webpack.optimize.CommonsChunkPlugin('vendors_js', 'vendors.js'),
      new CopyWebpackPlugin([
          { from: 'src/code/images', to: path.resolve(__dirname, 'images') },
          { from: 'src/code/vendors/ionic/release/css/ionic.min.css', to: path.resolve(__dirname, 'dist') },
          { from: 'src/code/vendors/ionic/release/fonts', to: path.resolve(__dirname, 'fonts') },
          { from: 'src/code/vendors/sweetalert/dist/sweetalert.css', to: path.resolve(__dirname, 'dist') },
          { from: 'src/code/vendors/sweetalert/dist/sweetalert.min.js', to: path.resolve(__dirname, 'dist') }
      ])
    ]
};

if (!APP.Development){
    /*跳过警告*/
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }));
    /*设置打包环境为product，否则打包react会有警告*/
    config.plugins.push(new webpack.DefinePlugin({ "process.env": { NODE_ENV: JSON.stringify("production") } }));
}

module.exports = config;