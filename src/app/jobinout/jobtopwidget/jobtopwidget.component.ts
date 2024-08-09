import { Component, OnDestroy, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  faCar,
  faUsers,
  faLocation,
  faShop,
  faBoxes,
  faMoneyBill,
  faCarTunnel 
} from '@fortawesome/free-solid-svg-icons';

import { JobInOutService } from '../jobinout.service';
import { Subscription, switchMap, timer } from 'rxjs';
import { SummaryTotals } from '../models/summarytotals.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jobtopwidget',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './jobtopwidget.component.html',
  styleUrl: './jobtopwidget.component.css'
})
export class JobtopwidgetComponent implements OnInit,OnDestroy {

  constructor(private jobInOutService: JobInOutService) { }

  faCar  =faCar;
  faUsers = faUsers;
  faLocation = faLocation;
  faShop = faShop;
  faBoxes = faBoxes;
  faMoneyBill = faMoneyBill;
  faCarTunnel =faCarTunnel;

  private receptionSub!: Subscription;

  summaryTotals!:SummaryTotals[];

  public TotalJobCardsIn!:number;
  public TotalJobCardsCommercialsIn!:number;
  public TotalJobCardsHHPOIn!:number;
  public TotalJobCardsOut!:number;
  public TotalJobCardsCommercialsOut!:number;
  public TotalJobCardsHHPOOut!:number;

  ngOnInit(): void {



    this.receptionSub = timer(0, 900000).pipe(

      switchMap(x => this.jobInOutService.getSummaryTotals())

    ).subscribe((response: SummaryTotals[]) => {

      this.summaryTotals=response;

      this.summaryTotals.forEach(e => {

        this.TotalJobCardsIn=e.TotalJobCardsIn;
        this.TotalJobCardsCommercialsIn=e.TotalJobCardsCommercialsIn;
        this.TotalJobCardsHHPOIn=e.TotalJobCardsHHPOIn;
        
        this.TotalJobCardsOut=e.TotalJobCardsOut;
        this.TotalJobCardsCommercialsOut=e.TotalJobCardsCommercialsOut;
        this.TotalJobCardsHHPOOut=e.TotalJobCardsHHPOOut;
        
      });
 
    
    });


  }



  

  
  ngOnDestroy(): void {
    this.receptionSub.unsubscribe();
  }



}
