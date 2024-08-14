import { Component, OnDestroy, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  faCar,
  faUsers,
  faLocation,
  faShop,
  faBoxes,
  faMoneyBill,
  faMoneyBillWave
} from '@fortawesome/free-solid-svg-icons';

import { InvoiceService } from '../invoice.service';
import { Subscription, switchMap, timer } from 'rxjs';
import { SummaryTotals } from '../models/summarytotals.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invtopwidget',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './invtopwidget.component.html',
  styleUrl: './invtopwidget.component.css'
})
export class InvtopwidgetComponent implements OnInit,OnDestroy {

  constructor(private invService: InvoiceService) { }

  faCar  =faCar;
  faUsers = faUsers;
  faLocation = faLocation;
  faShop = faShop;
  faBoxes = faBoxes;
  faMoneyBill = faMoneyBill;
  faMoneyBillWave=faMoneyBillWave;

  private invSub!: Subscription;

  summaryTotals!:SummaryTotals[];

  public TotalTransCount!:number;
  public TotalTranTypes!:number;
  public TotalInvoiceValue:number=0;
  public TotalUsers!:number;
  public TotalOfflinePaymentsValue:number=0;
  public TotalOnlinePaymentsValue:number=0;

  ngOnInit(): void {



    this.invSub = timer(0, 900000).pipe(

      switchMap(x => this.invService.getSummaryTotals())

    ).subscribe((response: SummaryTotals[]) => {

      this.summaryTotals=response;

      this.summaryTotals.forEach(e => {

        this.TotalTransCount=e.TotalTransCount;
        this.TotalTranTypes=e.TotalTranTypes;
        this.TotalInvoiceValue=e.TotalInvoiceValue;
        this.TotalUsers=e.TotalUsers;
        this.TotalOfflinePaymentsValue=e.TotalOfflinePaymentsValue;
        this.TotalOnlinePaymentsValue=e.TotalOnlinePaymentsValue;
        
      });
 
    
    });


  }



  

  
  ngOnDestroy(): void {
    this.invSub.unsubscribe();
  }


}
