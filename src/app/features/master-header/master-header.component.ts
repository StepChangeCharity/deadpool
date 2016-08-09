import { Component } from '@angular/core';

@Component({
	selector: 'fcc-master-header',
	template: `
<header class='c-site-header c-site-header--small t-clear'>
	<div class='c-site-main'>
		<div class='col-4'>
			<a href='#'>
				<img src='/assets/images/logo.jpg' alt='StepChange Debt Charity logo' class='c-site-header__logo' /></a>
		</div>
		<div class='col-8 t-last'>
		</div>
	</div>	
</header>
	`
})
export class MasterHeaderComponent {

	constructor() { }

}

