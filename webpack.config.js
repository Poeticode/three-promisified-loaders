// Imports
const path = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const plugins = [
  new CleanWebpackPlugin(),
  // new MinifyPlugin()
];

// Webpack Configuration
const config = {
  // Entry
  entry: './_src/app/index.js',

  // Output
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "promisified-loaders.min.js"
  },
  // Loaders
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      }
    ]
  },
  // Plugins
  plugins: plugins,
  // OPTIONAL
  // Reload On File Change
  watch: process.env.NODE_ENV === 'production' ? false : true,
  // Development Tools (Map Errors To Source File)
  // devtool: 'source-map',
};
// Exports
module.exports = config;
