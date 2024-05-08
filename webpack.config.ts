const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'ts-loader',
        test: /\.tsx?$/,
      },
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: ['babel-loader'],
      },
      {
        test: /\.(jpg|png|gif|woff|eot|ttf|svg)/,
        use: {
          loader: 'url-loader', // this need file-loader
          options: {
            limit: 50000,
          },
        },
      },
      {
        test: /\.(s*)css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              defaultExport: true,
              esModule: true,
            },
          },
          'css-loader',
        ],
      },
    ],
  },
  output: {
    filename: 'index-bundle.js',
    path: path.join(__dirname, '/dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
}
