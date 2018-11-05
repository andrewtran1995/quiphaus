const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ReactLoadable = require('react-loadable/webpack');

const env = require('../env')();

const shared = [];

const client = [
  new webpack.DefinePlugin(env.stringified),
  new webpack.DefinePlugin({
    __SERVER__: 'false',
    __CLIENT__: 'true',
  }),
  new MiniCssExtractPlugin({
    filename: process.env.NODE_ENV === 'development' ? '[name].css' : '[name].[contenthash].css',
    chunkFilename: process.env.NODE_ENV === 'development' ? '[id].css' : '[id].[contenthash].css',
  }),
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  new ManifestPlugin({ fileName: 'manifest.json' }),
  new ReactLoadable.ReactLoadablePlugin({
    filename: './build/react-loadable.json',
  }),
];

if (process.env.NODE_ENV === 'production') {
  client.push(
    new BundleAnalyzerPlugin({
      anaylzerMode: 'static',
      generateStatsFile: true,
      defaultSizes: 'gzipped',
    }),
  );
}

const server = [
  new webpack.DefinePlugin({
    __SERVER__: 'true',
    __CLIENT__: 'false',
  }),
];

module.exports = {
  shared,
  client,
  server,
};
