import { Component } from '@angular/core';
import { InsuranceChart1Component } from './insurance-chart1/insurance-chart1.component';
import { Insurancechart2Component } from './insurancechart2/insurancechart2.component';
import { InsurancetopwidgetComponent } from './insurancetopwidget/insurancetopwidget.component';
import { Insurancechart3Component } from './insurancechart3/insurancechart3.component';
import { Insurancechart4Component } from './insurancechart4/insurancechart4.component';

@Component({
  selector: 'app-insurance',
  standalone: true,
  imports: [InsuranceChart1Component,Insurancechart2Component,InsurancetopwidgetComponent,Insurancechart3Component,Insurancechart4Component],
  templateUrl: './insurance.component.html',
  styleUrl: './insurance.component.css'
})
export class InsuranceComponent {

}
