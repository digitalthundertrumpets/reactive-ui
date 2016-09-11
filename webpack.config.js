var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: __dirname + '/src/main.js',
  output:
    { path: __dirname + "/dist", filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
   extensions: ['', '.js', 'jsx', '.json']
  }
};
