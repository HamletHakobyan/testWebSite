'use strict';

var path = require('path');
// var CleanupPlugin = require('webpack-cleanup-plugin');

require('file-loader');

module.exports = {
	context: path.join(__dirname, 'src'),
	entry: './app.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	
	module: {
		loaders: [
			{ test: /\.css$/, loaders:['style', 'css'] },
		]
	}//,
	// plugins: [
		// new CleanupPlugin({
			// exclude: ['.git']
		// })
	// ]
}