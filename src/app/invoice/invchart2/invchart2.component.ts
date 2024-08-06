import { Component, ElementRef, OnInit, ViewChild,OnDestroy } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import { InvoiceService } from '../invoice.service';
import { UserPerformance } from '../models/userperformance.model';
import { Subscription, switchMap, timer } from 'rxjs';
import { HighchartsService } from '../../utilityservices/highcharts.service';

@Component({
  selector: 'app-invchart2',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './invchart2.component.html',
  styleUrl: './invchart2.component.css'
})
export class Invchart2Component implements OnInit,OnDestroy {

  @ViewChild('charts') public chartEl!: ElementRef;
  constructor(private invService: InvoiceService,private highcharts: HighchartsService) { }

  private invSub!: Subscription;
  
  userPerformances!:UserPerformance[];

  myChartData : any[] = [];

  myChartcategories : any[] = [];


  myChartOptions = {
    chart: {
      type: 'pie',
      height: 325
    },
    title: {
      text: 'ملخص المعاملات المستخدم'
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

    this.invSub = timer(0, 30000).pipe(

      switchMap(x => this.invService.getUserPerformance())

    ).subscribe((response: UserPerformance[]) => {

      this.userPerformances=response;
    
      this.userPerformances.forEach(e => {
     

        let dataObj={
          name:e.UserName,
          y:e.TotalTrans
        };

        this.myChartData.push(dataObj);

        this.myChartcategories.push(e.UserName)

        
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
    this.invSub.unsubscribe();
  }

}
