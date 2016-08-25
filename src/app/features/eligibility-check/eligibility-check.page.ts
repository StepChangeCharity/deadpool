import ElementArrayFinder = protractor.ElementArrayFinder;
import Promise = webdriver.promise.Promise;

export class EligibilityCheckPageObject {

	private pageTitle;
	private callerEligibleButton;
	private callerIneligibleButton;
	private eligibilityCriteria;

	constructor() {
		this.pageTitle = element(by.id('pageTitle'));
		this.callerEligibleButton = element(by.id('eligibleBtn'));
		this.callerIneligibleButton = element(by.id('ineligibleBtn'));
		this.eligibilityCriteria = element(by.id('eligibilityCriteria'));
	}

	goToEligibilityPage(): Promise<void> {
		return browser.get('/eligibility-check');
	}

	getPageTitle(): Promise<void> {
		return this.pageTitle.getText();
	}

	eligibleButtonIsPresent(): Promise<void> {
		return this.callerEligibleButton.isPresent();
	}

	ineligibleButtonIsPresent(): Promise<void> {
		return this.callerIneligibleButton.isPresent();;
	}

	getEligibilityCriteria(): Promise<void> {
		return this.eligibilityCriteria.getText();
	}



}
