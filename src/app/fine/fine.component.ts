import { Component } from '@angular/core';
import { Finechart1Component } from './finechart1/finechart1.component';
import { Finechart2Component } from './finechart2/finechart2.component';
import { FinetopwidgetComponent } from './finetopwidget/finetopwidget.component';

@Component({
  selector: 'app-fine',
  standalone: true,
  imports: [Finechart1Component,Finechart2Component,FinetopwidgetComponent],
  templateUrl: './fine.component.html',
  styleUrl: './fine.component.css'
})
export class FineComponent {

}
