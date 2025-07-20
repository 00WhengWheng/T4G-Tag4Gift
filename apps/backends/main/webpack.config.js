const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { join } = require('path');

module.exports = {
  output: {
    path: join(__dirname, '../../../dist/apps/backends/main'),
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new NxAppWebpackPlugin({
      target: 'node',
      compiler: 'tsc',
      main: './src/main.ts',
      tsConfig: './tsconfig.app.json',
      assets: ['./src/assets'],
      optimization: true,
      outputHashing: 'all',
      generatePackageJson: true,
      cache: true,
    }),
  ],
  cache: {
    type: 'filesystem',
  },
  mode: 'production',
};
