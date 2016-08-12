import { AppComponent } from './App.Component';

describe('AppComponent', function () {

	beforeEach(() => {
		browser.get('/');
	});

	it('should have a title', () => {
    let subject = browser.getTitle();
    let result = 'StepChange Deadpool';

    expect(subject).toEqual(result);
  });
	
})