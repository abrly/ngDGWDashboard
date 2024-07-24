import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import { HighchartsService } from '../../utilityservices/highcharts.service';
import { AppointmentService } from '../appointment.service';
import { Subscription, switchMap, timer } from 'rxjs';
import { SubjectwiseTotals } from '../models/subjectwisetotals.model';
import { UserPerformance } from '../models/userperformance.model';

@Component({
  selector: 'app-aptchart1',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './aptchart1.component.html',
  styleUrl: './aptchart1.component.css'
})
export class Aptchart1Component {

  @ViewChild('charts') public chartEl!: ElementRef;
  
  constructor(private aptService: AppointmentService,private highcharts: HighchartsService) { }

  private aptSub!: Subscription;
  
  userPerformance!:UserPerformance[];

  myChartData : any[] = [];

  myChartcategories : any[] = []; 

  myChartOptions = {
    chart: {
      type: 'bar',
      height: 325
    },
    title: {
      text: 'التعيينات من قبل وكلاء الخدمة'
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
        enabled: false,
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

    this.aptSub = timer(0, 30000).pipe(

      switchMap(x => this.aptService.getServiceAgentSummary())

    ).subscribe((response: UserPerformance[]) => {

      this.userPerformance=response;

      let colors = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 
        'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 
        'silver', 'teal', 'yellow'];

      
    
      this.userPerformance.forEach(e => {
       
        let iColorIndex= Math.floor(Math.random() * colors.length);
           

        let dataObj={
          name:e.UserName,
          y:e.TotalTrans,
          color: colors[iColorIndex]
        };

        this.myChartData.push(dataObj);

        this.myChartcategories.push(e.UserName);

        colors.splice(iColorIndex, 1);

        
      });

    
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
    this.aptSub.unsubscribe();
  }


}
