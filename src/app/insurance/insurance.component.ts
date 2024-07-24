import { Component } from '@angular/core';
import { InsuranceChart1Component } from './insurance-chart1/insurance-chart1.component';
import { Insurancechart2Component } from './insurancechart2/insurancechart2.component';
import { InsurancetopwidgetComponent } from './insurancetopwidget/insurancetopwidget.component';

@Component({
  selector: 'app-insurance',
  standalone: true,
  imports: [InsuranceChart1Component,Insurancechart2Component,InsurancetopwidgetComponent],
  templateUrl: './insurance.component.html',
  styleUrl: './insurance.component.css'
})
export class InsuranceComponent {

}
