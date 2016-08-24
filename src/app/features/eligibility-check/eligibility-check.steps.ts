let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

import { binding, given, then } from "cucumber-tsflow";
import { EligibilityCheckPageObject	 } from "./eligibility-check.page";
import Callback = cucumber.CallbackStepDefinition;

@binding()
class EligibilityCheckFeatureSteps {

	private eligibitlityPageObject: EligibilityCheckPageObject = new EligibilityCheckPageObject();

	@then(/^the eligibility check page should be displayed$/)
	public thenTheEligibilityCheckPageShouldBeDisplayed (callback): void {

		expect(this.eligibitlityPageObject.getPageTitle()).to.become('Eligibility Check').and.notify(callback);

	}


}

export = EligibilityCheckFeatureSteps;