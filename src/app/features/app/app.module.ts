import { NgModule, enableProdMode, provide, APP_INITIALIZER, ExceptionHandler } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { LoggingService, LoggingErrorHandler } from '../../core/services/logging-service';
import { AppComponent } from './app.component';
import { HomeComponent } from '../home/home.component';
import { AppConfig } from '../../core/models/app-config';
import { ConfigurationService } from '../../core/services/configuration-service';
import { MasterHeaderComponent } from '../master-header';
import { routing, appRoutingProviders } from './app.routing';
import '../../../theme/styles.scss';

if (process.env.NODE_ENV === 'production') {
	enableProdMode();
}

@NgModule({
	imports: [
		BrowserModule,
		routing
	],
	declarations: [
		AppComponent,
		HomeComponent,
		MasterHeaderComponent
	],
	bootstrap: [
		AppComponent
	],
	providers: [
		AppConfig,
		ConfigurationService,
		LoggingService,
		HTTP_PROVIDERS,
		provide(ExceptionHandler, {useClass: LoggingErrorHandler}),
		provide(APP_INITIALIZER, {
			useFactory: (configurationService: ConfigurationService) => () => {
				return configurationService.loadConfiguration('./app.config.json');
			},
			deps: [ConfigurationService, HTTP_PROVIDERS],
			multi: true
		}),
		appRoutingProviders
	]
})
export class AppModule {

}
