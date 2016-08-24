import ElementArrayFinder = protractor.ElementArrayFinder;
import Promise = webdriver.promise.Promise;

export class EligibilityCheckPageObject {

	private pageTitle;

	constructor() {
		this.pageTitle = element(by.id('pageTitle'));
	}

	getPageTitle(): Promise<void> {
		return this.pageTitle.getText();
	}

}
