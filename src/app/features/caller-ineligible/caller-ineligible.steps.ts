let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

import { binding, given, when, then } from "cucumber-tsflow";
import { CallerIneligiblePageObject	 } from "./caller-ineligible.page";
import Callback = cucumber.CallbackStepDefinition;

@binding()
class CallerIneligibleFeatureSteps {

	private callerIneligiblePageObject: CallerIneligiblePageObject = new CallerIneligiblePageObject();

	@given(/^a colleague is on the caller ineligible page/)
	public givenColleagueIsOnTheCallerIneligiblePage(callback): void {
		this.callerIneligiblePageObject.goToCallerIneligiblePage();
		callback();
	}

	@then(/^the caller ineligible page title should be displayed$/)
	public thenTheCallerIneligiblePageTitleShouldBeDisplayed(callback): void {
		expect(this.callerIneligiblePageObject.getPageTitle()).to.become('Caller Ineligible').and.notify(callback);
	}

}

export = CallerIneligibleFeatureSteps;