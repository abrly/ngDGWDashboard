import { Component, ElementRef, OnInit, ViewChild,OnDestroy } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import { AssetService } from '../asset.service';
import { Subscription, switchMap, timer } from 'rxjs';
import { HighchartsService } from '../../utilityservices/highcharts.service';
import { SubjectwiseTotals } from '../models/subjectwisetotals.model';

@Component({
  selector: 'app-assetchart2',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './assetchart2.component.html',
  styleUrl: './assetchart2.component.css'
})
export class Assetchart2Component implements OnInit,OnDestroy {

  @ViewChild('charts') public chartEl!: ElementRef;

  constructor(private assetService: AssetService,private highcharts: HighchartsService) { }

  private assetSub!: Subscription;
  
  subjectwiseTotals!:SubjectwiseTotals[];

  myChartData : any[] = [];

  myChartcategories : any[] = [];


  myChartOptions = {
    chart: {
      type: 'pie',
      height: 325
    },
    title: {
      text: 'عدد المركبات حسب نوع الأصول'
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

    this.assetSub = timer(0, 900000).pipe(

      switchMap(x => this.assetService.getTypewiseTotals())

    ).subscribe((response: SubjectwiseTotals[]) => {

      this.subjectwiseTotals=response;
    
      this.subjectwiseTotals.forEach(e => {
     

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
    this.assetSub.unsubscribe();
  }


}
