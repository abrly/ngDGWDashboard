import { Component, ElementRef, OnInit, ViewChild,OnDestroy } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import { InsuranceService } from '../insurance.service';
import { Subscription, switchMap, timer } from 'rxjs';
import { HighchartsService } from '../../utilityservices/highcharts.service';
import { SubjectwiseTotals } from '../models/subjectwisetotals.model';

@Component({
  selector: 'app-insurancechart4',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './insurancechart4.component.html',
  styleUrl: './insurancechart4.component.css'
})
export class Insurancechart4Component implements OnInit,OnDestroy {

  @ViewChild('charts') public chartEl!: ElementRef;
  constructor(private insuranceService: InsuranceService,private highcharts: HighchartsService) { }

  private insuranceSub!: Subscription;
  
  subjecwiseTotals!:SubjectwiseTotals[];

  myChartData : any[] = [];

  myChartcategories : any[] = [];


  myChartOptions = {
    chart: {
      type: 'pie',
      height: 325
    },
    title: {
      text: 'ملخص معدات التأمين النشطة'     
     
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

    this.insuranceSub = timer(0, 30000).pipe(

      switchMap(x => this.insuranceService.getActiveInsuranceTotals())

    ).subscribe((response: SubjectwiseTotals[]) => {

      this.subjecwiseTotals=response;
    
      this.subjecwiseTotals.forEach(e => {
     

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
    this.insuranceSub.unsubscribe();
  }

}
