const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    // from files
    entry: './src/index',

    // to files

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
    },

    // add tsx, and ts

    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },

    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
};
