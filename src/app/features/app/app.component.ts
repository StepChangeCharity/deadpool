import { OnInit, Component } from '@angular/core';

@Component({
	selector: 'fcc-app',
	template: `
		<fcc-master-header></fcc-master-header>
		<main class='c-site-main c-site-main--example t-clear'>
			<router-outlet></router-outlet>
		</main>
	`
})
export class AppComponent implements OnInit {

	constructor() { }

	ngOnInit(): void { }

}

