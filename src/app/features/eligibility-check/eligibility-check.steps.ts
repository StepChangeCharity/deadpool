let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

import { binding, given, when, then } from "cucumber-tsflow";
import { EligibilityCheckPageObject } from "./eligibility-check.page";
import Callback = cucumber.CallbackStepDefinition;

@binding()
class EligibilityCheckFeatureSteps {

	private eligibilityPageObject: EligibilityCheckPageObject = new EligibilityCheckPageObject();

	@then(/^the eligibility check page title should be '(.*)'$/)
	public thenTheEligibilityCheckPageTitleShouldBeDisplayed(title: string, callback: Callback): void {
		expect(this.eligibilityPageObject.getPageTitle()).to.become(title).and.notify(callback);
	}
	
	@given(/^a colleague is on the eligibility page/)
	public givenColleagueIsOnTheEligibilityPage(callback): void {
		this.eligibilityPageObject.goToEligibilityPage();
		callback();
	}

	@then(/^they can indicate that a caller is eligible for our services/)
	public thenTheyCanIndicateThatCallerIsEligibleForOurServices(callback: Callback): void {
		expect(this.eligibilityPageObject.eligibleButtonIsPresent()).to.become(true).and.notify(callback);
	}

	@then(/^they can indicate that a caller is ineligible for our services/)
	public thenTheyCanIndicateThatCallerIsIneligibleForOurServices(callback: Callback): void {
		expect(this.eligibilityPageObject.ineligibleButtonIsPresent()).to.become(true).and.notify(callback);
	}

	@then(/^the first eligibility criteria is are '(.*)'$/)
	public theyCanSeeCriteriaOneToDetermineIfCallerIsEligibleForServices(criteriaOne: string, callback: Callback): void {
		expect(this.eligibilityPageObject.getEligibilityCriteriaOne()).to.become(criteriaOne).and.notify(callback);
	}

	@then(/^the second eligibility criteria is were '(.*)'$/)
	public theyCanSeeCriteriaTwoToDetermineIfCallerIsEligibleForServices(criteriaTwo: string, callback: Callback): void {
		expect(this.eligibilityPageObject.getEligibilityCriteriaTwo()).to.become(criteriaTwo).and.notify(callback);
	}

	@when(/^they indicate that a caller is ineligible$/)
	public whenTheyIndicateCallerIneligible(callback: Callback): void {
		this.eligibilityPageObject.indicateIneligible();
		callback();
	}

	@then(/^the caller ineligible page should be displayed$/)
	public thenTheIneligibilityPageShouldBeDisplayed(callback: Callback): void {
		expect(browser.getCurrentUrl()).to.become(browser.baseUrl + '/caller-ineligible').and.notify(callback);
	}

	@when(/^they select the eligible button$/)
	public whenTheySelectTheEligibleButton(callback: Callback): void {
		this.eligibilityPageObject.indicateEligible();
		callback();
	}

	@then(/^the start of the process page should be diplayed$/)
	public thenTheStartOfTheProcessPageShouldBeDiplayed(callback: Callback): void {
		// Write code here that turns the phrase above into concrete actions
		callback();
	}

}

export = EligibilityCheckFeatureSteps;