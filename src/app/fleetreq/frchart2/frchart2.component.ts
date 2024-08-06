import { Component, ElementRef, OnInit, ViewChild,OnDestroy } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import { FleetReqService } from '../fleetreq.service';
import { StatusSummary } from '../models/statussummary.model';
import { Subscription, switchMap, timer } from 'rxjs';
import { HighchartsService } from '../../utilityservices/highcharts.service';

@Component({
  selector: 'app-frchart2',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './frchart2.component.html',
  styleUrl: './frchart2.component.css'
})
export class Frchart2Component implements OnInit,OnDestroy {

  @ViewChild('charts') public chartEl!: ElementRef;

  constructor(private frService: FleetReqService,private highcharts: HighchartsService) { }

  private frSub!: Subscription;
  
  statusSummary!:StatusSummary[];

  myChartData : any[] = [];

  myChartcategories : any[] = [];


  myChartOptions = {
    chart: {
      type: 'pie',
      height: 325
    },
    title: {
      text: 'حالة طلبات الأسطول'
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
        text: 'Revenue in %'
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

    ngOnInit(): void {

    this.frSub = timer(0, 30000).pipe(

      switchMap(x => this.frService.getStatusSummary())

    ).subscribe((response: StatusSummary[]) => {

      this.statusSummary=response;
    
      this.statusSummary.forEach(e => {
     

        let dataObj={
          name:e.RequestStatus,
          y:e.RequestCount
        };

        this.myChartData.push(dataObj);

        this.myChartcategories.push(e.RequestStatus)

        
      });

    
      //---------------------------------
      // Create Chart
     
      this.highcharts.createChart(this.chartEl.nativeElement, this.myChartOptions);
      
      // -------------------------------

      this.myChartData.length = 0;
      this.myChartcategories.length = 0;

    });

  }


  ngOnDestroy(): void {
    this.frSub.unsubscribe();
  }

}
