const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = { 
    entry: {
        index: path.resolve("./src/root/root.js")
    },
    output: {
        path: path.resolve('./dist/'),
        filename: "[name].js"
    },
    devtool:'#inline-source-maps',
    module: {
        loaders: [
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader",
                    options: {
                        includePaths: ["absolute/path/a", "absolute/path/b"]
                    }
                }]
            },
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
                test: /\.(jpe?g|png|gif|svg|eot|woff2|woff|ttf)$/i,
                loaders: ['file-loader?context=src/assets&name=/assets/[path][name].[ext]', {
                    loader: 'image-webpack-loader',
                    query: {
                        mozjpeg: {
                            progressive: true,
                        },
                        gifsicle: {
                            interlaced: false,
                        },
                        optipng: {
                            optimizationLevel: 4,
                        },
                        pngquant: {
                            quality: '75-90',
                            speed: 3,
                        }
                    }
                }],
                exclude: /node_modules/,
                include: __dirname,
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({hash: true,template:'./index.html' })
        //new webpack.optimize.UglifyJsPlugin()
    ]
};