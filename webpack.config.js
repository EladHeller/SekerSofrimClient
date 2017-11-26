const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const env = process.env.NODE_ENV;
const isProduction = env === 'production';
const webpackConfig = { 
    entry: {
        index: path.resolve("./src/root/root.js")
    },
    output: {
        path: path.resolve('./dist/'),
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
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
            }, { 
                test: /\.(eot|woff2|woff|ttf)$/i, 
                loader: "file-loader?context=src/assets&name=/assets/[path][name].[ext]",
                exclude: /node_modules/,
                include: __dirname,
            },{
                test: /\.(jpe?g|png|gif|svg)$/i,
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
    ]
};

if (!isProduction) {
    webpackConfig.devtool = '#inline-source-maps';
} else {
    webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports =webpackConfig;