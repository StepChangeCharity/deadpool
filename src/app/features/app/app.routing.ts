import { Routes, RouterModule } from '@angular/router';
import { EligibilityCheckComponent } from '../eligibility-check/eligibility-check.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: '/eligibility-check', pathMatch: 'full' },
	{ path: 'eligibility-check', component: EligibilityCheckComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
