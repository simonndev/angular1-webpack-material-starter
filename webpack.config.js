var path = require('path');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'sourcemap',
  entry: {},
  module: {
    loaders: [
      {
        test: /\.(es6|js)$/,
        exclude: [/app\/lib/, /node_modules/],
        loader: 'ng-annotate!babel'
      },
      {
        test: /\.html$/,
        loader: 'raw'
      },
//      {
//        test:   /\.css$/,
//        loader: "style!css?sourceMap!autoprefixer"
//      },
      // SASS Loader for compiling SCSS to CSS
      {
        test: /\.scss$/,
        loader: 'style!css?sourceMap!autoprefixer!sass?sourceMap'
      },
      // Font and image loader
      {
        test: /\.(png|jpe?g$|ttf|eot|woff|woff2|svg)$/,
        exclude: /node_modules/,
        loader: 'url?limit=100000'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  postcss: function () {
    return [autoprefixer, precss];
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, './client/app'), path.resolve(__dirname, '/node_modules/angular-material')]
  },
  resolve: {
    extensions: ['', '.js', '.es6', '.scss', '.css', '.html', '.json'],
    alias: {
      angularMaterialSass: __dirname + '/node_modules/angular-material/angular-material.scss'
    }
  },
  plugins: [
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      inject: 'body',
      hash: true
    }),

    // Automatically move all modules defined outside of application directory to vendor bundle.
    // If you are using more complicated project structure, consider to specify common chunks manually.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return module.resource && module.resource.indexOf(path.resolve(__dirname, 'client')) === -1;
      }
    })
  ]
};
