import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-top-three-products',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './bottomright.component.html',
  styleUrl: './bottomright.component.css'
})
export class BottomRightComponent implements OnInit {

  chart = new Chart({
    chart: {
      type: 'bar',
      height: 225
    },
    title: {
      text: 'Top 3 Products'
    },
    xAxis: {
      categories: [
        'Lenova Thinkpad E15',
        'Nectar Orange Juice',
        'Axe Deodarant',
      ]
    },
    yAxis: {
      title: {
        text: ''
      }
    },
    series: [
     {
      type: 'bar',
      showInLegend: false,
      data: [
        {
          name: 'Lenova Thinkpad E15',
          y: 395,
          color: '#044342',
        },
        {
          name: 'Nectar Orange Juice',
          y: 385,
          color: '#7e0505',
        },
        {
          name: 'Axe Deodarant',
          y: 275,
          color: '#ed9e20',
        },
      ]
     }
    ],
    credits: {
      enabled: false
    }
  })

  constructor() { }

  ngOnInit(): void {
  }

}