import { OnInit, Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { MasterHeaderComponent } from '../master-header';

@Component({
	selector: 'fcc-app',
	directives: [ ROUTER_DIRECTIVES, MasterHeaderComponent ],
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

