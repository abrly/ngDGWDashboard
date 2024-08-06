import { Component } from '@angular/core';
import { Frchart1Component } from './frchart1/frchart1.component';
import { Frchart2Component } from './frchart2/frchart2.component';
import { FrtopwidgetComponent } from './frtopwidget/frtopwidget.component';

@Component({
  selector: 'app-fleetreq',
  standalone: true,
  imports: [Frchart1Component,Frchart2Component,FrtopwidgetComponent],
  templateUrl: './fleetreq.component.html',
  styleUrl: './fleetreq.component.css'
})
export class FleetreqComponent {

}
