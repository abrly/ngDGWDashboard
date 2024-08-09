import { Component, OnDestroy, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  faCar,
  faUsers,
  faLocation,
  faShop,
  faBoxes,
  faMoneyBill,
  faMoneyBillWave,
  faBarsProgress,
  faJedi,
  faHandHolding,
  faSection
} from '@fortawesome/free-solid-svg-icons';

import { FleetReqService } from '../fleetreq.service';
import { Subscription, switchMap, timer } from 'rxjs';
import { SummaryTotals } from '../models/summarytotals.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-frtopwidget',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './frtopwidget.component.html',
  styleUrl: './frtopwidget.component.css'
})
export class FrtopwidgetComponent implements OnInit,OnDestroy {

  constructor(private frService: FleetReqService) { }

  faCar  =faCar;
  faUsers = faUsers;
  faLocation = faLocation;
  faShop = faShop;
  faBoxes = faBoxes;
  faMoneyBill = faMoneyBill;
  faMoneyBillWave=faMoneyBillWave;
  faBarsProgress=faBarsProgress;
  faJedi=faJedi;
  faHandHolding=faHandHolding;
  faSection=faSection;

  private invSub!: Subscription;

  summaryTotals!:SummaryTotals[];

  public TotalLinesCount!:number;
  public TotalIssueLinesCount!:number;
  public TotalOrderedLinesCount!:number;
  public TotalPendingLinesCount!:number;

  ngOnInit(): void {



    this.invSub = timer(0, 900000).pipe(

      switchMap(x => this.frService.getSummaryTotals())

    ).subscribe((response: SummaryTotals[]) => {

      this.summaryTotals=response;

      this.summaryTotals.forEach(e => {

        this.TotalLinesCount=e.TotalLinesCount;
        this.TotalIssueLinesCount=e.TotalIssueLinesCount;
        this.TotalOrderedLinesCount=e.TotalOrderedLinesCount;
        this.TotalPendingLinesCount=e.TotalPendingLinesCount;
        
      });
 
    
    });


  }


  ngOnDestroy(): void {
    this.invSub.unsubscribe();
  }


}
