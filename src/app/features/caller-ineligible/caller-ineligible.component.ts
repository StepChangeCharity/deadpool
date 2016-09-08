import { OnInit, Component } from '@angular/core';

@Component({
	selector: 'fcc-eligibility-check',
	template: `
		<h1 id="pageTitle" class="sub-section-title">Caller Ineligible</h1>
		<p>Explain to the caller that they are not eligible for our advice process as:</p>
		<ul>
			<li id="ineligibilityCriteriaOne">They are less than 18</li>
			<li id="ineligibilityCriteriaTwo">Their debts were not taken out in the UK</li>
		</ul>
		<nav class="row">
			<div class="col-3">
				<a id="homeBtn" routerLink="/eligibility-check" class="btn btn--primary btn--large">Home</a>
			</div>
		</nav>
`
})
export class CallerIneligibleComponent implements OnInit {

	constructor() { }

	ngOnInit(): void { }

}