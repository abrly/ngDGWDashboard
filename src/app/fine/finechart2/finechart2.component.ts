import { Component, ElementRef, OnInit, ViewChild,OnDestroy } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import { FineService } from '../fine.service';
import { Subscription, switchMap, timer } from 'rxjs';
import { HighchartsService } from '../../utilityservices/highcharts.service';
import { TypewiseTotals } from '../models/typewisetotals.model';

@Component({
  selector: 'app-finechart2',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './finechart2.component.html',
  styleUrl: './finechart2.component.css'
})
export class Finechart2Component implements OnInit,OnDestroy {

  @ViewChild('charts') public chartEl!: ElementRef;
  constructor(private fnService: FineService,private highcharts: HighchartsService) { }

  private fnSub!: Subscription;
  
  typewiseTotals!:TypewiseTotals[];

  myChartData : any[] = [];

  myChartcategories : any[] = [];


  myChartOptions = {
    chart: {
      type: 'pie',
      height: 325
    },
    title: {
      text: 'الغرامات حسب أنواع المخالفات'
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

    this.fnSub = timer(0, 900000).pipe(

      switchMap(x => this.fnService.getTypewiseTotals())

    ).subscribe((response: TypewiseTotals[]) => {

      this.typewiseTotals=response;
    
      this.typewiseTotals.forEach(e => {
     

        let dataObj={
          name:e.SubjectName,
          y:e.TotalTrans
        };

        this.myChartData.push(dataObj);

        this.myChartcategories.push(e.SubjectName)

        
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
    this.fnSub.unsubscribe();
  }


}
