const path = require('path');

const PORT = 3000;

module.exports = {
  mode: 'development',
  entry: '/src/index.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devtool: 'eval-cheap-module-source-map',
  // [devServer] configuration for the live server including port
  devServer: {
    // [static] what to serve
    static: path.join(__dirname, 'dist'),
    compress: true,
    // [port] what port on our local machine to run the dev server
    port: PORT,
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
};
