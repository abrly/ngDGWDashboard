import { Component } from '@angular/core';
import { ReceptionChart1Component } from './chart1/reception_chart1.component';
import { ReceptionChart2Component } from './chart2/reception_chart2.component';
import { ReceptionTopwidgetComponent } from './topwidget/reception_topwidget.component';
import { Assetchart1Component } from './assetchart1/assetchart1.component';
import { Assetchart2Component } from './assetchart2/assetchart2.component';

@Component({
  selector: 'app-reception',
  standalone: true,
  imports: [ReceptionTopwidgetComponent,ReceptionChart1Component,ReceptionChart2Component,Assetchart1Component,Assetchart2Component],
  templateUrl: './reception.component.html',
  styleUrl: './reception.component.css'
})
export class ReceptionComponent {

}
