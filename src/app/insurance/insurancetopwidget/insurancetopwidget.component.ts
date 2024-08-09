import { Component, OnDestroy, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  faCar,
  faUsers,
  faLocation,
  faShop,
  faBoxes,
  faMoneyBill,
} from '@fortawesome/free-solid-svg-icons';
import { InsuranceService } from '../insurance.service';
import { Subscription, switchMap, timer } from 'rxjs';
import { SummaryTotals } from '../models/summarytotals.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-insurancetopwidget',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './insurancetopwidget.component.html',
  styleUrl: './insurancetopwidget.component.css'
})
export class InsurancetopwidgetComponent implements OnInit,OnDestroy {

  constructor(private insuranceService: InsuranceService) { }

  faCar  =faCar;
  faUsers = faUsers;
  faLocation = faLocation;
  faShop = faShop;
  faBoxes = faBoxes;
  faMoneyBill = faMoneyBill;

  private insuranceSub!: Subscription;

  summaryTotals!:SummaryTotals[];

  public TotalTransCount!:number;
  public TotalSubjectsCount!:number;
  public TotalEquipmentsCount!:number;
  public TotalUsersCount!:number;

  ngOnInit(): void {



    this.insuranceSub = timer(0, 900000).pipe(

      switchMap(x => this.insuranceService.getSummaryTotals())

    ).subscribe((response: SummaryTotals[]) => {

      this.summaryTotals=response;

      this.summaryTotals.forEach(e => {

        this.TotalTransCount=e.TotalTransCount;
        this.TotalSubjectsCount=e.TotalSubjectsCount;
        this.TotalEquipmentsCount=e.TotalEquipmentsCount;
        this.TotalUsersCount=e.TotalUsersCount;
        
      });
 
    
    });


  }



  

  
  ngOnDestroy(): void {
    this.insuranceSub.unsubscribe();
  }


}
