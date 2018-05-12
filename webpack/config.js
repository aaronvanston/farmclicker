const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PRODUCTION = process.env.NODE_ENV === 'production';
const ASSET_HOST = 'http://localhost:3000';

module.exports = {
  devtool: PRODUCTION ? undefined : 'eval',
  mode: PRODUCTION ? 'production' : 'development',

  entry: PRODUCTION ? [
    './src/index',
  ] : [
    'react-hot-loader/patch',
    `webpack-dev-server/client?${ASSET_HOST}`,
    'webpack/hot/only-dev-server',
    './src/index',
  ],

  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: PRODUCTION ? 'bundle-[hash].js' : 'bundle.js',
    publicPath: PRODUCTION ? './' : `${ASSET_HOST}/`,
  },

  plugins: PRODUCTION ? [
    new ExtractTextPlugin('bundle-[hash].css'),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
    }),
  ] : [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
    }),
  ],

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    }, {
      test: /^((?!\.global).)*css$/,
      use: PRODUCTION ? ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              autoprefixer: false,
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
              minimize: true,
            },
          },
          'postcss-loader',
        ],
      }) : [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            autoprefixer: false,
            importLoaders: 1,
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]',
          },
        },
        'postcss-loader',
      ],
    }, {
      test: /\.global.css$/,
      use: PRODUCTION ? ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              autoprefixer: false,
              minimize: true,
            },
          },
          'postcss-loader',
        ],
      }) : [
        'style-loader',
        'css-loader',
        'postcss-loader',
      ],
    }, {
      test: /\.(ico|txt|xml)$/,
      loader: 'file-loader?name=[name].[ext]',
    }, {
      test: /\.(png|svg|eot|woff|woff2)$/,
      loader: 'file-loader?name=assets/[name]-[hash].[ext]',
    }],
  },
};
