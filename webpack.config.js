const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const outputDirectory = 'dist';

module.exports = {
  entry: ['babel-polyfill', './src/index.js'], 
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'main.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
					"babel-loader"
				]
      },
      /*{
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['eslint-loader']
      },*/
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(jpg|png|gif|svg|pdf|ico)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[path][name]-[hash:8].[ext]'
                },
            },
        ]
    },

    ]
  },

  devServer: {
    port: 8000,
    historyApiFallback: true
  }, 

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      inject: false
    })
  ]
};