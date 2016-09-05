import ElementArrayFinder = protractor.ElementArrayFinder;
import Promise = webdriver.promise.Promise;

export class EligibilityCheckPageObject {

	private pageTitle;
	private callerEligibleButton;
	private callerIneligibleButton;
	private eligibilityCriteriaOne;
	private eligibilityCriteriaTwo;

	constructor() {
		this.pageTitle = element(by.id('pageTitle'));
		this.callerEligibleButton = element(by.id('eligibleBtn'));
		this.callerIneligibleButton = element(by.id('ineligibleBtn'));
		this.eligibilityCriteriaOne = element(by.id('eligibilityCriteriaOne'));
		this.eligibilityCriteriaTwo = element(by.id('eligibilityCriteriaTwo'));
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
		return this.callerIneligibleButton.isPresent();
	}

	indicateEligible(): Promise<void> {
		return this.callerEligibleButton.click();
	}

	indicateIneligible(): Promise<void> {
		return this.callerIneligibleButton.click();
	}

	getEligibilityCriteriaOne(): Promise<void> {
		return this.eligibilityCriteriaOne.getText();
	}

	getEligibilityCriteriaTwo(): Promise<void> {
		return this.eligibilityCriteriaTwo.getText();
	}

}
