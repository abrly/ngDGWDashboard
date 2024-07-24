import { Routes } from '@angular/router';
import { ReceptionComponent } from './reception/reception.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { JobinoutComponent } from './jobinout/jobinout.component';
import { AppointmentComponent } from './appointment/appointment.component';

export const routes: Routes = [
    { path: '', component: ReceptionComponent, pathMatch: 'full' },
    { path: 'reception', component: ReceptionComponent, pathMatch: 'full' },
    { path: 'insurance', component: InsuranceComponent, pathMatch: 'full' },
    { path: 'jobinout', component: JobinoutComponent, pathMatch: 'full' },
    { path: 'appointment', component: AppointmentComponent, pathMatch: 'full' },

];
