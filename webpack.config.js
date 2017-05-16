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
                test: /\.html$/, loader: "html-loader" 
            }, { 
                test: /\.css$/, loader: "style-loader!css-loader" 
            },{
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: ['file-loader?context=src/images&name=images/[path][name].[ext]', {
                loader: 'image-webpack-loader',
                query: {
                    progressive: true,
                    optimizationLevel: 4,
                    interlaced: false,
                    optipng: {
                    optimizationLevel: 4,
                    },
                    pngquant: {
                    quality: '75-90',
                    speed: 3,
                    },
                },
                }],
                exclude: /node_modules/,
                include: __dirname,
            }
        ]
    },
    plugins : [
        //new webpack.optimize.UglifyJsPlugin()
    ]
};