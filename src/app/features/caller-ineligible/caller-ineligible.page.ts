import ElementArrayFinder = protractor.ElementArrayFinder;
import Promise = webdriver.promise.Promise;

export class CallerIneligiblePageObject {

	private pageTitle: any;

	constructor() {
		this.pageTitle = element(by.id('pageTitle'));
	}

	getPageTitle(): Promise<void> {
		return this.pageTitle.getText();
	}

	goToCallerIneligiblePage(): Promise<void> {
		return browser.get('/caller-ineligible');
	}

}

