import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { ChartModel } from '../models/chart.model';
import 'chartjs-adapter-luxon';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent implements OnChanges {

  @Input()
  chartData?: ChartModel;

  public lineChartData?: ChartConfiguration<'line'>['data'];
  public lineChartOptions?: ChartOptions<'line'>;
  public lineChartLegend = true;


  ngOnChanges(): void {
    if(this.chartData) {
      this.lineChartData = {
        labels: this.chartData.labels,
        datasets: this.chartData.series.map((serie) => {
          return {
            data: serie.y,
            label: serie.legend,
            borderColor: serie.color,
            backgroundColor: serie.color,
            pointBackgroundColor: serie.color,
            pointBorderColor: serie.color,
            pointRadius: 0
          }
        }),
      }

      this.lineChartOptions = {
        responsive: false,
        scales: {
          x: {
            type: 'timeseries',
            time: {
              displayFormats: {
                hour: 'dd/MM - HH:00'
              }
            }
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
          },
          tooltip: {
            enabled: true,
            intersect: false,
          }
        }
      }
    }
  }
}
