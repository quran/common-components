const path = require('path');
const package = require('./package.json');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';
const CleanWebpackPlugin = require('clean-webpack-plugin');
const htmlOutFile = isProduction ? 'index-prod.html' : 'index.html';
console.log(`
ENV: ${process.env.NODE_ENV}
`);

const libraryName = 'cPatterns';
const config = {
    entry: {
        main: './main.js',
        Button: ['./components/Button/index.js']
    },
    output: {
        filename: '[name]/index.js',
        // the output bundle
        libraryTarget: 'umd',
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true,
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        hotUpdateChunkFilename: 'hot/[id].[hash].hot-update.js',
        hotUpdateMainFilename: 'hot/[hash].hot-update.json'
        // necessary for HMR to know where to load the hot update chunks
    },

    context: path.resolve(__dirname, 'src'),

    devServer: {
        // outputPath: path.resolve(__dirname, 'dist'),
        hot: true,
        // enable HMR on the server
        historyApiFallback: true,
        noInfo: false,
        contentBase: path.resolve(__dirname, 'build'),
        // match the output path
        stats: 'errors-only',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        },
        publicPath: '/'
        // match the output `publicPath`
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader',
                ],
                exclude: /node_modules/
            },
            {
                test: /\.js$/, use: "eslint-loader", exclude: /node_modules/
            },
            {
                test: /\.css|.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1, 
                            localIdentName: package.config.cssModulePattern
                        }
                    },
                    'sass-loader?sourceMap',
                    'postcss-loader',
                ],
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(['build'], {
            root: __dirname,
            verbose: true,
            dry: false
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new CopyWebpackPlugin([
            // {output}/file.txt
            { from: htmlOutFile, to: 'index.html' },
            { from: './index.js' }

        ]),
        // enable HMR globally
        // prints more readable module names in the browser console on HMR updates
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : process.env.NODE_ENV),
        }),
        new WriteFilePlugin({
            // Write only files that have ".css" extension.
            log: false,
            useHashIndex: true
        }),
    ],
};

if (isProduction) {
    config.devtool = 'source-map';
    config.externals = [
        {
            'react': {
                root: 'React',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react'
            }
        },
        {
            'react-dom': {
                root: 'ReactDOM',
                commonjs2: 'react-dom',
                commonjs: 'react-dom',
                amd: 'react-dom'
            }
        }]
    config.plugins[1] = () => { };
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        output: { comments: false }, sourceMap: true
    }));

} else {
    config.entry.main = ['./main.js'];
    config.entry.main.unshift(
        'react-hot-loader/patch',
        // activate HMR for React

        'webpack-dev-server/client?http://localhost:8080',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint

        'webpack/hot/only-dev-server'
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates
    );
}

module.exports = config;