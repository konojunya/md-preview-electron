var path = require('path');

module.exports = {
	entry: "./javascripts/app.js",
	output: {
		path: __dirname + "/javascripts",
		filename: "bundle.js",
		libraryTarget: 'commonjs2',
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
				exclude: "/node_modules/",
				query: {
					presets: ["es2015","react"]
				}
			}
		]
	},
	debug: true
};