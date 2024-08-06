import { Component, ElementRef, OnInit, ViewChild,OnDestroy } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import { AppointmentService } from '../appointment.service';
import { UserPerformance } from '../models/userperformance.model';
import { Subscription, switchMap, timer } from 'rxjs';
import { HighchartsService } from '../../utilityservices/highcharts.service';
import { SummaryTotals } from '../models/summarytotals.model';

@Component({
  selector: 'app-aptchart2',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './aptchart2.component.html',
  styleUrl: './aptchart2.component.css'
})
export class Aptchart2Component implements OnInit,OnDestroy {

  @ViewChild('charts') public chartEl!: ElementRef;
  constructor(private aptService: AppointmentService,private highcharts: HighchartsService) { }

  private aptSub!: Subscription;
  
  summaryTotals!:SummaryTotals[];

  myChartData : any[] = [];

  myChartcategories : any[] = [];


  myChartOptions = {
    chart: {
      type: 'pie',
      height: 325
    },
    title: {
      text: 'ملخص سبب المواعيد'
    },    
    xAxis: {
      categories: this.myChartcategories,
      labels: {
        rotation: 0,
        align: 'right',
        style: {
            fontSize: '18px',
            fontFamily: 'Dubai'
        }
      }
    },
    yAxis: {
      title: {
        text: 'Trans in %'
      }
    },
    series: [
     {
      type: 'pie',
      data: this.myChartData,
      dataLabels: {
        enabled: true,
        rotation: 0,
        color: 'black',
        align: 'right',
        x: 4,
        y: 10,
        style: {
            fontSize: '16px',
            fontFamily: 'Dubai'
        }
      }
     }
    ],
    credits: {
      enabled: false
    },
    tooltip: {
      pointFormat: '{series.name}: <br>{point.percentage:.1f} %<br>value: {point.y}'
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>:<br>{point.percentage:.1f} %<br>value: {point.y}',
        }
      }
    }
  };

  preventiveMaintTotals!:number;
  repairTotals!:number

    ngOnInit(): void {

    this.aptSub = timer(0, 30000).pipe(

      switchMap(x => this.aptService.getSummaryTotals())

    ).subscribe((response: SummaryTotals[]) => {

      this.summaryTotals=response;
    
      this.summaryTotals.forEach(e => {
     
        this.preventiveMaintTotals=e.TotalAppointmentsPM;
        this.repairTotals=e.TotalAppointmentsRepair;
        
      });


      let dataObjPM={
        name:"الصيانة الوقائية",
        y:this.preventiveMaintTotals
      };

      this.myChartData.push(dataObjPM);

      this.myChartcategories.push("الصيانة الوقائية")


      let dataObjRepairs={
        name:"الإصلاحات",
        y:this.repairTotals
      };

      this.myChartData.push(dataObjRepairs);

      this.myChartcategories.push("الإصلاحات")



    
      //---------------------------------
      // Create Chart
     
      this.highcharts.createChart(this.chartEl.nativeElement, this.myChartOptions);
      
      // -------------------------------

      this.myChartData.length = 0;
      this.myChartcategories.length = 0;

    });

  }


  ngOnDestroy(): void {
    this.aptSub.unsubscribe();
  }

}
