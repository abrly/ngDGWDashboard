import { Component } from '@angular/core';
import { Invchart1Component } from './invchart1/invchart1.component';
import { Invchart2Component } from './invchart2/invchart2.component';
import { InvtopwidgetComponent } from './invtopwidget/invtopwidget.component';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [Invchart1Component,Invchart2Component,InvtopwidgetComponent],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent {

}
