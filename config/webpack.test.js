var webpackNotifierPlugin = require('webpack-notifier');
var helpers = require('./helpers');

module.exports = function() {
  
  var config = {};

  config.resolve = {
    extensions: ['', '.ts', '.js', '.scss'],
  };

  config.module = {
	preLoaders: [
		{
			test: /\.ts$/,
			loader: "tslint"
		}
	],
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts',
        exclude: [/\.(e2e)\.ts$/]
      },
	  {
		test: /\.scss$/,
		loader: 'null'
	  },
    ],
    postLoaders: [
      {
        test: /\.ts/,
        loader: 'istanbul-instrumenter-loader',
        exclude: [/\.spec\.ts/, /\.e2e\.ts/]
      }
    ]
  };

  // needed for remap-instanbul
  config.ts = {
    compilerOptions: {
      sourceMap: false,
      sourceRoot: './src/app',
      inlineSourceMap: true
    }
  };

  config.plugins = [
	new webpackNotifierPlugin({
	  title: 'Web Application Seed',
	  excludeWarnings: true,
	  alwaysNotify: true,
	  contentImage: helpers.root('config/notifier.png')
	})
  ]

  return config;

}();