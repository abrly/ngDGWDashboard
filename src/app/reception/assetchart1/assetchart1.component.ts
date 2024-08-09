import { Component, ElementRef, OnInit, ViewChild,OnDestroy } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import { HighchartsService } from '../../utilityservices/highcharts.service';
import { AssetService } from '../asset.service';
import { Subscription, switchMap, timer } from 'rxjs';
import { SubjectwiseTotals } from '../models/subjectwisetotals.model';

@Component({
  selector: 'app-assetchart1',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './assetchart1.component.html',
  styleUrl: './assetchart1.component.css'
})
export class Assetchart1Component implements OnInit,OnDestroy {


  @ViewChild('charts') public chartEl!: ElementRef;
  
  constructor(private assetService: AssetService,private highcharts: HighchartsService) { }

  private assetSub!: Subscription;
  
  subjecwiseTotals!:SubjectwiseTotals[];

  myChartData : any[] = [];

  myChartcategories : any[] = [];

 

  myChartOptions = {
    chart: {
      type: 'bar',
      height: 325
    },
    title: {
      text: 'عدد المركبات حسب الحالة'
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

    this.assetSub = timer(0, 900000).pipe(

      switchMap(x => this.assetService.getStatuswiseTotals())

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
    this.assetSub.unsubscribe();
  }


}
