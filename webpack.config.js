const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index',
  },
  devtool: 'eval',
  devServer: {
    contentBase: './dist',
  },
  // plugins: [
  //   new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  //   new HtmlWebpackPlugin({
  //     title: 'Caching',
  //   }),
  // ],

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    // filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/static/',
  },
  // optimization: {
  //   moduleIds: 'hashed',
  //   runtimeChunk: 'single',
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendors',
  //         chunks: 'all',
  //       },
  //     },
  //   },
  // },
}
