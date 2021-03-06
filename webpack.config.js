const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

module.exports = {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000
  },
  output: {
    publicPath: 'http://localhost:3000/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'federation_demo_container',
      library: { type: 'var', name: 'federation_demo_container' },
      filename: 'remoteEntry.js',
      remotes: {
        federation_demo_design: 'federation_demo_design',
        federation_demo_about: 'federation_demo_about'
      },
      exposes: {
        './Home': './src/Home'
      },
      shared: ['react', 'react-dom', 'styled-components']
    }),
    htmlPlugin
  ]
};
