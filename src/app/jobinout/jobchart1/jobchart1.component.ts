import { Component, ElementRef, OnInit, ViewChild,OnDestroy } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import { HighchartsService } from '../../utilityservices/highcharts.service';
import { Subscription, switchMap, timer } from 'rxjs';
import { SubjectwiseTotals } from '../models/subjectwisetotals.model';
import { JobInOutService } from '../jobinout.service';
import { SummaryTotals } from '../models/summarytotals.model';

@Component({
  selector: 'app-jobchart1',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './jobchart1.component.html',
  styleUrl: './jobchart1.component.css'
})
export class Jobchart1Component implements OnInit,OnDestroy {

  @ViewChild('charts') public chartEl!: ElementRef;
  
  constructor(private jobinoutService: JobInOutService,private highcharts: HighchartsService) { }

  private jobsinoutSub!: Subscription;
 
  myChartData : any[] = [];

  myChartcategories : any[] = [];

  summaryTotals!:SummaryTotals[];

  totalJobCardsIn:number=0;
  totalJobCardsCommercialsIn:number=0;
  totalJobCardsHHPOIn:number=0;

  totalJobCardsOut:number=0;
  totalJobCardsCommercialsOut:number=0;
  totalJobCardsHHPOOut:number=0;


  myChartOptions = {
    chart: {
      type: 'bar',
      height: 325
    },
    title: {
      text: 'ملخص بطاقات العمل'
    },
    xAxis: {
      categories: this.myChartcategories,
      labels: {
        rotation: 0,
        align: 'right',
        color: 'black',
        style: {
            fontSize: '16px',
            fontFamily: 'Dubai',
            color:'black'
        }
      }
    },
    yAxis: {
      title: {
        text: ''
      }
    },
    series: [
     {
      type: 'bar',
      showInLegend: true,
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
    plotOptions: {
      column: {
          colorByPoint: true
      }
  },
    colors: [
      '#ff0000',
      '#00ff00',
      '#0000ff'
  ],
    credits: {
      enabled: false
    }
  }


  ngOnInit(): void {

    this.jobsinoutSub = timer(0, 900000).pipe(

      switchMap(x => this.jobinoutService.getSummaryTotals())

    ).subscribe((response: SummaryTotals[]) => {


      this.summaryTotals=response;

      let colors = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 
        'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 
        'silver', 'teal', 'yellow'];

      this.summaryTotals.forEach(e => {

       
        this.totalJobCardsIn=e.TotalJobCardsIn;
        this.totalJobCardsCommercialsIn=e.TotalJobCardsCommercialsIn;
        this.totalJobCardsHHPOIn=e.TotalJobCardsHHPOIn;
        
        this.totalJobCardsOut=e.TotalJobCardsOut;
        this.totalJobCardsCommercialsOut=e.TotalJobCardsCommercialsOut;
        this.totalJobCardsHHPOOut=e.TotalJobCardsHHPOOut;
        
      });


      let iColorIndex= Math.floor(Math.random() * colors.length);


      let jobsIn={
        name:"فتح أوامر الصيانة - موقع (1)",
        y:this.totalJobCardsIn,
        color: colors[iColorIndex]
      };

      this.myChartData.push(jobsIn);

      this.myChartcategories.push("فتح أوامر الصيانة - موقع (1)");

      colors.splice(iColorIndex, 1);


      iColorIndex= Math.floor(Math.random() * colors.length);

      let jobsCmmi={
        name:"فتح أوامر الصيانة خارجية (8,15)",
        y:this.totalJobCardsCommercialsIn,
        color: colors[iColorIndex]
      };

      this.myChartData.push(jobsCmmi);

      this.myChartcategories.push("فتح أوامر الصيانة خارجية (8)");

      colors.splice(iColorIndex, 1);


      iColorIndex= Math.floor(Math.random() * colors.length);
      let jobsHhpoin={
        name:"فتح أوامر صيانة المكتب الخاص (6)",
        y:this.totalJobCardsHHPOIn,
        color: colors[iColorIndex]
      };

      this.myChartData.push(jobsHhpoin);

      this.myChartcategories.push("فتح أوامر صيانة المكتب الخاص (6)");

      colors.splice(iColorIndex, 1);

      // Outs

      iColorIndex= Math.floor(Math.random() * colors.length);

      let jobsOut={
        name:"انهاء أوامر الصيانة رقم (1)",
        y:this.totalJobCardsOut,
        color: colors[iColorIndex]
      };

      this.myChartData.push(jobsOut);

      this.myChartcategories.push("انهاء أوامر الصيانة رقم (1)");

      colors.splice(iColorIndex, 1);


      iColorIndex= Math.floor(Math.random() * colors.length);

      let jobsCmmO={
        name:"انهاء أوامر الصيانة رقم (8,15)",
        y:this.totalJobCardsCommercialsOut,
        color: colors[iColorIndex]
      };

      this.myChartData.push(jobsCmmO);

      this.myChartcategories.push("انهاء أوامر الصيانة رقم (8)");

      colors.splice(iColorIndex, 1);


      iColorIndex= Math.floor(Math.random() * colors.length);

      let jobsHhpoOut={
        name:"انهاء أوامر صيانة المكتب الخاص (6)",
        y:this.totalJobCardsHHPOOut,
        color: colors[iColorIndex]
      };

      this.myChartData.push(jobsHhpoOut);

      this.myChartcategories.push("انهاء أوامر صيانة المكتب الخاص (6)");

      colors.splice(iColorIndex, 1);

    
      //---------------------------------
      // Create Chart
     
      this.highcharts.createChart(this.chartEl.nativeElement, this.myChartOptions);
      
      // -------------------------------

      this.myChartData.length = 0;
      this.myChartcategories.length = 0;
      colors.length=0;

    });


  }

  ngOnDestroy(): void {
    this.jobsinoutSub.unsubscribe();
  }


}
