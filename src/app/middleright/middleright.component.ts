import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import { ReceptionService } from '../reception/reception.service';
import { UserPerformance } from '../reception/models/userperformance.model';
import { Subscription, switchMap, timer } from 'rxjs';
import { HighchartsService } from '../utilityservices/highcharts.service';


@Component({
  selector: 'app-sales-by-category',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './middleright.component.html',
  styleUrl: './middleright.component.css'
})
export class MiddleRightComponent implements OnInit {

  @ViewChild('charts') public chartEl!: ElementRef;
  constructor(private receptionService: ReceptionService,private highcharts: HighchartsService) { }

  private receptionSub!: Subscription;
  
  userPerformances!:UserPerformance[];

  myChartData : any[] = [];

  myChartcategories : any[] = [];


  myChartOptions = {
    chart: {
      type: 'pie',
      height: 325
    },
    title: {
      text: 'Userwise Transaction Summary'
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

    this.receptionSub = timer(0, 30000).pipe(

      switchMap(x => this.receptionService.getUserPerformance())

    ).subscribe((response: UserPerformance[]) => {

      this.userPerformances=response;
    
      this.userPerformances.forEach(e => {
     

        let dataObj={
          name:e.UserName,
          y:e.TotalTrans
        };

        this.myChartData.push(dataObj);

        this.myChartcategories.push(e.UserName)

        
      });

    
      //---------------------------------
      // Create Chart
     
      this.highcharts.createChart(this.chartEl.nativeElement, this.myChartOptions);
      
      // -------------------------------

      this.myChartData.length = 0;
      this.myChartcategories.length = 0;

    });

  }


  
  


 
}
