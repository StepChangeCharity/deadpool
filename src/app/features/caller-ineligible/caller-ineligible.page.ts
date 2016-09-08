import ElementArrayFinder = protractor.ElementArrayFinder;
import Promise = webdriver.promise.Promise;

export class CallerIneligiblePageObject {

	private pageTitle: any;
	private ineligibilityCriteriaOne;
	private ineligibilityCriteriaTwo;
	private homeButton;

	constructor() {
		this.pageTitle = element(by.id('pageTitle'));
		this.ineligibilityCriteriaOne = element(by.id('ineligibilityCriteriaOne'));
		this.ineligibilityCriteriaTwo = element(by.id('ineligibilityCriteriaTwo'));
		this.homeButton = element(by.id('homeBtn'));
	}

	getPageTitle(): Promise<void> {
		return this.pageTitle.getText();
	}

	goToCallerIneligiblePage(): Promise<void> {
		return browser.get('/caller-ineligible');
	}

		getIneligibilityCriteriaOne(): Promise<void> {
		return this.ineligibilityCriteriaOne.getText();
	}

	getIneligibilityCriteriaTwo(): Promise<void> {
		return this.ineligibilityCriteriaTwo.getText();
	}

	goHome(): Promise<void> {
		return this.homeButton.click();
	}

}

