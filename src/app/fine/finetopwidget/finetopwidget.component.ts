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

import { FineService } from '../fine.service';
import { Subscription, switchMap, timer } from 'rxjs';
import { SummaryTotals } from '../models/summarytotals.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-finetopwidget',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './finetopwidget.component.html',
  styleUrl: './finetopwidget.component.css'
})
export class FinetopwidgetComponent implements OnInit,OnDestroy {

  constructor(private fnService: FineService) { }

  faCar  =faCar;
  faUsers = faUsers;
  faLocation = faLocation;
  faShop = faShop;
  faBoxes = faBoxes;
  faMoneyBill = faMoneyBill;
  faMoneyBillWave=faMoneyBillWave;

  private fnSub!: Subscription;

  summaryTotals!:SummaryTotals[];

  public TotalTransCount!:number;
  public TotalTranTypes!:number;
  public TotalEquipments!:number;
  public TotalFineValue!:number;
  public TotalFinePaidValue!:number;
  public TotalFinePendingValue!:number;

  ngOnInit(): void {


    this.fnSub = timer(0, 900000).pipe(

      switchMap(x => this.fnService.getSummaryTotals())

    ).subscribe((response: SummaryTotals[]) => {

      this.summaryTotals=response;

      this.summaryTotals.forEach(e => {

        this.TotalTransCount=e.TotalTransCount;
        this.TotalTranTypes=e.TotalTranTypes;
        this.TotalEquipments=e.TotalEquipments;
        this.TotalFineValue=e.TotalFineValue;
        this.TotalFinePaidValue=e.TotalFinePaidValue;
        this.TotalFinePendingValue=e.TotalFinePendingValue;

      });
 
    
    });


  }



  

  
  ngOnDestroy(): void {
    this.fnSub.unsubscribe();
  }


}
