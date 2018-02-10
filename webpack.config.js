var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'static/dist');
var APP_DIR = path.resolve(__dirname, 'static/');

var config = {
	entry: APP_DIR + '/js/index.js',
  	output: {
    	path: BUILD_DIR,
    	filename: 'bundle.js'
  	},
   	module : {
    	loaders : [
     		{
        		test : /\.jsx?/,
        		include : APP_DIR,
        		loader : 'babel-loader'
      		}
    	]
  	}
};

module.exports = config;