const path = require("path");

const webpack = require('webpack');
const nodeRoot = path.join( __dirname, 'node_modules' )

module.exports = {
  devtool: 'inline-source-map',
  context: path.resolve(__dirname, './src'),
  entry: {
    "index": "./index.ts"
  },
  output: {
    path: path.resolve(__dirname, "lib"),
    publicPath: "/public/",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.html', '.js', '.vue', '.ts']
  },
  module: {
    rules:[{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude:["node_modules/*"]
    },
    {
      test: /\.ts$/,
      loaders: [
        'babel-loader',
        'ts-loader'
      ],
      exclude: ["node_modules/*"]
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    {
      test: /\.css$/,
      loader: "style-loader!css-loader",
    },
    {
      test: /\.html$/,
      loader: "html-loader",
      exclude:["node_modules/*"]
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
      'socket.io-client': path.join( nodeRoot, 'socket.io-client', 'dist', 'socket.io.js' )
    }
  }
};