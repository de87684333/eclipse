import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { ChartModel } from '../models/chart.model';
import 'chartjs-adapter-luxon';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent implements OnInit {

  @Input()
  chartData?: ChartModel;

  public lineChartData?: ChartConfiguration<'line'>['data'];
  public lineChartOptions?: ChartOptions<'line'>;
  public lineChartLegend = true;


  ngOnInit(): void {
    if(this.chartData) {
      this.lineChartData = {
        labels: this.chartData.labels,
        datasets: this.chartData.series.map((serie) => {
          return {
            data: serie.y,
            label: serie.legend,
            borderColor: serie.color,
            backgroundColor: 'rgba(255,0,0,0.3)',
            pointRadius: 0
          }
        }),
      }

      this.lineChartOptions = {
        responsive: false,
        scales: {
          x: {
            type: 'timeseries',
          }
        },
        plugins: {
          title: {
            display: true,
            text: this.chartData?.title
          },
          legend: {
            position: 'bottom',
            labels: {
              boxWidth: 20,
              boxHeight: 1
            }
          }
        }
      }
    }
  }
}
