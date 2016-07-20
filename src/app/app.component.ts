import { Component } from '@angular/core';

@Component({
	selector: 'fcc-app',
	template: `
		<div class="container">
			<img src='./assets/images/logo.jpg' />
			<h1 class="title">{{name}}</h1>
			<h2 class="sub-title">I feel the need, the need for seed!</h2>

			<button (click)="fireUnhandledException()">Test Logging</button>
		</div>
	`,
	styles: [require('./app.scss')]
})
export class AppComponent {
	public name: string = 'My First Angular 2 App';

	private fireUnhandledException(): void {
		// force an unhandled exception to verify it goes to GetSentry
		let s: boolean = eval('return someFunctionThatDoesNotExist();');
	}

}
