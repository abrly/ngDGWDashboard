import { Component } from '@angular/core';
import { Aptchart1Component } from './aptchart1/aptchart1.component';
import { Aptchart2Component } from './aptchart2/aptchart2.component';
import { ApttopwidgetComponent } from './apttopwidget/apttopwidget.component';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [Aptchart1Component,Aptchart2Component,ApttopwidgetComponent],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {

}
