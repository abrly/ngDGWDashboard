import { Component } from '@angular/core';
import { Pochart1Component } from './pochart1/pochart1.component';
import { Pochart2Component } from './pochart2/pochart2.component';
import { PotopwidgetComponent } from './potopwidget/potopwidget.component';

@Component({
  selector: 'app-po',
  standalone: true,
  imports: [Pochart1Component,Pochart2Component,PotopwidgetComponent],
  templateUrl: './po.component.html',
  styleUrl: './po.component.css'
})
export class PoComponent {

}
