var webpack = require('webpack');
var path = require('path');
module.exports = { 
    entry: {
        index: path.resolve("./root/root.js"),
    },
    output: {
        path: path.resolve('./dist/'),
        filename: "[name].js"
    },
    devtool:'#inline-source-maps',
    module: {
        loaders: [
            { 
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react']
                }
            }, { 
                test: /\.css$/, loader: "style-loader!css-loader" 
            }
        ]
    },
    plugins : [
        //new webpack.optimize.UglifyJsPlugin()
    ]
};