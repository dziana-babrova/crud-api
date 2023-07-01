var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[hash].js',
  },
};