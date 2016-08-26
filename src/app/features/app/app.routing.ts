import { Routes, RouterModule } from '@angular/router';
import { EligibilityCheckComponent } from '../eligibility-check';
import { CallerIneligibleComponent } from '../caller-ineligible';

const appRoutes: Routes = [
	{ path: '', redirectTo: '/eligibility-check', pathMatch: 'full' },
	{ path: 'eligibility-check', component: EligibilityCheckComponent },
	{ path: 'caller-ineligible', component: CallerIneligibleComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);

