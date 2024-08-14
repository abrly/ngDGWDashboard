import { Component, ElementRef, OnInit, ViewChild,OnDestroy } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import { HighchartsService } from '../../utilityservices/highcharts.service';
import { GatepassService } from '../gatepass.service';
import { Subscription, switchMap, timer } from 'rxjs';
import { SummaryTotals } from '../gp_models/summarytotals.model';

@Component({
  selector: 'app-gpchart1',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './gpchart1.component.html',
  styleUrl: './gpchart1.component.css'
})
export class Gpchart1Component implements OnInit,OnDestroy {

  @ViewChild('charts') public chartEl!: ElementRef;
  
  constructor(private gpService: GatepassService,private highcharts: HighchartsService) { }

  private gpSub!: Subscription;
  
  summaryTotals!:SummaryTotals[];

  myChartData : any[] = [];

  myChartcategories : any[] = []; 


  TotalTransCount:number=0;
  TotalTransExitCount:number=0;

  myChartOptions = {
    chart: {
      type: 'bar',
      height: 325
    },
    title: {
      text: 'ملخص بوابة المرور'
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

    this.gpSub = timer(0, 900000).pipe(

      switchMap(x => this.gpService.getSummaryTotals())

    ).subscribe((response: SummaryTotals[]) => {

      this.summaryTotals=response;

      let colors = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 
        'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 
        'silver', 'teal', 'yellow'];


        this.summaryTotals.forEach(e => {

       
          this.TotalTransCount=e.TotalTransCount;
          this.TotalTransExitCount=e.TotalTransExitCount;       
          
        });


        let iColorIndex= Math.floor(Math.random() * colors.length);


        let In={
          name:"إجمالي المعاملات",
          y:this.TotalTransCount,
          color: colors[iColorIndex]
        };
  
        this.myChartData.push(In);
  
        this.myChartcategories.push("إجمالي المعاملات");

  
        colors.splice(iColorIndex, 1);
  
  
        iColorIndex= Math.floor(Math.random() * colors.length);
  
        let Out={
          name:"إجمالي المخارج",
          y:this.TotalTransExitCount,
          color: colors[iColorIndex]
        };
  
        this.myChartData.push(Out);
  
        this.myChartcategories.push("إجمالي المخارج");
  
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
    this.gpSub.unsubscribe();
  }


}
