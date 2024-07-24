import { Component } from '@angular/core';
import { ReceptionChart1Component } from './chart1/reception_chart1.component';
import { ReceptionChart2Component } from './chart2/reception_chart2.component';
import { ReceptionTopwidgetComponent } from './topwidget/reception_topwidget.component';

@Component({
  selector: 'app-reception',
  standalone: true,
  imports: [ReceptionTopwidgetComponent,ReceptionChart1Component,ReceptionChart2Component],
  templateUrl: './reception.component.html',
  styleUrl: './reception.component.css'
})
export class ReceptionComponent {

}
