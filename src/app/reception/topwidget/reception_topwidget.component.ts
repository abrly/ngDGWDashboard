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
import { ReceptionService } from '../reception.service';
import { Subscription, switchMap, timer } from 'rxjs';
import { SummaryTotals } from '../models/summarytotals.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'reception-topwidget',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './reception_topwidget.component.html',
  styleUrl: './reception_topwidget.component.css'
})
export class ReceptionTopwidgetComponent implements OnInit, OnDestroy {

  constructor(private receptionService: ReceptionService) { }

  faCar  =faCar;
  faUsers = faUsers;
  faLocation = faLocation;
  faShop = faShop;
  faBoxes = faBoxes;
  faMoneyBill = faMoneyBill;

  private receptionSub!: Subscription;

  summaryTotals!:SummaryTotals[];

  public TotalTransCount!:number;
  public TotalSubjectsCount!:number;
  public TotalEquipmentsCount!:number;
  public TotalUsersCount!:number;

  ngOnInit(): void {



    this.receptionSub = timer(0, 80000).pipe(

      switchMap(x => this.receptionService.getSummaryTotals())

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
    this.receptionSub.unsubscribe();
  }


}
