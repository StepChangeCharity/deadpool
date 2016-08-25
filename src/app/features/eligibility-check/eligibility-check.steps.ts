let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

import { binding, given, when, then } from "cucumber-tsflow";
import { EligibilityCheckPageObject	 } from "./eligibility-check.page";
import Callback = cucumber.CallbackStepDefinition;

@binding()
class EligibilityCheckFeatureSteps {

	private eligibitlityPageObject: EligibilityCheckPageObject = new EligibilityCheckPageObject();

	@given(/^a colleague is on the eligibility page/)
	public givenColleagueIsOnTheEligibilityPage(callback): void {
		this.eligibitlityPageObject.goToEligibilityPage();
		callback();
	}

	@then(/^they can indicate that a caller is eligible for our services/)
	public thenTheyCanIndicateThatCallerIsEligibleForOurServices (callback): void {
		expect(this.eligibitlityPageObject.eligibleButtonIsPresent()).to.become(true).and.notify(callback);
	}

	@then(/^they can indicate that a caller is ineligible for our services/)
	public thenTheyCanIndicateThatCallerIsIneligibleForOurServices (callback): void {
		expect(this.eligibitlityPageObject.ineligibleButtonIsPresent()).to.become(true).and.notify(callback);
	}

	@then(/^they can see the criteria needed to determine if a caller is eligible for our services/)
	public theyCanSeeCriteriaToDetermineIfCallerIsEligibleForServices (callback): void {
		expect(this.eligibitlityPageObject.getEligibilityCriteria()).to.become('They are 18 or over\nTheir debts were taken our in the UK').and.notify(callback);
	}

	@then(/^the eligibility check page should be displayed$/)
	public thenTheEligibilityCheckPageShouldBeDisplayed (callback): void {
		expect(this.eligibitlityPageObject.getPageTitle()).to.become('Eligibility Check').and.notify(callback);
	}


}

export = EligibilityCheckFeatureSteps;