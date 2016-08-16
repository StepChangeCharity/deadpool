require('ts-node/register');
var helpers = require('./helpers');
exports.config = {

	useAllAngular2AppRoots: true,

	framework: 'custom',

	frameworkPath: require.resolve('protractor-cucumber-framework'),

	baseUrl: 'http://localhost:9090/',
	specs: [
		helpers.root('src/app/**/*.feature')
	],
	cucumberOpts: {
		require: [
			helpers.root('src/app/**/*.steps.ts')
		],
		format: 'pretty'
	},
	directConnect: true,

	capabilities: {
		'browserName': 'chrome'
	},

	onPrepare: function () {
		browser.ignoreSynchronization = true;
	}

};