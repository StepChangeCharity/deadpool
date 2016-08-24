let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

import { binding, given, then } from "cucumber-tsflow";
import { HomePageObject	 } from "./home.page";
import Callback = cucumber.CallbackStepDefinition;

@binding()
class HomeFeatureSteps {

	private homePageObject: HomePageObject = new HomePageObject();

	@then(/^the home page should be displayed$/)
	public thenTheHomePageShouldBeDisplayed (callback): void {

		expect(this.homePageObject.getPageTitle()).to.become('Home').and.notify(callback);

	}


}

export = HomeFeatureSteps;