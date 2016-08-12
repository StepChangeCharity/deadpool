import { it, describe, expect, beforeEach } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppConfig } from '../../core/models/app-config';

describe('AppComponent', () => {
	let appComponent: AppComponent;
	let appConfig: AppConfig = null;

	beforeEach(() => {
		appConfig = new AppConfig();
		appConfig.ENVIRONMENT = 'testing';
	});


});
