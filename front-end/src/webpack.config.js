module.exports = {
  entry: ['@babel/polyfill','./babel/main.js'],
  output: {
    path: __dirname + '/../build/js',
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ],
  },
};