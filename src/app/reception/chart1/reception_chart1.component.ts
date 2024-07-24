import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import { HighchartsService } from '../../utilityservices/highcharts.service';
import { ReceptionService } from '../reception.service';
import { Subscription, switchMap, timer } from 'rxjs';
import { SubjectwiseTotals } from '../models/subjectwisetotals.model';


@Component({
  selector: 'reception-chart1',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './reception_chart1.component.html',
  styleUrl: './reception_chart1.component.css'
})
export class ReceptionChart1Component implements OnInit {

  @ViewChild('charts') public chartEl!: ElementRef;
  
  constructor(private receptionService: ReceptionService,private highcharts: HighchartsService) { }

  private receptionSub!: Subscription;
  
  subjecwiseTotals!:SubjectwiseTotals[];

  myChartData : any[] = [];

  myChartcategories : any[] = [];

 

  myChartOptions = {
    chart: {
      type: 'bar',
      height: 325
    },
    title: {
      text: 'ملخص المعاملات الموضوعية'
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

    this.receptionSub = timer(0, 30000).pipe(

      switchMap(x => this.receptionService.getSubjectwiseTotals())

    ).subscribe((response: SubjectwiseTotals[]) => {

      this.subjecwiseTotals=response;

      let colors = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 
        'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 
        'silver', 'teal', 'yellow'];
    
      this.subjecwiseTotals.forEach(e => {
       
        let iColorIndex= Math.floor(Math.random() * colors.length);
           

        let dataObj={
          name:e.SubjectName,
          y:e.TotalTrans,
          color: colors[iColorIndex]
        };

        this.myChartData.push(dataObj);

        this.myChartcategories.push(e.SubjectName);



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
    this.receptionSub.unsubscribe();
  }


}
