import { OnInit, Component } from '@angular/core';

@Component({
	selector: 'fcc-eligibility-check',
	template: `
		<h1 id="pageTitle" class="sub-section-title">Eligibility Check</h1>		
		<p>Confirm that the caller is eligible for our advice process.</p>
		<p>A caller is eligible if:</p>
		<ul id="eligibilityCriteria">
			<li>They are 18 or over</li>
			<li>Their debts were taken our in the UK</li>
		</ul>
		<nav class="row">
			<div class="col-3">
				<a id="ineligibleBtn" routerLink="/caller-ineligible" class="btn btn--primary btn--large">Ineligible</a>
			</div>
			<div class="col-3">
				<a id="eligibleBtn" routerLink="/eligibility-check" class="btn btn--primary btn--large">Eligible</a>
			</div>
		</nav>
`
})
export class EligibilityCheckComponent implements OnInit {

	constructor() { }

	ngOnInit(): void { }

}