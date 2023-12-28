import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { ChartModel } from './models/chart.model';
import { ChartTimeSerieModel } from './models/chart-time-serie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  priceChartData?: ChartModel;
  supplyDemandChartData?: ChartModel;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getData().subscribe((data) => {
      const labels = data.map((d) => d.timestamp);

      const priceSerie = new ChartTimeSerieModel(labels, data.map((d) => d.price), 'yellow', 'Price');
      this.priceChartData = new ChartModel('Price (€)', labels, [priceSerie] );

      const demandSerie = new ChartTimeSerieModel(labels, data.map((d) => d.demand), 'blue', 'Demand');
      const supplySerie = new ChartTimeSerieModel(labels, data.map((d) => d.supply), 'red', 'Supply');
      this.supplyDemandChartData = new ChartModel('Supply & Demand (Mwh)', labels, [demandSerie, supplySerie] );
    });
  }


}
