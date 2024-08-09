import { Component, OnDestroy, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  faCar,
  faUsers,
  faLocation,
  faShop,
  faBoxes,
  faMoneyBill,
  faCarTunnel,
  faCalendarCheck,
  faWineBottle,
  faMobile,
  faSatelliteDish,
  faWalkieTalkie
} from '@fortawesome/free-solid-svg-icons';

import { AppointmentService } from '../appointment.service';
import { Subscription, switchMap, timer } from 'rxjs';
import { SummaryTotals } from '../models/summarytotals.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-apttopwidget',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './apttopwidget.component.html',
  styleUrl: './apttopwidget.component.css'
})
export class ApttopwidgetComponent implements OnInit,OnDestroy {

  constructor(private aptService: AppointmentService) { }

  faCar  =faCar;
  faUsers = faUsers;
  faLocation = faLocation;
  faShop = faShop;
  faBoxes = faBoxes;
  faMoneyBill = faMoneyBill;
  faCarTunnel =faCarTunnel;
  faCalendarCheck= faCalendarCheck;
  faWineBottle=faWineBottle;
  faMobile=faMobile;
  faSatelliteDish=faSatelliteDish;
  faWalkieTalkie=faWalkieTalkie;

  
  private aptSub!: Subscription;

  summaryTotals!:SummaryTotals[];

  public TotalAppointments!:number;
  public TotalAppointmentsWeb!:number;
  public TotalAppointmentsMobile!:number;
  public TotalAppointmentsPM!:number;
  public TotalAppointmentsRepair!:number;
 

  ngOnInit(): void {

    this.aptSub = timer(0, 900000).pipe(

      switchMap(x => this.aptService.getSummaryTotals())

    ).subscribe((response: SummaryTotals[]) => {

      this.summaryTotals=response;
      
      this.summaryTotals.forEach(e=>{

        this.TotalAppointments=e.TotalAppointments;
        this.TotalAppointmentsWeb=e.TotalAppointmentsWeb;
        this.TotalAppointmentsMobile=e.TotalAppointmentsMobile;
        this.TotalAppointmentsPM=e.TotalAppointmentsPM;
        this.TotalAppointmentsRepair=e.TotalAppointmentsRepair;


      });
    
    });


  }


  
  ngOnDestroy(): void {
    this.aptSub.unsubscribe();
  }



}
