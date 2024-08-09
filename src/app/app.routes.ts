import { Routes } from '@angular/router';
import { ReceptionComponent } from './reception/reception.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { JobinoutComponent } from './jobinout/jobinout.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { FleetreqComponent } from './fleetreq/fleetreq.component';
import { PoComponent } from './po/po.component';
import { FineComponent } from './fine/fine.component';

export const routes: Routes = [
    { path: '', component: ReceptionComponent, pathMatch: 'full' },
    { path: 'reception', component: ReceptionComponent, pathMatch: 'full' },
    { path: 'insurance', component: InsuranceComponent, pathMatch: 'full' },
    { path: 'jobinout', component: JobinoutComponent, pathMatch: 'full' },
    { path: 'appointment', component: AppointmentComponent, pathMatch: 'full' },   
    { path: 'invoice', component: InvoiceComponent, pathMatch: 'full' },
    { path: 'fleetreq', component: FleetreqComponent, pathMatch: 'full' },
    { path: 'po', component: PoComponent, pathMatch: 'full' },
    { path: 'fine', component: FineComponent, pathMatch: 'full' },

];
