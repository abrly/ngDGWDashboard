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
  faSection,
  faScrewdriver
} from '@fortawesome/free-solid-svg-icons';

import { POService } from '../po.service';
import { Subscription, switchMap, timer } from 'rxjs';
import { SummaryTotals } from '../models/summarytotals.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-potopwidget',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './potopwidget.component.html',
  styleUrl: './potopwidget.component.css'
})
export class PotopwidgetComponent implements OnInit,OnDestroy {

  constructor(private poService: POService) { }

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
  faSection= faSection;
  faScrewdriver=faScrewdriver;

  private invSub!: Subscription;

  summaryTotals!:SummaryTotals[];

  public TotalPOTrans!:number;
  public TotalVendors!:number;
  public TotalParts!:number;
  public TotalAmount:number=0;

  ngOnInit(): void {



    this.invSub = timer(0, 900000).pipe(

      switchMap(x => this.poService.getSummaryTotals())

    ).subscribe((response: SummaryTotals[]) => {

      this.summaryTotals=response;

      this.summaryTotals.forEach(e => {

        this.TotalPOTrans=e.TotalPOTrans;
        this.TotalVendors=e.TotalVendors;
        this.TotalParts=e.TotalParts;
        this.TotalAmount=e.TotalAmount;
        
      });
 
    
    });


  }


  ngOnDestroy(): void {
    this.invSub.unsubscribe();
  }

}
