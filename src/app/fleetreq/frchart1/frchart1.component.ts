import { Component, ElementRef, OnInit, ViewChild,OnDestroy } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import { HighchartsService } from '../../utilityservices/highcharts.service';
import { FleetReqService } from '../fleetreq.service';
import { Subscription, switchMap, timer } from 'rxjs';
import { SummaryTotals } from '../models/summarytotals.model';

@Component({
  selector: 'app-frchart1',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './frchart1.component.html',
  styleUrl: './frchart1.component.css'
})
export class Frchart1Component implements OnInit,OnDestroy {

  @ViewChild('charts') public chartEl!: ElementRef;
  
  constructor(private frService: FleetReqService,private highcharts: HighchartsService) { }

  private frSub!: Subscription;
  
  summaryTotals!:SummaryTotals[];

  myChartData : any[] = [];

  myChartcategories : any[] = [];

  TotalLinesCount:number=0;
  TotalIssueLinesCount:number=0;
  TotalOrderedLinesCount:number=0;
  TotalPendingLinesCount:number=0;


  myChartOptions = {
    chart: {
      type: 'bar',
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

    this.frSub = timer(0, 900000).pipe(

      switchMap(x => this.frService.getSummaryTotals())

    ).subscribe((response: SummaryTotals[]) => {

      this.summaryTotals=response;

      let colors = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 
        'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 
        'silver', 'teal', 'yellow'];

        this.summaryTotals.forEach(e => {
       
          this.TotalLinesCount=e.TotalLinesCount;
          this.TotalIssueLinesCount=e.TotalIssueLinesCount;  
          this.TotalOrderedLinesCount=e.TotalOrderedLinesCount; 
          this.TotalPendingLinesCount=e.TotalPendingLinesCount;      
          
        });



        let iColorIndex= Math.floor(Math.random() * colors.length);

        let totalLines={
          name:"إجمالي خطوط طلب الأسطول",
          y:this.TotalLinesCount,
          color: colors[iColorIndex]
        };
  
        this.myChartData.push(totalLines);
  
        this.myChartcategories.push("إجمالي خطوط طلب الأسطول");

  
        colors.splice(iColorIndex, 1);
        

        iColorIndex= Math.floor(Math.random() * colors.length);

        let totalLinesIssued={
          name:"تم إصدار إجمالي خطوط طلب الأسطول",
          y:this.TotalIssueLinesCount,
          color: colors[iColorIndex]
        };
  
        this.myChartData.push(totalLinesIssued);
  
        this.myChartcategories.push("تم إصدار إجمالي خطوط طلب الأسطول");

  
        colors.splice(iColorIndex, 1);

        iColorIndex= Math.floor(Math.random() * colors.length);

        let totalLinesOrdered={
          name:"تم طلب إجمالي خطوط طلب الأسطول",
          y:this.TotalOrderedLinesCount,
          color: colors[iColorIndex]
        };
  
        this.myChartData.push(totalLinesOrdered);
  
        this.myChartcategories.push("تم طلب إجمالي خطوط طلب الأسطول");

  
        colors.splice(iColorIndex, 1);


        iColorIndex= Math.floor(Math.random() * colors.length);

        let totalLinesPending={
          name:"إجمالي خطوط طلب الأسطول في انتظار الإجراء",
          y:this.TotalPendingLinesCount,
          color: colors[iColorIndex]
        };
  
        this.myChartData.push(totalLinesPending);
  
        this.myChartcategories.push("إجمالي خطوط طلب الأسطول في انتظار الإجراء");

  
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
    this.frSub.unsubscribe();
  }



}
