import { Component, ElementRef, OnInit, ViewChild,OnDestroy } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import { HighchartsService } from '../../utilityservices/highcharts.service';
import { POService } from '../po.service';
import { Subscription, switchMap, timer } from 'rxjs';
import { StatusSummary } from '../models/statussummary.model';

@Component({
  selector: 'app-pochart1',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './pochart1.component.html',
  styleUrl: './pochart1.component.css'
})
export class Pochart1Component implements OnInit,OnDestroy {

  @ViewChild('charts') public chartEl!: ElementRef;
  
  constructor(private poService: POService,private highcharts: HighchartsService) { }

  private poSub!: Subscription;
  
  statusSummary!:StatusSummary[];

  myChartData : any[] = [];

  myChartcategories : any[] = [];


  myChartOptions = {
    chart: {
      type: 'bar',
      height: 325
    },
    title: {
      text: 'طلبات الشراء'
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

    this.poSub = timer(0, 900000).pipe(

      switchMap(x => this.poService.getStatusSummary())

    ).subscribe((response: StatusSummary[]) => {

      console.log('wuh');

      console.log(response);
      console.log('wuh2');


      this.statusSummary=response;

      let colors = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 
        'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 
        'silver', 'teal', 'yellow'];


        this.statusSummary.forEach(e => {
       
          let iColorIndex= Math.floor(Math.random() * colors.length);
             
  
          let dataObj={
            name:e.RequestStatus,
            y:e.RequestCount,
            color: colors[iColorIndex]
          };
  
          this.myChartData.push(dataObj);
  
          this.myChartcategories.push(e.RequestStatus);
    
  
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
    this.poSub.unsubscribe();
  }


}
