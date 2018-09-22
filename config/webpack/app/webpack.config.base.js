const merge = require('webpack-merge');
const common = require('../webpack.config.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const autoprefixer = require('autoprefixer');
const helpers = require('../helpers');

module.exports = merge(common, {
  context: helpers.resolveFromRootPath('src'),
  entry: {
    app: [
      '@babel/polyfill',
      './index.tsx',
    ],
    vendor: [
      "react",
      "react-dom",
    ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
          {
            loader: 'ts-loader',
          },
        ]
      },
      // {
      //   test: /\.css$/,
      //   include: /node_modules/,
      //   loader: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: {
      //       loader: 'css-loader',
      //     },
      //   }),
      // },
      // {
      //   test: /\.scss$/,
      //   loader: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: [
      //       {
      //         loader: 'css-loader',
      //       },
      //       {
      //         loader: 'postcss-loader',
      //         options: {
      //           ident: 'postcss',
      //           sourceMap: true,
      //           plugins: () => [autoprefixer]
      //         },
      //       },
      //       {
      //         loader: 'sass-loader',
      //         options: {
      //           sourceMap: true,
      //         },
      //       },
      //     ],
      //   }),
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      hash: true,
      chunks: ['manifest', 'vendor', 'app'],
      chunksSortMode: 'manual',
    }),
  ],
  optimization: {
    minimize: false,
    runtimeChunk: {
      name: 'vendor',
    },
    splitChunks: {
      cacheGroups: {
        default: false,
        common: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial',
          minSize: 1,
        },
      },
    },
  },
});
