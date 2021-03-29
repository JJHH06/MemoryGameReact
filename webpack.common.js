const HtmlWebpackPlugin = require('html-webpack-plugin');
// const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js',
  },

  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    chunks: ['main'],
  }),

  ],
  // en caso de que quiera usar .jsx
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [

      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'assets',
          },
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },

    ],
  },
};
