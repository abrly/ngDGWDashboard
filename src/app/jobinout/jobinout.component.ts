import { Component } from '@angular/core';
import { JobtopwidgetComponent } from './jobtopwidget/jobtopwidget.component';
import { Jobchart1Component } from './jobchart1/jobchart1.component';
import { Jobchart2Component } from './jobchart2/jobchart2.component';
import { Gpchart1Component } from './gpchart1/gpchart1.component';
import { Gpchart2Component } from './gpchart2/gpchart2.component';

@Component({
  selector: 'app-jobinout',
  standalone: true,
  imports: [JobtopwidgetComponent,Jobchart1Component,Jobchart2Component,Gpchart1Component,Gpchart2Component],
  templateUrl: './jobinout.component.html',
  styleUrl: './jobinout.component.css'
})
export class JobinoutComponent {

}
