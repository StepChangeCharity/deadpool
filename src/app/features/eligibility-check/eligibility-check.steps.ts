let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

import { binding, given, when, then } from "cucumber-tsflow";
import { EligibilityCheckPageObject } from "./eligibility-check.page";
import Callback = cucumber.CallbackStepDefinition;

@binding()
class EligibilityCheckFeatureSteps {

	private eligibilityPageObject: EligibilityCheckPageObject = new EligibilityCheckPageObject();

	@given(/^a colleague is on the eligibility page/)
	public givenColleagueIsOnTheEligibilityPage(callback): void {
		this.eligibilityPageObject.goToEligibilityPage();
		callback();
	}

	@then(/^they can indicate that a caller is eligible for our services/)
	public thenTheyCanIndicateThatCallerIsEligibleForOurServices(callback): void {
		expect(this.eligibilityPageObject.eligibleButtonIsPresent()).to.become(true).and.notify(callback);
	}

	@then(/^they can indicate that a caller is ineligible for our services/)
	public thenTheyCanIndicateThatCallerIsIneligibleForOurServices(callback): void {
		expect(this.eligibilityPageObject.ineligibleButtonIsPresent()).to.become(true).and.notify(callback);
	}

	@then(/^they can see the criteria needed to determine if a caller is eligible for our services/)
	public theyCanSeeCriteriaToDetermineCallerIsEligibleForServices(callback): void {
		expect(this.eligibilityPageObject.getEligibilityCriteria()).to.become('They are 18 or over\nTheir debts were taken our in the UK').and.notify(callback);
	}

	@then(/^the eligibility check page should be displayed$/)
	public thenTheEligibilityCheckPageShouldBeDisplayed(callback): void {
		expect(this.eligibilityPageObject.getPageTitle()).to.become('Eligibility Check').and.notify(callback);
	}

	@when(/^they indicate that a caller is ineligible$/)
	public whenTheyIndicateCallerIneligible(callback): void {
		this.eligibilityPageObject.indicateIneligible();
		callback();
	}

	@then(/^the ineligibility page should be displayed$/)
	public thenTheIneligibilityShouldBeDisplayed(callback): void {
		// Write code here that turns the phrase above into concrete actions
		callback();
	}

	@when(/^they select the eligible button$/)
	public whenTheySelectTheEligibleButton(callback): void {
		// Write code here that turns the phrase above into concrete actions
		callback();
	}

	@then(/^the start of the process page should be diplayed$/)
	public thenTheStartOfTheProcessPageShouldBeDiplayed(callback): void {
		// Write code here that turns the phrase above into concrete actions
		callback();
	}

}

export = EligibilityCheckFeatureSteps;