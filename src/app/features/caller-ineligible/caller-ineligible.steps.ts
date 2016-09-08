let chai = require('chai').use(require('chai-as-promised'));
let expect: Chai.ExpectStatic = chai.expect;

import { binding, given, when, then } from "cucumber-tsflow";
import { CallerIneligiblePageObject	 } from "./caller-ineligible.page";
import Callback = cucumber.CallbackStepDefinition;

@binding()
class CallerIneligibleFeatureSteps {

	private callerIneligiblePageObject: CallerIneligiblePageObject = new CallerIneligiblePageObject();

	@given(/^a colleague is on the caller ineligible page/)
	public givenColleagueIsOnTheCallerIneligiblePage(callback: Callback): void {
		this.callerIneligiblePageObject.goToCallerIneligiblePage();
		callback();
	}

	@then(/^the caller ineligible page title should be '(.*)'$/)
	public thenTheCallerIneligiblePageTitleShouldBeDisplayed(title: string, callback: Callback): void {
		expect(this.callerIneligiblePageObject.getPageTitle()).to.become(title).and.notify(callback);
	}

	@then(/^the first ineligibility criteria is '(.*)'$/)
	public theyCanSeeTheFirstIneligibilityCriteriaIs(criteriaOne: string, callback: Callback): void {
		expect(this.callerIneligiblePageObject.getIneligibilityCriteriaOne()).to.become(criteriaOne).and.notify(callback);
	}

	@then(/^the second ineligibility criteria is '(.*)'$/)
	public theyCanSeeTheSecondIneligibilityCriteriaIs(criteriaTwo: string, callback: Callback): void {
		expect(this.callerIneligiblePageObject.getIneligibilityCriteriaTwo()).to.become(criteriaTwo).and.notify(callback);
	}

	@when(/^they select the home button$/)
	public whenTheySelectTheHomeButton(callback: Callback): void {
		this.callerIneligiblePageObject.goHome();
		callback();
	}

	@then(/^the eligibility check page should be displayed$/)
	public thenTheEligibilityCheckPageShouldBeDisplayed(callback: Callback): void {
		expect(browser.getCurrentUrl()).to.become(browser.baseUrl + '/eligibility-check').and.notify(callback);
	}

}

export = CallerIneligibleFeatureSteps;