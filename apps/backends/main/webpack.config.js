const path = require('path');

console.log('WEBPACK CONFIG __dirname:', __dirname);
console.log('WEBPACK CONFIG process.cwd():', process.cwd());

module.exports = {
  context: __dirname,
  entry: path.join(__dirname, 'src/main.ts'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'production',
  target: 'node',
};