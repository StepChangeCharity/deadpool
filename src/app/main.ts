import { enableProdMode, provide, APP_INITIALIZER }  from '@angular/core';
import { HTTP_PROVIDERS, Http, XHRBackend }          from '@angular/http';
import { bootstrap }                                 from '@angular/platform-browser-dynamic';
import { AppComponent }                              from './app.component';
import { AppConfig }                                 from './app-config';
import { ConfigurationService }                      from './configuration-service';
import '../theme/styles.scss';

if (process.env.NODE_ENV === 'production') {
	// "enableProdMode" _has_ to be called before bootstrapping the application
	// ... so no choice but to do it as part of the build. 
	enableProdMode();
}

bootstrap(AppComponent, [
	ConfigurationService,
	AppConfig,
	HTTP_PROVIDERS,
	provide(APP_INITIALIZER, {
		useFactory: (cfgService: ConfigurationService) => () => {
			return cfgService.loadConfiguration('./app.config.json');
		},
		deps: [ConfigurationService, HTTP_PROVIDERS],
		multi: true
	})

]);

