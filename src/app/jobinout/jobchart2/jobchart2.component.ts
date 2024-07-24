import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import { JobInOutService } from '../jobinout.service';
import { UserPerformance } from '../models/userperformance.model';
import { Subscription, switchMap, timer } from 'rxjs';
import { HighchartsService } from '../../utilityservices/highcharts.service';
import { SummaryTotals } from '../models/summarytotals.model';

@Component({
  selector: 'app-jobchart2',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './jobchart2.component.html',
  styleUrl: './jobchart2.component.css'
})
export class Jobchart2Component {

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
      type: 'pie',
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
    }
  };

    ngOnInit(): void {

      this.jobsinoutSub = timer(0, 30000).pipe(

        switchMap(x => this.jobinoutService.getSummaryTotals())
  
      ).subscribe((response: SummaryTotals[]) => {
  

      this.summaryTotals=response;
    
      this.summaryTotals.forEach(e => {
     

        this.totalJobCardsIn=e.TotalJobCardsIn;
        this.totalJobCardsCommercialsIn=e.TotalJobCardsCommercialsIn;
        this.totalJobCardsHHPOIn=e.TotalJobCardsHHPOIn;
        
        this.totalJobCardsOut=e.TotalJobCardsOut;
        this.totalJobCardsCommercialsOut=e.TotalJobCardsCommercialsOut;
        this.totalJobCardsHHPOOut=e.TotalJobCardsHHPOOut;

        
      });

      let jobsIn={
        name:"وظائف في",
        y:this.totalJobCardsIn       
      };

      this.myChartData.push(jobsIn);

      this.myChartcategories.push("وظائف في");

         let jobsCmmi={
        name:"وظائف تجارية في",
        y:this.totalJobCardsCommercialsIn,
       
      };

      this.myChartData.push(jobsCmmi);

      this.myChartcategories.push("وظائف تجارية في");

    
      let jobsHhpoin={
        name:"وظائف HHPO في",
        y:this.totalJobCardsHHPOIn      
      };

      this.myChartData.push(jobsHhpoin);

      this.myChartcategories.push("وظائف HHPO في");

   

      // Outs

    

      let jobsOut={
        name:"وظائف خارج",
        y:this.totalJobCardsOut       
      };

      this.myChartData.push(jobsOut);

      this.myChartcategories.push("وظائف خارج");

      let jobsCmmO={
        name:"وظائف تجارية خارج",
        y:this.totalJobCardsCommercialsOut       
      };

      this.myChartData.push(jobsCmmO);

      this.myChartcategories.push("وظائف تجارية خارج");

      let jobsHhpoOut={
        name:"وظائف HHPO خارج",
        y:this.totalJobCardsHHPOOut        
      };

      this.myChartData.push(jobsHhpoOut);

      this.myChartcategories.push("وظائف HHPO خارج");

    
      //---------------------------------
      // Create Chart
     
      this.highcharts.createChart(this.chartEl.nativeElement, this.myChartOptions);
      
      // -------------------------------

      this.myChartData.length = 0;
      this.myChartcategories.length = 0;

    });

  }


  ngOnDestroy(): void {
    this.jobsinoutSub.unsubscribe();
  }

}
