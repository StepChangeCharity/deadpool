require('ts-node/register');

var jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var helpers = require('./helpers');

exports.config = {
	framework: 'jasmine',
	baseUrl: 'http://localhost:9090/',
	specs: ['../src/app/**/*.e2e.ts'],
	directConnect: true,

	onPrepare: function () {
		jasmine.getEnv().addReporter(
			new jasmine2HtmlReporter({
				savePath: helpers.root('./automation/'),
				screenshotsFolder: 'images',
				takeScreenshots: true,
				fixedScreenshotName: true,
				filePrefix: 'index'
			})
		);
	},
	useAllAngular2AppRoots: true
}