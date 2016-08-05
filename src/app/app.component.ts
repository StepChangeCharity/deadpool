import { OnInit, Component } from '@angular/core';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { ConfigurationService } from './configuration-service';

@Component({
	selector: 'fcc-app',
	directives: [MdIcon],
	providers: [MdIconRegistry],
	template: `
		<div class="container">		
      <md-icon>build</md-icon>
			<img src='./assets/images/logo.jpg' />
			<h1 class="title">{{name}} - version {{version}}</h1>
			<h2 class="sub-title">I feel the need, the need for seed!</h2>
		</div>
	`,
	styles: [require('./app.scss')]
})
export class AppComponent implements OnInit {
	public name: string = 'My First Angular 2 App';
	public version: string = '';

	constructor(
		private _configurationService: ConfigurationService
	) {
	}

	ngOnInit(): void {
		this.version = this._configurationService.currentConfiguration.APP_VERSION;
	}

}

